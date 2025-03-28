import { dbConnection } from "@/db/dbConnect";
import { sendEmailQuestionAnswerStatus } from "@/lib/sendEmailQuestionAnswerStatus";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  try {
    const { user_id, id, status } = await req.json();

    if (!id || !status) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const db = await dbConnection();

    const [row]: any = await db.execute(
      `SELECT answers.*, users.email 
       FROM answers 
       INNER JOIN users ON answers.user_id = users.id 
       WHERE answers.id = ?`,
      [id]
    );

    if (!row || row.length === 0) {
      return NextResponse.json(
        { success: false, message: "Answer not found" },
        { status: 404 }
      );
    }

    const { email, answer } = row[0];
    const title = answer.slice(0, 50);

    await sendEmailQuestionAnswerStatus(email, title, status, true);

    const [updateResult] = await db.execute(
      "UPDATE answers SET status = ? WHERE id = ?",
      [status, id]
    );

    // fetching the updated answer
    const [updatedRows]: any = await db.execute(
      "SELECT * FROM answers WHERE id = ?",
      [id]
    );

    const message = `Your answer ${title} has been ${updatedRows[0].answer.slice(0, 50)}... you can go and check!`;

    await db.execute(
      "INSERT INTO notifications (user_id, message, type, is_read) VALUES (?, ?, ?, ?)",
      [user_id, message, "question_approved", 0]
    );

    const updatedAnswer = updatedRows[0];

    return NextResponse.json(
      { message: "Status updated successfully", updatedAnswer },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error updating answer:", error);
    return NextResponse.json(
      { success: false, message: "Error updating answer" },
      { status: 500 }
    );
  }
}
