import { dbConnection } from "@/db/dbConnect";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Id is required" },
        { status: 400 }
      );
    }

    const db = await dbConnection();

    // Check if the question exists
    const [question]: any = await db.execute(
      "SELECT * FROM questions WHERE id = ?",
      [id]
    );

    if (!question || question.length === 0) {
      return NextResponse.json(
        { success: false, message: "Question not found" },
        { status: 404 }
      );
    }

    // await db.execute("DELETE FROM answers WHERE question_id = ?", [id]);
    
    await db.execute("DELETE FROM questions WHERE id = ?", [id]);

    return NextResponse.json(
      { success: true, message: "Question and related answers deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error deleting question:", error);
    return NextResponse.json(
      { success: false, message: "Error deleting question" },
      { status: 500 }
    );
  }
}
