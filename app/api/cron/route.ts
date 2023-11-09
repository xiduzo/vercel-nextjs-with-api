import { NextResponse } from "next/server";

export async function GET() {
  try {
    // TODO fetch users
    for (const user of ["user1", "user2", "user3"]) {
      const data = await fetch("http://localhost:3000/api/scrape", {
        method: "POST",
        body: JSON.stringify({ user }),
      });
      console.log({ data: await data.json() });
    }
    return NextResponse.json({ message: "Hello test" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch exchange rate" },
      { status: 500 }
    );
  }
}
