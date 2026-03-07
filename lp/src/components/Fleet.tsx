"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const SHIPS = [
  {
    name: "Yamaha EXULT 43",
    position: "Phase 1 メイン",
    badge: "NOW OPEN",
    badgeColor: "bg-gold text-bg-primary",
    image: "/images/fleet-exult43.jpg",
    specs: [
      { label: "全長", value: "14.84m" },
      { label: "定員", value: "15名" },
      { label: "キャビン", value: "2室" },
      { label: "マリーナ", value: "横浜ベイサイドマリーナ" },
    ],
  },
  {
    name: "Lexus LY680",
    position: "フラッグシップ",
    badge: "COMING SOON",
    badgeColor: "border border-gold/40 text-gold",
    image: "/images/fleet-ly680.jpg",
    specs: [
      { label: "全長", value: "20.66m" },
      { label: "定員", value: "15名" },
      { label: "キャビン", value: "3室" },
      { label: "マリーナ", value: "シーボニアマリーナ（三浦半島）" },
    ],
  },
];

export default function Fleet() {
  return (
    <section className="bg-bg-light py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mb-16 text-center">
            <p className="font-display text-sm tracking-[0.3em] text-gold uppercase">
              Fleet
            </p>
            <h2 className="mt-4 font-serif text-2xl text-bg-primary md:text-3xl">
              オールジャパン — 日本が世界に誇る2隻
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gold" />
          </div>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2">
          {SHIPS.map((ship, i) => (
            <FadeIn key={ship.name} delay={i * 0.15} className="h-full">
              <div className="group flex h-full flex-col overflow-hidden rounded-sm border border-bg-primary/5 bg-white transition-all duration-500 hover:shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden bg-bg-primary">
                  <Image
                    src={ship.image}
                    alt={ship.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 to-transparent" />
                  <div className="absolute left-4 top-4">
                    <span
                      className={`rounded-sm px-3 py-1 text-[10px] font-medium tracking-wider uppercase ${ship.badgeColor}`}
                    >
                      {ship.badge}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <p className="mb-1 text-xs text-text-muted">{ship.position}</p>
                  <h3 className="mb-6 font-display text-xl text-bg-primary">
                    {ship.name}
                  </h3>
                  <div className="flex-1 space-y-3">
                    {ship.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex items-center justify-between border-b border-bg-primary/5 pb-3"
                      >
                        <span className="text-xs text-text-muted">
                          {spec.label}
                        </span>
                        <span className="text-sm font-medium text-bg-primary">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-center text-[10px] tracking-wider text-gold/70">
                    詳細はお問い合わせください
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
