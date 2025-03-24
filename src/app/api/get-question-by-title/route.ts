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
         a.created_at AS answer_created_at, 
         au.fullname AS answer_user_name, 
         au.email AS answer_user_email,
         COUNT(al.id) AS like_count -- Count likes for each answer
       FROM questions q
       LEFT JOIN users qu ON q.user_id = qu.id -- Join for question uploader
       LEFT JOIN answers a ON q.id = a.question_id
       LEFT JOIN users au ON a.user_id = au.id -- Join for answer uploader
       LEFT JOIN answer_likes al ON a.id = al.answer_id -- Join to count likes
       WHERE LOWER(REPLACE(q.title, ' ', '-')) = LOWER(?)
       GROUP BY a.id;`,
      [title]
    );

    if (!question || question.length === 0) {
      return NextResponse.json(
        { message: "Question Not Found" },
        { status: 404 }
      );
    }

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
          like_count: row.like_count,
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
