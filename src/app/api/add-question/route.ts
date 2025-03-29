import { NextResponse } from "next/server";
import { dbConnection } from "@/db/dbConnect";
import { sendAdminQAAlert } from "@/lib/sendAdminQAAlert.ts";
import { sendUserQAAlert } from "@/lib/sendUserQAAlert";

export async function POST(req: Request) {
  try {
    const { user_id, title, description } = await req.json();

    if (!user_id || !title || !description) {
      return NextResponse.json(
        { message: "Field are required" },
        { status: 400 }
      );
    }

    const db = await dbConnection();

    const [rows] = await db.query("SELECT * FROM users WHERE id = ?", user_id);
    const user = rows[0];

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    await db.execute(
      "INSERT INTO questions (user_id, title, description, status) VALUES (?, ?, ?, ?)",
      [user_id, title, description, "pending"]
    );

    await sendAdminQAAlert();
    await sendUserQAAlert(false, user.email, undefined, title);

    const message = `You have added a question ${title} please wait until approved`;

    await db.execute(
      "INSERT INTO notifications (user_id, message, type, is_read) VALUES (?, ?, ?, ?)",
      [user_id, message, "question_posted", 0]
    );

    return NextResponse.json(
      { message: "Question added successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
