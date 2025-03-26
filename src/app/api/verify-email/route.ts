import { dbConnection } from "@/db/dbConnect";
import { sendEmailVerificationCode } from "@/lib/sendEmailVerificationCode";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: "email is required" },
        { status: 400 }
      );
    }

    const db = await dbConnection();

    const [existingUser] = await db.execute(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (!existingUser || existingUser.length === 0) {
      return NextResponse.json(
        { message: "The email you entered is not registered yet" },
        { status: 400 }
      );
    }

    // send verification code

    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
    const expiryDate = new Date();
    expiryDate.setHours(expiryDate.getHours() + 1);
    
    const emailSent = await sendEmailVerificationCode(
      email,
      verifyCode
    );

    if (!emailSent) {
      return NextResponse.json(
        { message: "Email can't be sent" },
        { status: 400 }
      );
    } else {
      await db.execute("UPDATE users SET verification_code = ?, verification_code_expires = ? WHERE email = ?", [
        verifyCode,
        expiryDate,
        email,
      ]);
  
    }

    const user = existingUser[0]

    return NextResponse.json(
      { message: `Email has been sent to ${email} please verify`, user },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
