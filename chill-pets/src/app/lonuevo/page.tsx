"use client"

import Link from "next/link"
import { useMemo, useState } from "react"

type Prod = {
  id: string
  name: string
  price: string
  img: string
  tag?: string
  colors?: { name: string; hex: string }[]
  prints?: { name: string; img: string }[]
}

const dropProducts: Prod[] = [
  {
    id: "101",
    name: "Camiseta Oversize Drop",
    price: "$99.900",
    tag: "Nuevo",
    img: "https://i.pinimg.com/1200x/f3/59/a0/f359a020190e3c3d9f6916477249b46b.jpg",
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
    id: "102",
    name: "Hoodie Street Drop",
    price: "$229.900",
    tag: "Drop",
    img: "https://i.pinimg.com/736x/e1/3b/72/e13b724ed479b089b4a389c0dee3e9bc.jpg",
    colors: [
      { name: "Negro", hex: "#111111" },
      { name: "Verde", hex: "#1F7A4A" },
    ],
    prints: [{ name: "Logo", img: "https://i.pinimg.com/736x/8c/7b/2f/8c7b2f5d3b9a61d6a0a4f8b0a0e7b41c.jpg" }],
  },
  {
    id: "103",
    name: "Gorra Classic Drop",
    price: "$59.900",
    tag: "Nuevo",
    img: "https://i.pinimg.com/736x/73/58/06/735806f71ff17f99e0ed2e5f4edaf716.jpg",
    colors: [
      { name: "Negro", hex: "#111111" },
      { name: "Beige", hex: "#D7C7A6" },
    ],
  },
  {
    id: "104",
    name: "Buzo Básico Premium",
    price: "$139.900",
    tag: "Top",
    img: "https://i.pinimg.com/1200x/ef/2b/8b/ef2b8b59d97b3864ab5f993a56027a59.jpg",
    colors: [
      { name: "Gris", hex: "#BDBDBD" },
      { name: "Negro", hex: "#111111" },
    ],
  },
  {
    id: "105",
    name: "Camiseta Boxy Fit",
    price: "$94.900",
    tag: "Nuevo",
    img: "https://i.pinimg.com/736x/36/54/7d/36547d0e4a61b63a4c7c56d1d06f3b5a.jpg",
    colors: [
      { name: "Blanco", hex: "#F5F5F5" },
      { name: "Azul", hex: "#1E3A8A" },
    ],
  },
  {
    id: "106",
    name: "Hoodie Heavyweight",
    price: "$249.900",
    tag: "Drop",
    img: "https://i.pinimg.com/736x/5a/1d/8f/5a1d8fb5a7b9a1e0b2d6f5b1d2c9a6d1.jpg",
    colors: [
      { name: "Negro", hex: "#111111" },
      { name: "Arena", hex: "#D9C6A5" },
    ],
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

function ColorDots({ colors }: { colors?: { name: string; hex: string }[] }) {
  if (!colors?.length) return null
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

export default function Page() {
  const [filter, setFilter] = useState<"Todo" | "Camisetas" | "Hoodies" | "Gorras" | "Buzos">("Todo")

  const filtered = useMemo(() => {
    if (filter === "Todo") return dropProducts
    const f = filter.toLowerCase()
    // filtro simple por nombre (puedes cambiarlo por category real en tu data)
    return dropProducts.filter((p) => p.name.toLowerCase().includes(f.slice(0, 4)))
  }, [filter])

  return (
    <main className="min-h-screen bg-white text-[#0f0f0e]">
      {/* header / hero */}
      <div className="mx-auto max-w-6xl px-4 pt-6">
        <section className="relative overflow-hidden rounded-[28px] border border-black/10">
          <div className="relative h-[42vh] min-h-[320px] w-full">
            <img
              src="https://i.pinimg.com/1200x/55/50/5b/55505b943f396064555445c595a637c4.jpg"
              alt="Nuevo Drop"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/55 to-transparent" />

            <div className="absolute left-4 top-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-semibold text-black/70 backdrop-blur">
                Nuevo
              </span>
              <span className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-semibold text-black/70 backdrop-blur">
                Drop 2025
              </span>
              <span className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-semibold text-black/70 backdrop-blur">
                Streetwear
              </span>
            </div>

            <div className="absolute inset-0 flex items-center">
              <div className="w-full px-4 md:px-10">
                <div className="max-w-xl">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[0.95] tracking-tight">
                    LO NUEVO <br />
                    <span className="text-black/55">DEL DROP</span>
                  </h1>

                  <p className="mt-4 max-w-md text-sm sm:text-base text-black/60">
                    Piezas frescas, oversize y con vibra street. Elige tu color y estampado.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/catalogo"
                      className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-black/90 text-center"
                    >
                      Explorar catálogo
                    </Link>
                    <Link
                      href="/destacados"
                      className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-black/70 hover:bg-black/5 text-center"
                    >
                      Ver top →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* filtros */}
        <section className="pt-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight">Nuevos productos</h2>
              <p className="mt-1 text-sm text-black/60">Filtra rápido y abre el producto para escoger variantes.</p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Pill active={filter === "Todo"} onClick={() => setFilter("Todo")}>Todo</Pill>
              <Pill active={filter === "Camisetas"} onClick={() => setFilter("Camisetas")}>Camisetas</Pill>
              <Pill active={filter === "Hoodies"} onClick={() => setFilter("Hoodies")}>Hoodies</Pill>
              <Pill active={filter === "Gorras"} onClick={() => setFilter("Gorras")}>Gorras</Pill>
              <Pill active={filter === "Buzos"} onClick={() => setFilter("Buzos")}>Buzos</Pill>
            </div>
          </div>
        </section>

        {/* grid */}
        <section className="py-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((p) => (
              <div
                key={p.id}
                className="group overflow-hidden rounded-[22px] border border-black/10 bg-white transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Link href={`/producto/${p.id}`} className="relative block">
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
                  <p className="text-sm font-bold leading-snug">{p.name}</p>
                  <p className="mt-1 text-sm font-extrabold">{p.price}</p>

                  <ColorDots colors={p.colors} />

                  <div className="mt-4 flex gap-2">
                    <Link
                      href={`/producto/${p.id}`}
                      className="flex-1 rounded-2xl bg-black px-4 py-2 text-center text-xs font-semibold text-white hover:bg-black/90"
                    >
                      Ver
                    </Link>
                    <button
                      type="button"
                      className="rounded-2xl border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-black/70 hover:bg-black/5"
                      onClick={() => alert("Luego conectamos esto al carrito ✅")}
                    >
                      + Carrito
                    </button>
                  </div>

                  <p className="mt-3 text-[11px] text-black/45">
                    Tip: entra al producto para elegir <b>color</b> y <b>estampado</b>.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* banner final */}
        <section className="pb-16">
          <Glass className="p-6 md:p-10">
            <div className="grid items-center gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-extrabold uppercase tracking-tight">Drop limitado</h3>
                <p className="mt-2 text-sm text-black/60">
                  Stock por tallas y variantes. Si te gustó, no lo dejes para después.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                <Link
                  href="/catalogo"
                  className="rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-black/90 text-center"
                >
                  Ir al catálogo
                </Link>
                <Link
                  href="/carrito"
                  className="rounded-2xl border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-black/70 hover:bg-black/5 text-center"
                >
                  Ver carrito →
                </Link>
              </div>
            </div>
          </Glass>
        </section>
      </div>
    </main>
  )
}
