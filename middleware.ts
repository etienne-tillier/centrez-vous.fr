import { NextRequest, NextResponse } from "next/server";

const LEGACY_REDIRECTS: Record<string, string> = {
  "/psychologue/delrieu-emmanuelle-psychologue-developpementaliste-enfant-ado-et-adulte":
    "/blog/psychologue-delrieu-emmanuelle-psychologue-developpementaliste-enfant-ado-et-adulte",
  "/delrieu-emmanuelle-psychologue-developpementaliste-et-ecopsychologue-conferenciere":
    "/blog/delrieu-emmanuelle-psychologue-developpementaliste-et-ecopsychologue-confc3a9rencic3a8re",
  "/delrieu-emmanuelle-psychologue-developpementaliste-et-ecopsychologue-conferenciere/ateliers-stages":
    "/blog/delrieu-emmanuelle-psychologue-developpementaliste-et-ecopsychologue-confc3a9rencic3a8re-ateliers-stages",
};

function normalizeLegacyPath(pathname: string): string {
  const decoded = (() => {
    try {
      return decodeURIComponent(pathname);
    } catch {
      return pathname;
    }
  })();

  const normalized = decoded
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\/+$/, "");

  return normalized || "/";
}

export function middleware(request: NextRequest) {
  const normalizedPath = normalizeLegacyPath(request.nextUrl.pathname);
  const destination = LEGACY_REDIRECTS[normalizedPath];

  if (!destination) {
    return NextResponse.next();
  }

  const targetUrl = new URL(destination, request.url);
  return NextResponse.redirect(targetUrl, 308);
}

export const config = {
  matcher: ["/:path*"],
};
