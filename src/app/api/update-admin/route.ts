import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { dbConnection } from "@/db/dbConnect";

export async function PUT(req: Request) {
  try {
    const { fullname, email, password } = await req.json();

    if (!fullname || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const db = await dbConnection();

    const hashedPassword = await bcrypt.hash(password, 10);

    // Update admin in the database
    const [result] = await db.execute(
      `UPDATE users SET fullname = ?, email = ?, password = ? WHERE role = 'admin'`,
      [fullname, email, hashedPassword]
    );

    // Check if an update was made
    if (result.affectedRows === 0) {
      return NextResponse.json({ message: "Admin not found" }, { status: 404 });
    }

    const [rows]: any = await db.execute(
      `SELECT * FROM users WHERE role = ?;`,
      ["admin"]
    );

    return NextResponse.json(
      { message: "Admin updated successfully", admin: rows[0] },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating admin:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
