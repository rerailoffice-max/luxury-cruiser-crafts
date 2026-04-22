"use client";

import FadeIn from "./FadeIn";

const OWNERS = [
  {
    initial: "T.M.",
    quote:
      "金箔の光が水面で揺れる。この船だけが見せる景色に、週末の価値が変わった。",
    title: "IT企業 代表取締役",
    age: "50代",
    ship: "Azimut Grande 27M オーナー",
    avatar: "T.M.",
  },
  {
    initial: "S.K.",
    quote:
      "患者様との会食も、クライアントとの接待も、この船が一歩上の記憶を残してくれる。",
    title: "美容外科クリニック 院長",
    age: "40代",
    ship: "Azimut Grande 27M オーナー",
    avatar: "S.K.",
  },
  {
    initial: "H.Y.",
    quote:
      "伝統工芸に囲まれながら海を行く——所有する意味と、使う喜びを両立できた。",
    title: "不動産投資会社 代表",
    age: "50代",
    ship: "Azimut Grande 27M オーナー",
    avatar: "H.Y.",
  },
];

export default function Voice() {
  return (
    <section className="bg-bg-light py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mb-16 text-center">
            <p className="font-display text-[11px] tracking-[0.4em] text-gold uppercase">
              Voice
            </p>
            <h2 className="mt-4 font-serif text-2xl text-bg-primary md:text-3xl">
              オーナーの声
            </h2>
            <div className="mx-auto mt-5 h-px w-20 bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {OWNERS.map((owner, i) => (
            <FadeIn key={owner.initial} delay={i * 0.15} className="h-full">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-bg-primary/[0.06] bg-white p-8 shadow-sm transition-all duration-700 hover:border-gold/30 hover:shadow-lg md:p-10">
                <div className="relative mb-5 font-display text-4xl leading-none text-gold/30 select-none">
                  &ldquo;
                </div>

                <p className="relative mb-8 flex-1 font-serif text-sm leading-[2.2] text-bg-primary/80">
                  {owner.quote}
                </p>

                <div className="relative">
                  <div className="mb-5 h-px w-10 bg-gradient-to-r from-gold/40 to-transparent" />

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-gold/25 bg-gradient-to-b from-gold/10 to-gold/[0.03]">
                      <svg viewBox="0 0 40 40" fill="none" className="h-6 w-6 text-gold/50">
                        <circle cx="20" cy="15" r="6" fill="currentColor" />
                        <path d="M8 36c0-6.6 5.4-12 12-12s12 5.4 12 12" fill="currentColor" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-bg-primary/75">
                        {owner.title}
                      </p>
                      <p className="mt-0.5 text-[10px] text-bg-primary/50">
                        {owner.age} / {owner.ship}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
