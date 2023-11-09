import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json(
      {
        data: [
          { name: "artist 1", festivals: 10 },
          { name: "artist 2", festivals: 8 },
        ],
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch exchange rate" },
      { status: 500 }
    );
  }
}
