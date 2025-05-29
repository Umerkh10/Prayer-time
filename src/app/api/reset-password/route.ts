import { dbConnection } from "@/db/dbConnect";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  try {
    const { id, newPassword } = await req.json();

    if (!id || !newPassword) {
      return NextResponse.json(
        { message: "Fields are required" },
        { status: 400 }
      );
    }

    const db = await dbConnection();

    const [existingUser] = await db.execute(
      "SELECT * FROM users WHERE id = ?",
      [id]
    );

    if (!existingUser || existingUser.length === 0) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const newHashedPassword = await bcrypt.hash(newPassword, 10);

    await db.execute("UPDATE users SET password = ? WHERE id = ?", [
      newHashedPassword,
      id,
    ]);

    return NextResponse.json(
      { message: "Password updated successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
