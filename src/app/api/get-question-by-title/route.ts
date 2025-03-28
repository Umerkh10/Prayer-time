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

    // const [question]: any = await db.execute(
    //   `SELECT
    //      q.id AS question_id,
    //      q.user_id,
    //      q.title,
    //      q.description,
    //      q.status,
    //      q.created_at,
    //      q.updated_at,
    //      qu.fullname AS question_user_name,
    //      qu.email AS question_user_email,
    //      a.id AS answer_id,
    //      a.user_id AS answer_user_id,
    //      a.answer,
    //      a.status,
    //      a.created_at AS answer_created_at,
    //      au.fullname AS answer_user_name,
    //      au.email AS answer_user_email,
    //      COUNT(al.id) AS like_count -- Count likes for each answer
    //    FROM questions q
    //    LEFT JOIN users qu ON q.user_id = qu.id -- Join for question uploader
    //    LEFT JOIN answers a ON q.id = a.question_id
    //    LEFT JOIN users au ON a.user_id = au.id -- Join for answer uploader
    //    LEFT JOIN answer_likes al ON a.id = al.answer_id -- Join to count likes
    //    WHERE LOWER(REPLACE(q.title, ' ', '-')) = LOWER(?)
    //    GROUP BY a.id;`,
    //   [title]
    // );

    const [question]: any = await db.execute(
      `SELECT 
        q.id AS question_id, 
        q.user_id,
        q.title, 
        q.description, 
        q.status AS question_status,
        q.created_at, 
        q.updated_at,
        qu.fullname AS question_user_name, 
        qu.email AS question_user_email, 
        a.id AS answer_id,
        a.user_id AS answer_user_id,
        a.answer,
        a.status AS answer_status,
        a.created_at AS answer_created_at, 
        au.fullname AS answer_user_name, 
        au.email AS answer_user_email,
        al.user_id AS liked_user_id, -- Fetch liked user_id individually
        (SELECT COUNT(*) FROM answer_likes WHERE answer_likes.answer_id = a.id) AS like_count
        FROM questions q
        LEFT JOIN users qu ON q.user_id = qu.id
        LEFT JOIN answers a ON q.id = a.question_id
        LEFT JOIN users au ON a.user_id = au.id
        LEFT JOIN answer_likes al ON a.id = al.answer_id
        WHERE LOWER(REPLACE(q.title, ' ', '-')) = LOWER(?);
      `,
      [title]
    );
    if (!question || question.length === 0) {
      return NextResponse.json(
        { message: "Question Not Found" },
        { status: 404 }
      );
    }

    const questionData:any = {
      id: question[0].question_id,
      user_id: question[0].user_id,
      title: question[0].title,
      description: question[0].description,
      status: question[0].question_status,
      created_at: question[0].created_at,
      updated_at: question[0].updated_at,
      user: {
        fullname: question[0].question_user_name,
        email: question[0].question_user_email,
      },
      answers: [],
    };
    
    // Group answers manually
    const answerMap = new Map();
    
    question.forEach((row: any) => {
      if (!row.answer_id) return;
    
      if (!answerMap.has(row.answer_id)) {
        answerMap.set(row.answer_id, {
          id: row.answer_id,
          user_id: row.answer_user_id,
          answer: row.answer,
          status: row.answer_status,
          created_at: row.answer_created_at,
          like_count: row.like_count,
          liked_user_ids: [], // Store user likes manually
          user: {
            fullname: row.answer_user_name,
            email: row.answer_user_email,
          },
        });
      }
    
      // Add liked user ID if available
      if (row.liked_user_id) {
        answerMap.get(row.answer_id).liked_user_ids.push(row.liked_user_id);
      }
    });
    
    // Convert map values to array
    questionData.answers = Array.from(answerMap.values());
    
    return NextResponse.json(questionData, { status: 200 });

    // return NextResponse.json(
    //   { message: "Question Retirieved Successfully", question: questionData },
    //   { status: 200 }
    // );
  } catch (error: any) {
    console.error("Error fetching question:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
