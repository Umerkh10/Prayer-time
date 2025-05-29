import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('remote-address') || 'Unknown';

    return NextResponse.json({ ip });
  } catch (error) {
    console.error("Error fetching user IP:", error);
    return NextResponse.json(
      { error: "Failed to fetch IP" },
      { status: 500 }
    );
  }
}
