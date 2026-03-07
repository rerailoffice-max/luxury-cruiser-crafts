"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";

const GAS_URL = process.env.NEXT_PUBLIC_GAS_URL ?? "";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Cta() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      referrer: (form.elements.namedItem("referrer") as HTMLInputElement).value,
      interest: (form.elements.namedItem("interest") as HTMLSelectElement).value,
    };

    try {
      const res = await fetch(GAS_URL, {
        method: "POST",
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("送信に失敗しました");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="relative overflow-hidden bg-bg-primary py-28 md:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.06] via-transparent to-gold/[0.06]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,98,0.08)_0%,_transparent_60%)]" />
      <div className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <FadeIn>
          <p className="font-display text-[11px] tracking-[0.4em] text-gold/70 uppercase">
            Private Briefing
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mt-8 font-serif text-2xl leading-relaxed text-white md:text-4xl md:leading-relaxed">
            この海の上にしかない、
            <br />
            <span className="text-gold">あなただけの時間</span>を。
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mx-auto mt-8 max-w-lg font-serif text-sm leading-[2] text-white/60 md:text-base md:leading-[2.2]">
            日本の伝統美と、海上の特別な空間。
            <br />
            オーナーだけに許された、唯一無二の体験をご案内します。
          </p>
        </FadeIn>

        <FadeIn delay={0.35}>
          <p className="mt-4 text-[11px] tracking-wider text-white/30">
            本プログラムは完全招待制です。ご紹介者の情報をフォームにてお知らせください。
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-14 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
            <motion.a
              href="#contact-form"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-sm bg-gold px-10 py-4 text-sm font-medium tracking-[0.15em] text-bg-primary transition-all duration-500 hover:bg-gold-light hover:shadow-[0_0_40px_rgba(201,169,98,0.25)]"
            >
              <span className="relative z-10">ブリーフィングを予約する</span>
            </motion.a>
            <motion.a
              href="#contact-form"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center rounded-sm border border-gold/30 px-10 py-4 text-sm font-medium tracking-[0.15em] text-gold transition-all duration-500 hover:border-gold hover:bg-gold/[0.06] hover:shadow-[0_0_30px_rgba(201,169,98,0.1)]"
            >
              資料を請求する
            </motion.a>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div id="contact-form" className="mx-auto mt-24 max-w-md text-left">
            <div className="mx-auto mb-10 h-px w-20 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="py-16 text-center"
                >
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/30">
                    <svg
                      className="h-8 w-8 text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl text-white">
                    送信が完了しました
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/50">
                    担当者より 2 営業日以内にご連絡いたします。
                    <br />
                    しばらくお待ちください。
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-7"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label className="mb-2 block text-[11px] tracking-wider text-white/40">
                      お名前 <span className="text-gold/70">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full border-b border-white/[0.08] bg-transparent px-0 py-3 text-sm text-white outline-none transition-all duration-300 focus:border-gold/60 placeholder:text-white/15"
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-[11px] tracking-wider text-white/40">
                      会社名（任意）
                    </label>
                    <input
                      type="text"
                      name="company"
                      className="w-full border-b border-white/[0.08] bg-transparent px-0 py-3 text-sm text-white outline-none transition-all duration-300 focus:border-gold/60 placeholder:text-white/15"
                      placeholder="株式会社〇〇"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-[11px] tracking-wider text-white/40">
                      メールアドレス <span className="text-gold/70">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full border-b border-white/[0.08] bg-transparent px-0 py-3 text-sm text-white outline-none transition-all duration-300 focus:border-gold/60 placeholder:text-white/15"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-[11px] tracking-wider text-white/40">
                      お電話番号
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full border-b border-white/[0.08] bg-transparent px-0 py-3 text-sm text-white outline-none transition-all duration-300 focus:border-gold/60 placeholder:text-white/15"
                      placeholder="090-0000-0000"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-[11px] tracking-wider text-white/40">
                      ご紹介者名
                    </label>
                    <input
                      type="text"
                      name="referrer"
                      className="w-full border-b border-white/[0.08] bg-transparent px-0 py-3 text-sm text-white outline-none transition-all duration-300 focus:border-gold/60 placeholder:text-white/15"
                      placeholder="ご紹介者のお名前"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-[11px] tracking-wider text-white/40">
                      ご関心内容
                    </label>
                    <select
                      name="interest"
                      className="w-full border-b border-white/[0.08] bg-transparent px-0 py-3 text-sm text-white outline-none transition-all duration-300 focus:border-gold/60"
                    >
                      <option value="" className="bg-bg-primary">
                        選択してください
                      </option>
                      <option value="briefing" className="bg-bg-primary">
                        プライベートブリーフィング
                      </option>
                      <option value="document" className="bg-bg-primary">
                        資料請求
                      </option>
                      <option value="visit" className="bg-bg-primary">
                        マリーナ視察
                      </option>
                      <option value="other" className="bg-bg-primary">
                        その他
                      </option>
                    </select>
                  </div>

                  <div className="pt-6">
                    <motion.button
                      type="submit"
                      disabled={status === "sending"}
                      whileHover={status !== "sending" ? { scale: 1.02 } : {}}
                      whileTap={status !== "sending" ? { scale: 0.97 } : {}}
                      className="relative w-full rounded-sm bg-gold py-4 text-sm font-medium tracking-[0.15em] text-bg-primary transition-all duration-500 hover:bg-gold-light hover:shadow-[0_0_40px_rgba(201,169,98,0.2)] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === "sending" ? (
                        <span className="inline-flex items-center gap-2">
                          <svg
                            className="h-4 w-4 animate-spin"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          送信中...
                        </span>
                      ) : (
                        "送信する"
                      )}
                    </motion.button>
                  </div>

                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center text-xs text-red-400"
                    >
                      送信に失敗しました。しばらくしてから再度お試しください。
                    </motion.p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
