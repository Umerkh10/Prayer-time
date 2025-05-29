import { dbConnection } from "@/db/dbConnect";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const id = searchParams.get("id") || "";

    const db = await dbConnection();

    const [rows]: any = await db.execute(`SELECT * FROM users WHERE id = ?;`, [
      id,
    ]);

    const user = rows[0];

    if (!user || user.length === 0) {
      return NextResponse.json(
        { message: "User Not Found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "User Retirieved Successfully", user },
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
