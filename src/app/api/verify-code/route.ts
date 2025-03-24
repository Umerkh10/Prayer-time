import { dbConnection } from "@/db/dbConnect";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, code } = await request.json();

    if (!email || !code) {
      return NextResponse.json(
        { success: false, message: "Fields are required" },
        { status: 400 }
      );
    }

    const db = await dbConnection();

    // Get user by email and check verification code
    const [user]: any = await db.execute(
      "SELECT id, verification_code, verification_code_expires FROM users WHERE email = ?",
      [email]
    );

    if (!user || user.length === 0) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    const { id, verification_code, verification_code_expires } = user[0];

    console.log({id, verification_code, verification_code_expires});
    

    // Check if the verification code is correct
    const isCodeValid = verification_code === code;
    const isCodeNotExpired = new Date(verification_code_expires) > new Date();

    if (isCodeValid && isCodeNotExpired) {
      await db.execute(
        "UPDATE users SET verification_status = ?, verification_code = ? WHERE id = ?",
        [true, null, id]
      );

      return NextResponse.json(
        { success: true, message: "Account verified successfully" },
        { status: 200 }
      );
    } else if (!isCodeNotExpired) {
      return NextResponse.json(
        {
          success: false,
          message: "Verification code has expired. Please request a new code.",
        },
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        { success: false, message: "Incorrect verification code" },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error("Error verifying user:", error);
    return NextResponse.json(
      { success: false, message: "Error verifying user" },
      { status: 500 }
    );
  }
}
