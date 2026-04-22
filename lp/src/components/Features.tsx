"use client";

import FadeIn from "./FadeIn";

const FEATURES = [
  {
    num: "01",
    title: "共同所有で、クルーザーオーナーに",
    desc: "年間12泊から。ライフスタイルに合わせた所有が可能です。使わない日はチャーター運用も。",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8">
        <path
          d="M4 22c0 0 4-2 12-2s12 2 12 2M6 22l2-8h16l2 8M16 14V8M12 8h8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    num: "02",
    title: "資産として保有",
    desc: "法人名義で4年償却。「所有権」での購入のため、売却・相続が可能です。",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8">
        <rect
          x="6"
          y="14"
          width="20"
          height="12"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M16 6l8 8H8l8-8z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="16" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "クルーザーの上でしかない体験",
    desc: "寿司職人、和牛BBQ、伝統工芸ディナー。乗るたびに特別な体験を。",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8">
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M16 6v4M16 22v4M6 16h4M22 16h4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "維持管理はすべて不要",
    desc: "クルー手配からメンテナンスまで、すべてお任せ。オーナーは乗るだけ。",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8">
        <rect
          x="10"
          y="4"
          width="12"
          height="20"
          rx="6"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M16 24v4M12 28h8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="16" cy="14" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="bg-bg-light py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mb-16 text-center">
            <p className="font-display text-sm tracking-[0.3em] text-gold uppercase">
              Features
            </p>
            <h2 className="mt-4 font-serif text-2xl text-bg-primary md:text-3xl">
              KOGEI CODE の特徴
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-gold" />
          </div>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-2">
          {FEATURES.map((f, i) => (
            <FadeIn key={f.num} delay={i * 0.12} className="h-full">
              <div className="group relative flex h-full flex-col rounded-sm border border-bg-primary/5 bg-white p-8 transition-all duration-500 hover:border-gold/40 hover:shadow-lg md:p-10">
                <div className="mb-6 flex items-start justify-between">
                  <span className="font-display text-4xl text-gold/30 transition-colors duration-500 group-hover:text-gold">
                    {f.num}
                  </span>
                  <div className="text-gold/40 transition-colors duration-500 group-hover:text-gold">
                    {f.icon}
                  </div>
                </div>
                <h3 className="mb-3 text-lg font-medium text-bg-primary">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {f.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
