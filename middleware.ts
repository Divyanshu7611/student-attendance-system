import { NextResponse } from "next/server";

const rateLimitMap = new Map();
const MAX_REQUESTS = 10; // Maximum 10 requests per IP
const TIME_WINDOW = 60 * 1000; // 1 minute in milliseconds

export function middleware(req: Request) {
  // Get client IP from headers (x-forwarded-for may contain multiple IPs)
  const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";

  // Get current timestamp
  const currentTime = Date.now();

  // Retrieve previous request info
  const requestInfo = rateLimitMap.get(clientIP) || { count: 0, time: currentTime };

  // Reset count if time window has expired
  if (currentTime - requestInfo.time > TIME_WINDOW) {
    requestInfo.count = 1;
    requestInfo.time = currentTime;
  } else {
    requestInfo.count += 1;
  }

  // Store updated request info
  rateLimitMap.set(clientIP, requestInfo);

  // Block request if limit is exceeded
  if (requestInfo.count > MAX_REQUESTS) {
    return new Response(JSON.stringify({ error: "Too many requests, try again later." }), {
      status: 429,
      headers: { "Content-Type": "application/json" },
    });
  }

  return NextResponse.next();
}

// Apply middleware **only to** `/api/FormSubmit`
export const config = {
  matcher: "/api/FormSubmit",
};
