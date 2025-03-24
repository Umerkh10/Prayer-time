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
         q.user_id,
         q.title, 
         q.description, 
         q.status, 
         q.created_at, 
         q.updated_at,
         qu.fullname AS question_user_name, 
         qu.email AS question_user_email, 
         a.id AS answer_id,
         a.user_id AS answer_user_id,
         a.answer,
         a.status,
         a.created_at AS answer_created_at, -- Added missing comma
         au.fullname AS answer_user_name, 
         au.email AS answer_user_email
            FROM questions q
            LEFT JOIN users qu ON q.user_id = qu.id -- Join for question uploader
            LEFT JOIN answers a ON q.id = a.question_id
            LEFT JOIN users au ON a.user_id = au.id -- Join for answer uploader
            WHERE LOWER(REPLACE(q.title, ' ', '-')) = LOWER(?)`,
      [title]
    );

    if (!question || question.length === 0) {
      return NextResponse.json(
        { message: "Question Not Found" },
        { status: 404 }
      );
    }
console.log('question[0]', question[0])
    const questionData = {
      id: question[0].question_id,
      user_id: question[0].user_id,
      title: question[0].title,
      description: question[0].description,
      status: question[0].status,
      created_at: question[0].created_at,
      updated_at: question[0].updated_at,
      user: {
        fullname: question[0].question_user_name,
        email: question[0].question_user_email,
      },
      answers: [] as any[],
    };

    question.forEach((row: any) => {
      if (row.answer_id) {
        questionData.answers.push({
          id: row.answer_id,
          user_id: row.answer_user_id,
          answer: row.answer,
          status: row.status,
          created_at: row.answer_created_at,
          user: {
            fullname: row.answer_user_name,
            email: row.answer_user_email,
          },
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
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
