import { dbConnection } from "@/db/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { answer_id, user_id } = await req.json();

    if (!answer_id || !user_id) {
      return NextResponse.json(
        { message: "Fields are required" },
        { status: 400 }
      );
    }

    const db = await dbConnection();
    const [existingLike]: any = await db.execute(
      "SELECT id FROM answer_likes WHERE answer_id = ? AND user_id = ?",
      [answer_id, user_id]
    );

    if (existingLike.length > 0) {
      await db.execute(
        "DELETE FROM answer_likes WHERE answer_id = ? AND user_id = ?",
        [answer_id, user_id]
      );

      return NextResponse.json(
        { message: "Like removed successfully", liked: false },
        { status: 200 }
      );
    } else {
      await db.execute(
        "INSERT INTO answer_likes (answer_id, user_id, created_at, updated_at) VALUES (?, ?, NOW(), NOW())",
        [answer_id, user_id]
      );

      return NextResponse.json(
        { message: "You liked this answer", liked: true },
        { status: 201 }
      );
    }
  } catch (error: any) {
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}
