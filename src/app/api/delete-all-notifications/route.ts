import { dbConnection } from "@/db/dbConnect";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  try {
    const { user_id } = await req.json();

    if (!user_id) {
      return NextResponse.json(
        { success: false, message: "userId is required" },
        { status: 400 }
      );
    }

    const db = await dbConnection();

    // Check if the question exists
    const [notifications]: any = await db.execute(
      "SELECT * FROM notifications WHERE user_id = ?",
      [user_id]
    );

    console.log

    if (!notifications || notifications.length === 0) {
      return NextResponse.json(
        { success: false, message: "Notifications not found" },
        { status: 404 }
      );
    }

    await db.execute("DELETE FROM notifications WHERE user_id = ?", [
      user_id,
    ]);

    const [result]: any = await db.execute(
      "SELECT * FROM notifications WHERE user_id = ?",
      [user_id]
    );

    return NextResponse.json(
      {
        success: true,
        message: "Notifications deleted successfully",
        notifications: result,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error deleting notifications:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
