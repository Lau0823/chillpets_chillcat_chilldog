"use client"

import Link from "next/link"

export default function Banner() {
  return (
    <section className="w-full">
      <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[28px]">
        <div className="relative h-[88vh] min-h-[560px] w-full">
          {/* VIDEO BG */}
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/hero-poster.jpg" // opcional
          >
            <source src="/hero.webm" type="video/webm" />
            <source src="/hero.mp4" type="video/mp4" />
          </video>

          {/* overlays para lectura (fondo blanco, pero banner pro) */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/55 to-white/10" />
          <div className="absolute inset-0 bg-black/10" />

          {/* blobs suaves divertidos */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-fuchsia-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 top-24 h-[420px] w-[420px] rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-yellow-300/15 blur-3xl" />

          {/* contenido */}
          <div className="relative z-10 flex h-full items-center px-6 md:px-14">
            <div className="max-w-2xl rounded-[28px] border border-black/10 bg-white/55 p-6 md:p-10 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.12)]">
              {/* chips glass */}
              <div className="flex flex-wrap gap-2">
                {["Camisetas", "Hoodies", "Gorras", "Streetwear"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold text-black/70 backdrop-blur"
                  >
                    {t}
                  </span>
                ))}
                <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold text-black/70 backdrop-blur">
                  Drop 2025 ✨
                </span>
              </div>

              <h1 className="mt-4 text-4xl md:text-6xl font-extrabold uppercase tracking-tight leading-[0.95]">
                CHILLPETS{" "}
                <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                  WEAR
                </span>
              </h1>

              <p className="mt-4 max-w-lg text-sm md:text-lg text-black/60">
                Jóvenes, street y moderno. Camisetas, hoodies y gorras para romperla todos los días.
              </p>

              {/* CTAs */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/camisetas"
                  className="rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-md hover:opacity-95 active:scale-[0.98] transition"
                >
                  Ver Camisetas
                </Link>

                <Link
                  href="/hoodies"
                  className="rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold text-black/80 backdrop-blur hover:bg-white transition"
                >
                  Ver Hoodies 🔥
                </Link>

                <Link
                  href="/gorras"
                  className="rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold text-black/80 backdrop-blur hover:bg-white transition"
                >
                  Ver Gorras 🧢
                </Link>
              </div>

              {/* mini stats */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-black/10 bg-white/60 p-3 backdrop-blur">
                  <p className="text-xs text-black/50">Fit</p>
                  <p className="text-sm font-extrabold">Oversize</p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white/60 p-3 backdrop-blur">
                  <p className="text-xs text-black/50">Drops</p>
                  <p className="text-sm font-extrabold">Semanal</p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white/60 p-3 backdrop-blur">
                  <p className="text-xs text-black/50">Vibe</p>
                  <p className="text-sm font-extrabold">Street</p>
                </div>
              </div>
            </div>
          </div>

          {/* ticker abajo */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-black/10 bg-white/60 backdrop-blur-xl">
            <div className="overflow-hidden py-3">
              <div className="marquee flex gap-10 whitespace-nowrap text-sm font-semibold text-black/70">
                <span>CAMISETAS • HOODIES • GORRAS •</span>
                <span>STREET STYLE • DROP 2025 •</span>
                <span>CAMISETAS • HOODIES • GORRAS •</span>
                <span>STREET STYLE • DROP 2025 •</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
