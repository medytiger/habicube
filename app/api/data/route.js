import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export const GET = auth(function GET(req) {
  if (req.auth) return NextResponse.json(req.auth);
  return NextResponse.json(
    { message: "Vous n'est pas connecté." },
    { status: 401 }
  );
});
