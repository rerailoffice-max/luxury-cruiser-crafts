"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";

const CRAFTS = [
  { name: "金沢金箔", region: "金沢", type: "金箔工芸", image: "/images/craft-kinpaku.jpg" },
  { name: "輪島塗", region: "輪島", type: "漆工芸", image: "/images/craft-wajima.jpg" },
  { name: "鹿沼組子", region: "鹿沼", type: "組子細工", image: "/images/craft-kumiko.jpg" },
  { name: "薩摩切子", region: "鹿児島", type: "薩摩切子", image: "/images/craft-kiriko.jpg" },
  { name: "博多織", region: "福岡", type: "博多織", image: "/images/craft-hakata.jpg" },
  { name: "燕三条", region: "新潟", type: "金属加工", image: "/images/craft-tsubame.jpg" },
];

export default function Craft() {
  return (
    <section className="bg-bg-primary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mb-16">
            <p className="font-display text-sm tracking-[0.3em] text-gold uppercase">
              Craft
            </p>
            <h2 className="mt-4 font-serif text-2xl text-white md:text-3xl">
              匠の技が、海の上で息づく。
            </h2>
            <div className="mt-4 h-px w-16 bg-gold" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {CRAFTS.map((craft, i) => (
            <FadeIn key={craft.name} delay={i * 0.08}>
              <div className="group relative aspect-square overflow-hidden rounded-sm bg-bg-secondary">
                <Image
                  src={craft.image}
                  alt={`${craft.name} — ${craft.region} ${craft.type}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent transition-all duration-700 group-hover:from-gold/20" />

                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-60 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="h-px w-8 bg-gold/40 transition-all duration-500 group-hover:w-12 group-hover:bg-gold" />
                  <p className="mt-4 text-sm font-medium text-white drop-shadow-lg">
                    {craft.name}
                  </p>
                  <p className="mt-1 text-xs text-white/50 drop-shadow-lg">
                    {craft.region} — {craft.type}
                  </p>
                  <div className="mt-4 h-px w-8 bg-gold/40 transition-all duration-500 group-hover:w-12 group-hover:bg-gold" />
                </div>

                <div className="absolute inset-x-0 bottom-0 h-px bg-gold/0 transition-all duration-500 group-hover:bg-gold/40" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
