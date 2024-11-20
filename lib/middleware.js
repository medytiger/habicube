import { auth } from "@/lib/auth"; // Importation de l'authentification
import { NextRequest, NextResponse } from "next/server";

const routeProtege = ["/middleware"]; // Routes protégées

export default async function middleware(req) {
  const session = await auth(); // Récupération de la session

  const isProtege = routeProtege.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  // Si la route est protégée et que l'utilisateur n'est pas connecté, redirigez vers la page d'accueil
  if (isProtege && !session) {
    const absoluteUrl = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteUrl.toString());
  }

  return NextResponse.next(); // Continuez vers la prochaine étape si tout va bien
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"], // Matcher pour toutes les routes sauf celles exclues
};
