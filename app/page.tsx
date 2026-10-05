"use client";
import Link from "next/link";
import data from "@/lib/data.json";
import { ProductCard } from "@/components/ProductCard";
import { NicheTool } from "@/components/NicheTool";
import { HeroFilm } from "@/components/HeroFilm";
import type { Product } from "@/lib/types";
import { Marquee } from "@/components/Marquee";
import { StatRow } from "@/components/StatRow";
import { FilmStrip } from "@/components/FilmStrip";
import { Newsletter } from "@/components/Newsletter";
import { MotionReveal } from "@/components/MotionReveal";
import { OfferSpot } from "@/components/OfferSpot";
import { ReviewRail } from "@/components/ReviewRail";
import { FaqBlock } from "@/components/FaqBlock";

const brand = data.brand;
const products = data.products as Product[];

export default function HomePage() {
  return (
    <>
      <Marquee />
      <section className="relative min-h-[100svh] overflow-hidden">
        <HeroFilm video={brand.heroVideo} image={brand.heroImage} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#eef5f7] via-transparent to-[#8eb6c8]/25" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col items-start justify-end px-4 pb-16 md:px-6 md:pb-24">
          <div className="aurora-panel max-w-xl p-8 md:p-10">
            <h1 className="mist-title font-display text-5xl md:text-6xl">{brand.name}</h1>
            <p className="mt-4 text-lg" style={{ color: "var(--muted)" }}>{brand.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="soft-pill text-sm font-medium" style={{ background: "var(--accent)", color: "#fff", borderColor: "transparent" }}>View suites</Link>
              <Link href="/concierge" className="soft-pill text-sm font-medium">Concierge</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="stay" className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="aurora-panel p-6 md:p-8">
            <h2 className="font-display text-3xl">Mist, linen, tide</h2>
            <p className="mt-3 text-sm" style={{ color: "var(--muted)" }}>Soft luxury without hard UI chrome — hospitality as atmosphere.</p>
            <div className="mt-6"><NicheTool /></div>
          </div>
          <div className="grid gap-4">
            {brand.features.slice(0, 4).map((f: { title: string; desc: string }) => (
              <MotionReveal key={f.title} className="aurora-panel p-5">
                <h3 className="font-display text-xl">{f.title}</h3>
                <p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>{f.desc}</p>
              </MotionReveal>
            ))}
          </div>
        </div>
        <h2 className="mt-14 font-display text-3xl">Suites & rituals</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((p) => (
            <div key={p.id} className="aurora-panel !p-3"><ProductCard product={p} /></div>
          ))}
        </div>
      </section>
      <OfferSpot />
      <StatRow />
      <FilmStrip />
      <ReviewRail />
      <FaqBlock />
      <MotionReveal className="mx-auto max-w-6xl px-4 pb-16 md:px-6"><Newsletter /></MotionReveal>
    </>
  );
}
