import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const destination = new URL(request.url);
  destination.host = "mediamantraconsulting.com";
  destination.protocol = "https:";
  destination.port = "";
  return NextResponse.redirect(destination, 308);
}

// Next.js excludes its internal paths from next.config.js redirects.
export const config = {
  matcher: [
    {
      source: "/_next/:path*",
      has: [{ type: "host", value: "www\\.mediamantraconsulting\\.com" }],
    },
  ],
};
