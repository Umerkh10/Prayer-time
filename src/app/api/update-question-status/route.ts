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

    // Update the question
    await db.execute("UPDATE questions SET status = ? WHERE id = ?", [
      status,
      id,
    ]);

    const { email, title } = question[0];

    await sendEmailQuestionAnswerStatus(email, title, status);

    return NextResponse.json(
      {
        success: true,
        message: `Question status updated successfully to ${status}`,
      },
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
