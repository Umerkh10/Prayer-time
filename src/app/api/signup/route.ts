import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { dbConnection } from "@/db/dbConnect";
import { sendEmailVerificationCode } from "@/lib/sendEmailVerificationCode";

export async function POST(req: Request) {
  try {
    const { fullname, email, password } = await req.json();

    if (!fullname || !email || !password) {
      return NextResponse.json(
        { message: "Fullname, email, and password are required" },
        { status: 400 }
      );
    }

    const db = await dbConnection();

    // Check if user already exists
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

    // Hash the password
    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
    const hashedPassword = await bcrypt.hash(password, 10);
    const expiryDate = new Date();
    expiryDate.setHours(expiryDate.getHours() + 1);

    // Insert the new user
    const [user] = await db.execute(
      "INSERT INTO users (fullname, email, password, verification_status, role, verification_code, verification_code_expires) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [fullname, email, hashedPassword, false, "user", verifyCode, expiryDate]
    );

    console.log("user", user)

    await sendEmailVerificationCode(email, verifyCode);

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
