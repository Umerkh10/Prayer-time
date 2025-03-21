import { dbConnection } from "@/db/dbConnect";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  try {
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    const db = await dbConnection();

    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", email);

    const user = rows[0];

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const isPassMatched = await bcrypt.compare(password, user.password);

    if (!isPassMatched) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET!);

    return NextResponse.json(
      { message: "Login successful", user: {...user, token}  },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
