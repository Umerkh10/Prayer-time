import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { dbConnection } from "@/db/dbConnect";
import { sendEmailVerificationCode } from "@/lib/sendEmailVerificationCode";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const { fullname, email, password } = await req.json();

    if (!fullname || !email || !password) {
      return NextResponse.json(
        { message: "Fields are required" },
        { status: 400 }
      );
    }

    const db = await dbConnection();

    const [existingUser] = await db.execute(
      "SELECT id FROM users WHERE email = ?",
      [email]
    );

    if ((existingUser as any[]).length > 0) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
    const hashedPassword = await bcrypt.hash(password, 10);
    const expiryDate = new Date();
    expiryDate.setHours(expiryDate.getHours() + 1);

    const [result] = await db.execute(
      "INSERT INTO users (fullname, email, password, verification_status, role, verification_code, verification_code_expires) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [fullname, email, hashedPassword, false, "user", verifyCode, expiryDate]
    );

    if ((result as any).affectedRows === 1) {
      await sendEmailVerificationCode(email, verifyCode);

      const [user] = await db.execute(
        "SELECT id, fullname, email, role, verification_status FROM users WHERE id = ?",
        [(result as any).insertId]
      );

      const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET!);

      return NextResponse.json(
        { message: "User created successfully", user: { token, ...user[0] } },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        { message: "User registration failed" },
        { status: 500 }
      );
    }
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
