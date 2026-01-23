import { NextResponse } from "next/server";

export async function middleware(req: Request) {
  try {
    return NextResponse.next();
  } catch (e: any) {
    console.error("API Middleware Error:", e);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}