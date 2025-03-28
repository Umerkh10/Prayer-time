import { dbConnection } from "@/db/dbConnect";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    console.log("id ==>", id)

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Id is required" },
        { status: 400 }
      );
    }

    const db = await dbConnection();

    // Check if the question exists
    const [notifications]: any = await db.execute(
      "SELECT * FROM notifications WHERE id = ?",
      [id]
    );

    if (!notifications || notifications.length === 0) {
      return NextResponse.json(
        { success: false, message: "Notifications not found" },
        { status: 404 }
      );
    }

    await db.execute("DELETE FROM notifications WHERE id = ?", [id]);

    const [result]: any = await db.execute("SELECT * FROM notifications");

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
