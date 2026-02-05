"use client"

import Link from "next/link"
import { useMemo, useState } from "react"

type Tee = {
  id: string
  name: string
  price: string
  img: string
  tag?: string
  fit: "Oversize" | "Regular" | "Boxy"
  colors: { name: string; hex: string }[]
  prints: { name: string; img: string }[]
}

const tees: Tee[] = [
  {
    id: "tee-01",
    name: "Camiseta Oversize City",
    price: "$89.900",
    tag: "Nuevo",
    img: "https://i.pinimg.com/1200x/f3/59/a0/f359a020190e3c3d9f6916477249b46b.jpg",
    fit: "Oversize",
    colors: [
      { name: "Negro", hex: "#111111" },
      { name: "Blanco", hex: "#F5F5F5" },
      { name: "Gris", hex: "#BDBDBD" },
    ],
    prints: [
      { name: "Graffiti", img: "https://i.pinimg.com/736x/1c/3d/7b/1c3d7bf0d2f3cfa4c2be2b06a5f6c6d8.jpg" },
      { name: "Minimal", img: "https://i.pinimg.com/736x/75/9b/2d/759b2d9a2a6c3fbd15c7a493bd0e9f05.jpg" },
    ],
  },
  {
    id: "tee-02",
    name: "Camiseta Boxy Fit Logo",
    price: "$94.900",
    tag: "Top",
    img: "https://i.pinimg.com/736x/36/54/7d/36547d0e4a61b63a4c7c56d1d06f3b5a.jpg",
    fit: "Boxy",
    colors: [
      { name: "Blanco", hex: "#F5F5F5" },
      { name: "Azul", hex: "#1E3A8A" },
    ],
    prints: [{ name: "Logo", img: "https://i.pinimg.com/736x/8c/7b/2f/8c7b2f5d3b9a61d6a0a4f8b0a0e7b41c.jpg" }],
  },
  {
    id: "tee-03",
    name: "Camiseta Regular Basic",
    price: "$69.900",
    img: "https://i.pinimg.com/736x/9a/8c/da/9a8cda5c9c6c7a1f4d7f23ad9b4f75aa.jpg",
    fit: "Regular",
    colors: [
      { name: "Negro", hex: "#111111" },
      { name: "Arena", hex: "#D9C6A5" },
      { name: "Rojo", hex: "#B91C1C" },
    ],
    prints: [
      { name: "Tipografía", img: "https://i.pinimg.com/736x/3b/2c/5a/3b2c5a7eabddc10b2f1f7b0ff0d42b5a.jpg" },
    ],
  },
  {
    id: "tee-04",
    name: "Camiseta Oversize Heavy",
    price: "$109.900",
    tag: "Drop",
    img: "https://i.pinimg.com/736x/7b/aa/8f/7baa8f9e3a5bbd0d3cc6b9c3bd4c6e5a.jpg",
    fit: "Oversize",
    colors: [
      { name: "Negro", hex: "#111111" },
      { name: "Verde", hex: "#1F7A4A" },
    ],
    prints: [{ name: "Back Print", img: "https://i.pinimg.com/736x/7f/3f/2f/7f3f2f1e12d5b8a9c4f2edee3f4a6e1a.jpg" }],
  },
]

function Glass({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={[
        "rounded-3xl border border-black/10 bg-white/60 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.10)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  )
}

function Pill({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode
  active?: boolean
  onClick?: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-full px-3 py-1 text-xs font-semibold backdrop-blur transition",
        active
          ? "bg-black text-white"
          : "border border-black/10 bg-white/80 text-black/70 hover:bg-black/5",
      ].join(" ")}
    >
      {children}
    </button>
  )
}

function ColorDots({ colors }: { colors: { name: string; hex: string }[] }) {
  return (
    <div className="mt-3 flex items-center gap-2">
      {colors.slice(0, 5).map((c) => (
        <span
          key={c.name}
          title={c.name}
          className="h-4 w-4 rounded-full border border-black/10"
          style={{ background: c.hex }}
        />
      ))}
      {colors.length > 5 ? <span className="text-xs text-black/50">+{colors.length - 5}</span> : null}
    </div>
  )
}

function ProductCard({ p }: { p: Tee }) {
  return (
    <div className="group overflow-hidden rounded-[22px] border border-black/10 bg-white transition hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/camisetas/producto/${p.id}`} className="relative block">
        {p.tag ? (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-black/70 backdrop-blur">
            {p.tag}
          </span>
        ) : null}

        <div className="h-44 sm:h-52 md:h-56 w-full bg-[#f6f6f6]">
          <img src={p.img} alt={p.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
        </div>
      </Link>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <p className="text-sm font-bold leading-snug">{p.name}</p>
          <span className="shrink-0 rounded-full border border-black/10 bg-white px-2 py-1 text-[10px] font-extrabold uppercase text-black/60">
            {p.fit}
          </span>
        </div>

        <p className="mt-1 text-sm font-extrabold">{p.price}</p>
        <ColorDots colors={p.colors} />

        <div className="mt-4 flex gap-2">
          <Link
            href={`/camisetas/producto/${p.id}`}
            className="flex-1 rounded-2xl bg-black px-4 py-2 text-center text-xs font-semibold text-white hover:bg-black/90"
          >
            Ver producto
          </Link>
          <button
            type="button"
            className="rounded-2xl border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-black/70 hover:bg-black/5"
            onClick={() => alert("Luego conectamos al carrito ✅")}
          >
            + Carrito
          </button>
        </div>

        <p className="mt-3 text-[11px] text-black/45">
          Entra para elegir <b>color</b> y <b>estampado</b>.
        </p>
      </div>
    </div>
  )
}

export default function Page() {
  const [fit, setFit] = useState<"Todo" | Tee["fit"]>("Todo")
  const [q, setQ] = useState("")

  const filtered = useMemo(() => {
    return tees.filter((p) => {
      const okFit = fit === "Todo" ? true : p.fit === fit
      const okQ = q.trim().length ? p.name.toLowerCase().includes(q.toLowerCase()) : true
      return okFit && okQ
    })
  }, [fit, q])

  return (
    <main className="min-h-screen bg-white text-[#0f0f0e]">
      <div className="mx-auto max-w-6xl px-4 pt-6">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-[28px] border border-black/10">
          <div className="relative h-[34vh] min-h-[280px] w-full">
            <img
              src="https://i.pinimg.com/736x/d7/53/a8/d753a8b9247a251975b536dc7f262c47.jpg"
              alt="Camisetas"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/55 to-transparent" />

            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-4 md:px-10">
                <div className="max-w-xl">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[0.95] tracking-tight">
                    CAMISETAS <br />
                    <span className="text-black/55">STREET</span>
                  </h1>
                  <p className="mt-3 max-w-md text-sm sm:text-base text-black/60">
                    Oversize, boxy y regular. Elige tu color y estampado en cada producto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTROLES */}
        <section className="pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight">Catálogo</h2>
              <p className="mt-1 text-sm text-black/60">Filtra rápido y abre para ver variantes.</p>
            </div>

            <div className="flex w-full flex-col gap-3 md:w-auto md:min-w-[420px]">
              <div className="flex items-center gap-2 rounded-2xl border border-black/10 bg-white px-3 py-2">
                <span className="text-xs font-semibold text-black/40">🔎</span>
                <input
                  className="w-full bg-transparent text-sm outline-none placeholder:text-black/35"
                  placeholder="Buscar camisetas..."
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                />
              </div>

              <div className="flex flex-wrap gap-2">
                <Pill active={fit === "Todo"} onClick={() => setFit("Todo")}>Todo</Pill>
                <Pill active={fit === "Oversize"} onClick={() => setFit("Oversize")}>Oversize</Pill>
                <Pill active={fit === "Boxy"} onClick={() => setFit("Boxy")}>Boxy</Pill>
                <Pill active={fit === "Regular"} onClick={() => setFit("Regular")}>Regular</Pill>
              </div>
            </div>
          </div>
        </section>

        {/* GRID + SIDEBAR (BONITO EN TABLET) */}
        <section className="py-8">
          <div className="grid gap-6 md:grid-cols-[260px_1fr]">
            {/* sidebar tablet+ */}
            <div className="hidden md:block">
              <Glass className="p-5">
                <p className="text-xs font-extrabold uppercase tracking-wide text-black/60">Filtros</p>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-black/60">Fit</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Pill active={fit === "Todo"} onClick={() => setFit("Todo")}>Todo</Pill>
                      <Pill active={fit === "Oversize"} onClick={() => setFit("Oversize")}>Oversize</Pill>
                      <Pill active={fit === "Boxy"} onClick={() => setFit("Boxy")}>Boxy</Pill>
                      <Pill active={fit === "Regular"} onClick={() => setFit("Regular")}>Regular</Pill>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <p className="text-xs font-semibold text-black/60">Tip</p>
                    <p className="mt-1 text-xs text-black/55">
                      Abre un producto para escoger <b>color</b> y <b>estampado</b>.
                    </p>
                  </div>
                </div>
              </Glass>
            </div>

            {/* grid */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-black/60">
                  Mostrando <span className="font-extrabold text-black">{filtered.length}</span> resultados
                </p>
                <Link href="/nuevo" className="text-sm font-semibold text-black/60 hover:text-black">
                  Ver lo nuevo →
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filtered.map((p) => (
                  <ProductCard key={p.id} p={p} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* banner final */}
        <section className="pb-16">
          <Glass className="p-6 md:p-10">
            <div className="grid items-center gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-extrabold uppercase tracking-tight">Personaliza tu outfit</h3>
                <p className="mt-2 text-sm text-black/60">
                  Escoge el color y el estampado que más te guste en cada camiseta.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                <Link href="/carrito" className="rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-black/90 text-center">
                  Ir al carrito
                </Link>
                <Link href="/checkout" className="rounded-2xl border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-black/70 hover:bg-black/5 text-center">
                  Checkout →
                </Link>
              </div>
            </div>
          </Glass>
        </section>
      </div>
    </main>
  )
}
