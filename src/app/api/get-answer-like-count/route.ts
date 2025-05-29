import { dbConnection } from "@/db/dbConnect";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const answer_id = searchParams.get("answer_id");

    if (!answer_id) {
      return NextResponse.json(
        { message: "Answer ID is required" },
        { status: 400 }
      );
    }

    const db = await dbConnection();

    const [result]: any = await db.execute(
      "SELECT COUNT(*) as likeCount FROM likes WHERE answer_id = ?",
      [answer_id]
    );

    return NextResponse.json(
      { answer_id, likeCount: result[0].likeCount },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}
