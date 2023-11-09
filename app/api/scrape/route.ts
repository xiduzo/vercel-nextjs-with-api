import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { user } = await req.json();

  try {
    await new Promise((resolve) =>
      setTimeout(resolve, Math.random() * 5 * 1000)
    );

    console.log("scraped for user done ", user);

    return NextResponse.json(
      { message: "Hello scrape for user " + user },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch exchange rate" },
      { status: 500 }
    );
  }
}
