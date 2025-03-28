import { dbConnection } from "@/db/dbConnect";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const db = await dbConnection();

    const [rows]: any = await db.execute(
      `SELECT * FROM users WHERE role = ?;`,
      ["admin"]
    );

    const admin = rows[0];

    if (!admin || admin.length === 0) {
      return NextResponse.json({ message: "Admin Not Found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Admin Retirieved Successfully", admin },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching question:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
