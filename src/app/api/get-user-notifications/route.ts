import { NextResponse } from "next/server";
import { dbConnection } from "@/db/dbConnect";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    console.log("userId", userId)
    if (!userId) {
      return NextResponse.json({ message: "User ID is required" }, { status: 400 });
    }

    const db = await dbConnection();

    // ✅ Fetch user by ID (ensure correct destructuring)
    const [user_row] = await db.query("SELECT * FROM users WHERE id = ?", [userId]); 
    const user = user_row?.[0];

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // ✅ Fetch notifications for the user
    const [notifications] = await db.query(
      "SELECT * FROM notifications WHERE user_id = ?",
      [userId] // ✅ Ensure array format
    );

    return NextResponse.json(
      { success: true, data: notifications },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching notifications:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
