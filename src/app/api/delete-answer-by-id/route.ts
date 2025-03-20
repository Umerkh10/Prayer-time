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
    const [answers]: any = await db.execute(
      "SELECT * FROM answers WHERE id = ?",
      [id]
    );

    if (!answers || answers.length === 0) {
      return NextResponse.json(
        { success: false, message: "Answer not found" },
        { status: 404 }
      );
    }

    await db.execute("DELETE FROM answers WHERE id = ?", [id]);

    return NextResponse.json(
      {
        success: true,
        message: "Answer deleted successfully",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error deleting answer:", error);
    return NextResponse.json(
      { success: false, message: "Error deleting answer" },
      { status: 500 }
    );
  }
}
