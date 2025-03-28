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

    const [question]: any = await db.execute(
      `SELECT questions.*, users.email 
       FROM questions 
       INNER JOIN users ON questions.user_id = users.id 
       WHERE questions.id = ?`,
      [id]
    );

    if (!question || question.length === 0) {
      return NextResponse.json(
        { success: false, message: "Question not found" },
        { status: 404 }
      );
    }

    const { email, title } = question[0];

    await sendEmailQuestionAnswerStatus(email, title, status);

    const [updateResult] = await db.execute(
      "UPDATE questions SET status = ? WHERE id = ?",
      [status, id]
    );

    // fetching the updated question
    const [updatedRows]: any = await db.execute(
      "SELECT * FROM questions WHERE id = ?",
      [id]
    );

    const message = `Your question ${title} has been ${status} you can go and check!`;

    await db.execute(
      "INSERT INTO notifications (user_id, message, type, is_read) VALUES (?, ?, ?, ?)",
      [user_id, message, "question_approved", 0]
    );

    const updatedQuestion = updatedRows[0];

    return NextResponse.json(
      { message: "Status updated successfully", updatedQuestion },
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
