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
                    <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-bg-primary shadow-[inset_0_0_0_1px_rgba(201,169,98,0.4)]">
                      <div className="absolute inset-[3px] rounded-full border border-gold/20" />
                      <span className="relative font-display text-[13px] font-medium tracking-[0.08em] text-gold">
                        {owner.initial}
                      </span>
                      <svg viewBox="0 0 12 12" className="absolute -bottom-0.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 text-gold/60" fill="currentColor">
                        <polygon points="6,0 12,6 6,12 0,6" />
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
