"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen bg-[#08080a] flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#dcb991]/5 rounded-full blur-3xl pointer-events-none" />

      <div
        className="relative flex flex-col items-center gap-6 transition-all duration-700"
        style={{ opacity: mounted ? 1 : 0, transform: mounted ? "none" : "translateY(12px)" }}
      >
        {/* Terminal badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 text-xs text-zinc-500 font-mono tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
          404 &middot; not_found
        </div>

        {/* Big number */}
        <h1 className="text-[clamp(5rem,20vw,10rem)] font-bold leading-none tracking-tighter text-zinc-900 select-none">
          404
        </h1>

        {/* Message */}
        <div className="flex flex-col gap-2 -mt-4">
          <p className="text-zinc-200 text-lg font-medium">
            Esta p&aacute;gina no existe.
          </p>
          <p className="text-zinc-500 text-sm">
            This page doesn&apos;t exist &mdash; or maybe it never did.
          </p>
        </div>

        {/* CTA */}
        <Link
          href="/"
          className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-200 text-sm font-medium hover:border-[#dcb991]/40 hover:text-[#dcb991] transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Volver al inicio
        </Link>

        {/* Subtle signature */}
        <p className="text-zinc-700 text-xs font-mono mt-4 tracking-widest">
          juandavidquintero.dev
        </p>
      </div>
    </main>
  );
}
