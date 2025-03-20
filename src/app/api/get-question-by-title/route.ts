import { dbConnection } from "@/db/dbConnect";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title") || "";

    const db = await dbConnection();

    // const [question]: any = await db.execute(
    //   "SELECT * from questions WHERE title = ?",
    //   [title]
    // );

    const [question]: any = await db.execute(
      `SELECT 
          q.id AS question_id, 
          q.title, 
          q.description, 
          q.status, 
          q.created_at, 
          q.updated_at,
          a.id AS answer_id,
          a.user_id AS answer_user_id,
          a.answer,
          a.created_at AS answer_created_at
        FROM questions q
        LEFT JOIN answers a ON q.id = a.question_id
        WHERE q.title = ?`,
      [title]
    );

    if (question && question.length === 0) {
      return NextResponse.json(
        { message: "Question Not Found" },
        { status: 404 }
      );
    }

    const questionData = {
      id: question[0].question_id,
      title: question[0].title,
      description: question[0].description,
      status: question[0].question_status,
      created_at: question[0].question_created_at,
      updated_at: question[0].question_updated_at,
      answers: [] as any[],
    };

    question.forEach((row: any) => {
      if (row.answer_id) {
        questionData.answers.push({
          id: row.answer_id,
          user_id: row.answer_user_id,
          answer: row.answer,
          status: row.answer_status,
          created_at: row.answer_created_at,
          updated_at: row.answer_updated_at,
        });
      }
    });

    return NextResponse.json(
      { message: "Question Retirieved Successfully", question: questionData },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching question:", error);
    return NextResponse.json(
      { success: false, message: "Error fetching question" },
      { status: 500 }
    );
  }
}
