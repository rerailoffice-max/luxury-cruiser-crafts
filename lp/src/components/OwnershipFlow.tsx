"use client";

import FadeIn from "./FadeIn";

const STEPS = [
  {
    step: "01",
    label: "ご購入",
    sub: "選ばれた方だけが手にする、\n日本製クルーザーの共同所有権。",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10">
        <path
          d="M20 4l4 8h8l-6.5 5 2.5 8L20 20l-8 5 2.5-8L8 12h8l4-8z"
          stroke="url(#gold-grad)"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8D5A3" />
            <stop offset="100%" stopColor="#C9A962" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    step: "02",
    label: "共同所有",
    sub: "法人名義での登記。\n資産としての価値を、確かに手元に。",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10">
        <rect
          x="8"
          y="16"
          width="24"
          height="16"
          rx="1.5"
          stroke="url(#gold-grad2)"
          strokeWidth="1.2"
        />
        <path
          d="M20 6l10 10H10l10-10z"
          stroke="url(#gold-grad2)"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="24" r="3" stroke="url(#gold-grad2)" strokeWidth="1.2" />
        <defs>
          <linearGradient id="gold-grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8D5A3" />
            <stop offset="100%" stopColor="#C9A962" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    step: "03",
    label: "体験",
    sub: "寿司、和牛、伝統工芸——\n海の上で、日本の最高峰を味わう。",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10">
        <circle cx="20" cy="20" r="13" stroke="url(#gold-grad3)" strokeWidth="1.2" />
        <path
          d="M20 7v6M20 27v6M7 20h6M27 20h6"
          stroke="url(#gold-grad3)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="20" cy="20" r="4" stroke="url(#gold-grad3)" strokeWidth="1.2" />
        <defs>
          <linearGradient id="gold-grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8D5A3" />
            <stop offset="100%" stopColor="#C9A962" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    step: "04",
    label: "税務メリット",
    sub: "減価償却による節税効果。\n愉しみながら、賢く資産を守る。",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10">
        <path
          d="M8 32V16l12-10 12 10v16H8z"
          stroke="url(#gold-grad4)"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path
          d="M16 32v-8h8v8"
          stroke="url(#gold-grad4)"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="gold-grad4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8D5A3" />
            <stop offset="100%" stopColor="#C9A962" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

export default function OwnershipFlow() {
  return (
    <section className="relative overflow-hidden bg-bg-primary py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,98,0.04)_0%,_transparent_70%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mb-20 text-center">
            <p className="font-display text-sm tracking-[0.3em] text-gold uppercase">
              Ownership
            </p>
            <h2 className="mt-4 font-serif text-2xl text-white md:text-3xl">
              購入から体験までのフロー
            </h2>
            <div className="mx-auto mt-5 h-px w-20 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
        </FadeIn>

        <div className="relative grid gap-5 md:grid-cols-4">
          {/* 接続ライン（PC） */}
          <div className="pointer-events-none absolute top-1/2 right-[12.5%] left-[12.5%] hidden -translate-y-1/2 md:block">
            <div className="h-px w-full bg-gradient-to-r from-gold/10 via-gold/30 to-gold/10" />
          </div>

          {STEPS.map((s, i) => (
            <FadeIn key={s.step} delay={i * 0.15} className="h-full">
              <div className="group relative flex h-full flex-col items-center overflow-hidden rounded border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-transparent px-6 py-10 text-center backdrop-blur-sm transition-all duration-700 hover:border-gold/30 hover:from-white/[0.07]">
                {/* ホバー時のゴールド輝き */}
                <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-gold/0 transition-all duration-700 group-hover:bg-gold/[0.06] group-hover:blur-3xl" />

                <div className="relative mb-5 text-gold/60 transition-colors duration-500 group-hover:text-gold">
                  {s.icon}
                </div>

                <span className="mb-3 font-display text-[11px] tracking-[0.35em] text-gold/40 uppercase transition-colors duration-500 group-hover:text-gold/70">
                  Step {s.step}
                </span>

                <h3 className="mb-4 text-xl font-medium tracking-wide text-white">
                  {s.label}
                </h3>

                <div className="mb-5 h-px w-10 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

                <p className="whitespace-pre-line text-[13px] leading-[1.9] text-white/45">
                  {s.sub}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
