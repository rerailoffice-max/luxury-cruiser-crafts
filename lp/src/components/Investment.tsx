"use client";

import FadeIn from "./FadeIn";

const METRICS = [
  { label: "全額償却", value: "4年", unit: "購入費を全額経費に" },
  { label: "経費計上", value: "100%", unit: "損金算入で節税効果" },
  { label: "資産価値", value: "売却可", unit: "中古市場で流動性あり" },
  { label: "維持管理", value: "0", unit: "すべて運営が代行" },
];

export default function Investment() {
  return (
    <section className="bg-bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <FadeIn variant="slideLeft">
              <p className="font-display text-sm tracking-[0.3em] text-gold uppercase">
                Ownership Merit
              </p>
            </FadeIn>

            <FadeIn variant="slideLeft" delay={0.1}>
              <h2 className="mt-4 font-serif text-2xl text-white md:text-3xl">
                所有する愉しみと、税務メリットを。
              </h2>
            </FadeIn>

            <FadeIn variant="slideLeft" delay={0.2}>
              <div className="mt-4 h-px w-16 bg-gold" />
            </FadeIn>

            <FadeIn variant="slideLeft" delay={0.3}>
              <p className="mt-8 text-sm leading-loose text-white/70">
                購入費は全額を4年で償却。法人の経費として100%損金算入が可能です。所有権はあなたのもの。将来の売却や相続も自由。管理・メンテナンスはすべて運営が代行するため、オーナーは乗るだけ。
              </p>
            </FadeIn>

            <FadeIn variant="slideLeft" delay={0.4}>
              <p className="mt-6 text-xs text-white/40">
                ※ 税務メリットは個別の状況により異なります。顧問税理士にご確認ください。
              </p>
            </FadeIn>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4">
              {METRICS.map((m, i) => (
                <FadeIn key={m.label} delay={i * 0.1}>
                  <div className="group flex flex-col items-center justify-center rounded-sm border border-gold/10 bg-gradient-to-b from-bg-primary to-bg-primary/80 p-8 text-center transition-all duration-500 hover:border-gold/30 hover:shadow-[0_0_40px_rgba(201,169,98,0.12)]">
                    <p className="text-[11px] font-medium tracking-[0.2em] text-gold/70 uppercase">
                      {m.label}
                    </p>
                    <p className="mt-4 font-display text-4xl md:text-5xl">
                      <span className="bg-gradient-to-b from-white via-gold-light to-gold bg-clip-text text-transparent">
                        {m.value}
                      </span>
                    </p>
                    <p className="mt-2 text-[11px] leading-relaxed tracking-wider text-white/55">
                      {m.unit}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.5}>
              <p className="mt-6 text-center text-[10px] text-white/30">
                オーナーシップの詳細は、
                <a
                  href="#contact-form"
                  className="text-gold/50 transition-colors hover:text-gold"
                >
                  プライベートブリーフィング
                </a>
                にてご案内いたします。
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
