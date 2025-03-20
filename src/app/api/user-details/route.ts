import { dbConnection } from "@/db/dbConnect";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function PUT(request: Request) {
  const { id, fullname, email, password } = await request.json();

  if (!fullname || !email || !password) {
    return NextResponse.json(
      { success: false, message: "Fields are required" },
      { status: 400 }
    );
  }

  try {
    const db = await dbConnection();

    // Check if the user exists
    const [user]: any = await db.execute(
      "SELECT * FROM users WHERE id = ?",
      [id]
    );

    if (!user || user.length === 0) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    const {
      password: userPassword,
      verification_status,
      role,
      verification_code,
      verification_code_expires,
    } = user[0];

    let hashedPassword = userPassword;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }

    const updatedUser = await db.execute(
      "UPDATE users SET email = ?, fullname = ?, password = ?, verification_status = ?, role = ?, verification_code = ?, verification_code_expires = ? WHERE id = ?",
      [
        email,
        fullname,
        hashedPassword,
        verification_status,
        role,
        verification_code,
        verification_code_expires,
        id
      ]
    );

    console.log("updatedUser", updatedUser)

    return NextResponse.json(   
      { success: true, message: "User details updated successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { success: false, message: "Error updating user" },
      { status: 500 }
    );
  }
}
