import { dbConnection } from "@/db/dbConnect";
import { sendEmailQuestionAnswerStatus } from "@/lib/sendEmailQuestionAnswerStatus";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  try {
    const { id, status } = await req.json();

    if (!id || !status) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const db = await dbConnection();

    const [rows] = await db.query("SELECT * FROM users WHERE id = ?", id);

    const user = rows[0];

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    await db.execute("UPDATE users SET account_status = ? WHERE id = ?", [
      status,
      id,
    ]);

    // fetching the updated question
    const [updatedRows]: any = await db.execute(
      "SELECT * FROM users WHERE id = ?",
      [id]
    );

    const updatedUser = updatedRows[0];

    return NextResponse.json(
      { message: "Status updated successfully", updatedUser },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error updating question:", error);
    return NextResponse.json(
      { success: false, message: "Error updating question" },
      { status: 500 }
    );
  }
}
