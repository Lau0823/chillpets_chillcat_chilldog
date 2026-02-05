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
  desc: string
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
    desc: "Tela premium, caída oversize y vibe street. Ideal para looks urbanos.",
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
    desc: "Fit boxy moderno y logo minimal. Perfecta para combinar con jeans o cargo.",
    colors: [
      { name: "Blanco", hex: "#F5F5F5" },
      { name: "Azul", hex: "#1E3A8A" },
    ],
    prints: [{ name: "Logo", img: "https://i.pinimg.com/736x/8c/7b/2f/8c7b2f5d3b9a61d6a0a4f8b0a0e7b41c.jpg" }],
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

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-semibold text-black/70 backdrop-blur">
      {children}
    </span>
  )
}

export default function Page({ params }: { params: { id: string } }) {
  const product = useMemo(() => tees.find((t) => t.id === params.id), [params.id])

  const [colorIdx, setColorIdx] = useState(0)
  const [printIdx, setPrintIdx] = useState(0)
  const [size, setSize] = useState<"S" | "M" | "L" | "XL">("M")
  const [qty, setQty] = useState(1)

  if (!product) {
    return (
      <main className="min-h-screen bg-white text-[#0f0f0e]">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <Glass className="p-8">
            <p className="text-sm font-semibold text-black/60">Producto no encontrado.</p>
            <Link href="/camisetas" className="mt-4 inline-flex rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white">
              Volver a camisetas →
            </Link>
          </Glass>
        </div>
      </main>
    )
  }

  const selectedColor = product.colors[colorIdx]
  const selectedPrint = product.prints[printIdx]

  return (
    <main className="min-h-screen bg-white text-[#0f0f0e]">
      <div className="mx-auto max-w-6xl px-4 pt-6 pb-16">
        {/* breadcrumbs */}
        <div className="mb-4 flex items-center gap-2 text-xs font-semibold text-black/50">
          <Link href="/" className="hover:text-black">Home</Link>
          <span>•</span>
          <Link href="/camisetas" className="hover:text-black">Camisetas</Link>
          <span>•</span>
          <span className="text-black/70">{product.name}</span>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* gallery */}
          <section className="overflow-hidden rounded-[28px] border border-black/10 bg-white">
            <div className="relative h-[52vh] min-h-[420px] w-full bg-[#f6f6f6]">
              {product.tag ? (
                <span className="absolute left-4 top-4 z-10 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-black/70 backdrop-blur">
                  {product.tag}
                </span>
              ) : null}

              <img src={product.img} alt={product.name} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

              {/* info pills */}
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                <Pill>{product.fit}</Pill>
                <Pill>{selectedColor.name}</Pill>
                <Pill>{selectedPrint?.name ?? "Sin estampado"}</Pill>
              </div>
            </div>
          </section>

          {/* details */}
          <section className="space-y-4">
            <Glass className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-extrabold uppercase leading-[0.95] tracking-tight">
                    {product.name}
                  </h1>
                  <p className="mt-2 text-sm text-black/60">{product.desc}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-xs font-semibold text-black/50">Precio</p>
                  <p className="text-2xl font-extrabold">{product.price}</p>
                </div>
              </div>

              {/* color */}
              <div className="mt-6">
                <p className="text-xs font-extrabold uppercase tracking-wide text-black/60">Color</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.colors.map((c, idx) => {
                    const active = idx === colorIdx
                    return (
                      <button
                        key={c.name}
                        type="button"
                        onClick={() => setColorIdx(idx)}
                        className={[
                          "flex items-center gap-2 rounded-2xl border px-3 py-2 text-xs font-semibold transition",
                          active ? "border-black bg-black text-white" : "border-black/10 bg-white text-black/70 hover:bg-black/5",
                        ].join(" ")}
                      >
                        <span className="h-4 w-4 rounded-full border border-black/10" style={{ background: c.hex }} />
                        {c.name}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* print */}
              <div className="mt-6">
                <p className="text-xs font-extrabold uppercase tracking-wide text-black/60">Estampado</p>
                <div className="mt-2 grid grid-cols-3 gap-3 sm:grid-cols-4">
                  {product.prints.map((pr, idx) => {
                    const active = idx === printIdx
                    return (
                      <button
                        key={pr.name}
                        type="button"
                        onClick={() => setPrintIdx(idx)}
                        className={[
                          "overflow-hidden rounded-2xl border bg-white text-left transition",
                          active ? "border-black" : "border-black/10 hover:border-black/20",
                        ].join(" ")}
                      >
                        <div className="h-16 w-full bg-[#f6f6f6]">
                          <img src={pr.img} alt={pr.name} className="h-full w-full object-cover" />
                        </div>
                        <div className="px-2 py-2">
                          <p className="text-[11px] font-semibold text-black/70">{pr.name}</p>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* size + qty */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wide text-black/60">Talla</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {(["S", "M", "L", "XL"] as const).map((s) => {
                      const active = s === size
                      return (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setSize(s)}
                          className={[
                            "rounded-2xl px-4 py-2 text-xs font-semibold transition",
                            active ? "bg-black text-white" : "border border-black/10 bg-white text-black/70 hover:bg-black/5",
                          ].join(" ")}
                        >
                          {s}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wide text-black/60">Cantidad</p>
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setQty((n) => Math.max(1, n - 1))}
                      className="h-10 w-10 rounded-2xl border border-black/10 bg-white text-sm font-extrabold text-black/70 hover:bg-black/5"
                    >
                      −
                    </button>
                    <div className="flex h-10 min-w-[56px] items-center justify-center rounded-2xl border border-black/10 bg-white text-sm font-extrabold">
                      {qty}
                    </div>
                    <button
                      type="button"
                      onClick={() => setQty((n) => n + 1)}
                      className="h-10 w-10 rounded-2xl border border-black/10 bg-white text-sm font-extrabold text-black/70 hover:bg-black/5"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* actions */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  className="flex-1 rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-black/90"
                  onClick={() =>
                    alert(
                      `Agregar al carrito ✅\n\nProducto: ${product.name}\nColor: ${selectedColor.name}\nEstampado: ${selectedPrint?.name}\nTalla: ${size}\nCantidad: ${qty}`
                    )
                  }
                >
                  Agregar al carrito
                </button>
                <Link
                  href="/checkout"
                  className="flex-1 rounded-2xl border border-black/10 bg-white px-6 py-3 text-center text-sm font-semibold text-black/70 hover:bg-black/5"
                >
                  Comprar ahora →
                </Link>
              </div>

              <p className="mt-3 text-[11px] text-black/45">
                Tip: “Comprar ahora” te lleva directo al checkout (ruta fácil).
              </p>
            </Glass>
          </section>
        </div>
      </div>
    </main>
  )
}
