import { NextResponse } from "next/server";

// Statcounter server-side pixel proxy
// Fires on every page render, visible in HTML source as <img> tag
export async function GET() {
  return NextResponse.redirect(
    "https://c.statcounter.com/13062468/0/cb7e9c27/1/",
    { status: 302 }
  );
}
