"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/hero-azimut.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/70 via-bg-primary/40 to-bg-primary" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-navy/50" />

      <div className="relative z-10 flex flex-col items-center gap-5 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 80 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="h-px bg-gradient-to-r from-transparent via-gold to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[10px] tracking-[0.5em] text-gold/50 uppercase"
        >
          Exclusive Co-Ownership Program
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-5xl leading-none tracking-[0.08em] md:text-7xl lg:text-8xl"
        >
          <span className="bg-gradient-to-b from-gold-light via-gold to-gold/70 bg-clip-text text-transparent">
            KOGEI CODE
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 40 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="h-px bg-gold/40"
        />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-1 font-serif text-base leading-relaxed tracking-wider text-white/80 md:text-lg"
        >
          日本の美が、海の上で目を覚ます。
        </motion.p>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[9px] tracking-[0.25em] text-white/25 uppercase">
            Scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-gold/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
