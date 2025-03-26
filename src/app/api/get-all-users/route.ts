import { dbConnection } from "@/db/dbConnect";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    // const { searchParams } = new URL(req.url);
    // const page = Number(searchParams.get("page")) || 1;

    const db = await dbConnection();
    // const pageSize = 40;
    // const offset = (page - 1) * pageSize;

    // const [countResult]: any = await db.execute(
    //   "SELECT COUNT(*) AS total_questions FROM questions"
    // );
    // const totalQuestions = countResult[0].total_questions;
    // const totalPages = Math.ceil(totalQuestions / pageSize);

    // Fetch questions with user and answers
    const [users]: any = await db.execute(`SELECT * from users`);

    return NextResponse.json(
      {
        success: true,
        users
        // totalQuestions,
        // totalPages,
        // currentPage: page,
        // hasNextPage: page < totalPages,
        // hasPreviousPage: page > 1,
        // questions: formattedQuestions,
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
