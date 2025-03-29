import { dbConnection } from "@/db/dbConnect";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page")) || 1;

    const db = await dbConnection();
    const pageSize = 40;
    const offset = (page - 1) * pageSize;

    // Get total questions count
    const [countResult]: any = await db.execute(
      "SELECT COUNT(*) AS total_questions FROM questions"
    );
    const totalQuestions = countResult[0].total_questions;
    const totalPages = Math.ceil(totalQuestions / pageSize);

    // Fetch questions with user and answers
    const [questions]: any = await db.execute(
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
          a.question_id,
          a.created_at AS answer_created_at,
          au.fullname AS answer_user_name, 
          au.email AS answer_user_email
        FROM questions q
        LEFT JOIN users qu ON q.user_id = qu.id  -- Fetch user details of the question poster
        LEFT JOIN answers a ON q.id = a.question_id
        LEFT JOIN users au ON a.user_id = au.id  -- Fetch user details of the answer poster
        ORDER BY q.created_at DESC
        LIMIT ? OFFSET ?`,
      [pageSize, offset]
    );

    const questionMapping: any = {};

    questions.forEach((row: any) => {
      const {
        question_id,
        user_id,
        title,
        description,
        status,
        created_at,
        updated_at,
        question_user_name,
        question_user_email,
        answer_id,
        answer_user_id,
        answer,
        answer_created_at,
        answer_user_name,
      } = row;

      if (!questionMapping[question_id]) {
        questionMapping[question_id] = {
          id: question_id,
          user: {
            id: user_id,
            name: question_user_name,
            email: question_user_email,
          },
          title,
          description,
          status,
          created_at,
          updated_at,
          answers: [],
        };
      }

      if (answer_id) {
        questionMapping[question_id].answers.push({
          id: answer_id,
          user: {
            id: answer_user_id,
            name: answer_user_name,
          },
          answer,
          status,
          question_id,
          created_at: answer_created_at,
        });
      }
    });

    const formattedQuestions = Object.values(questionMapping);

    return NextResponse.json(
      {
        success: true,
        totalQuestions,
        totalPages,
        currentPage: page,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
        questions: formattedQuestions,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching questions:", error);
    return NextResponse.json(
      { success: false, message: "Error fetching questions" },
      { status: 500 }
    );
  }
}
