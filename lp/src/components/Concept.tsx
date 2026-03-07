"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import FadeIn from "./FadeIn";

const SLIDES = [
  { src: "/images/concept-interior-01.png", alt: "クルーザー内装 — ラウンジ" },
  { src: "/images/concept-interior-02.png", alt: "クルーザー内装 — キャビン" },
  { src: "/images/concept-interior-03.jpeg", alt: "クルーザー内装 — デッキ" },
  { src: "/images/concept-interior-04.png", alt: "Lexus LY650 — インテリア" },
  { src: "/images/concept-interior-05.png", alt: "プレステージ F49 — サロン" },
  { src: "/images/concept-interior-06.png", alt: "ポーナム35 — キャビン" },
];

export default function Concept() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section className="bg-bg-primary py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:gap-16">
        <div className="flex flex-col justify-center gap-8">
          <FadeIn variant="slideLeft">
            <p className="font-display text-sm tracking-[0.3em] text-gold uppercase">
              Concept
            </p>
          </FadeIn>

          <FadeIn variant="slideLeft" delay={0.1}>
            <h2 className="font-serif text-2xl leading-relaxed text-white md:text-3xl">
              日本の美が、
              <br />
              海の上で目を覚ます。
            </h2>
          </FadeIn>

          <FadeIn variant="slideLeft" delay={0.2}>
            <p className="text-sm leading-loose text-white/70">
              匠が一打一打に込める魂。金箔の輝き、漆の深み、組子の精密さ
              — すべてが、この船のために。
            </p>
          </FadeIn>

          <FadeIn variant="slideLeft" delay={0.3}>
            <p className="text-sm leading-loose text-white/70">
              船体から包丁1本まで、すべて日本製。
              <br />
              世界にひとつだけの海上空間。
            </p>
          </FadeIn>
        </div>

        <FadeIn variant="slideRight" delay={0.2}>
          <div
            className="relative aspect-[4/5] overflow-hidden rounded-sm bg-bg-secondary"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={SLIDES[current].src}
                  alt={SLIDES[current].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-gold/5 pointer-events-none" />

            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2.5">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`スライド ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === current
                      ? "w-6 bg-gold shadow-[0_0_8px_rgba(201,169,98,0.5)]"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
