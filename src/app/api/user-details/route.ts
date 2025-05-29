import { dbConnection } from "@/db/dbConnect";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function PUT(request: Request) {
  const { id, fullname } = await request.json();

  if (!fullname) {
    return NextResponse.json(
      { success: false, message: "Fields are required" },
      { status: 400 }
    );
  }

  try {
    const db = await dbConnection();

    // Check if the user exists
    const [user]: any = await db.execute("SELECT * FROM users WHERE id = ?", [
      id,
    ]);

    if (!user || user.length === 0) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    const updatedUser = await db.execute(
      "UPDATE users SET fullname = ? WHERE id = ?",
      [fullname, id]
    );

    if (updatedUser.affectedRows === 0) {
      return NextResponse.json(
        { message: "User not found or no changes made" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "User details updated successfully",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
