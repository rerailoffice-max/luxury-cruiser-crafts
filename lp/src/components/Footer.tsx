import Link from "next/link";

const LEGAL_LINKS = [
  { label: "特定商取引法に基づく表記", href: "/legal/tokushoho" },
  { label: "プライバシーポリシー", href: "/legal/privacy" },
  { label: "免責事項", href: "/legal/disclaimer" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] bg-[#050505] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          <p className="font-display text-xl tracking-[0.08em]">
            <span className="bg-gradient-to-b from-gold-light via-gold to-gold/70 bg-clip-text text-transparent">
              KOGEI CODE
            </span>
          </p>

          <p className="font-serif text-xs tracking-wider text-white/25">
            日本の美が、海の上で目を覚ます。
          </p>

          <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          <nav className="flex flex-wrap justify-center gap-6">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[10px] tracking-wider text-white/20 transition-colors hover:text-gold/50"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="max-w-md text-[10px] leading-[1.9] text-white/12">
            ※
            本ページの内容は投資勧誘を目的としたものではありません。投資に関する最終的な判断はお客様ご自身でお願いいたします。
          </p>

          <p className="text-[10px] text-white/8">
            &copy; {new Date().getFullYear()} KOGEI CODE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
