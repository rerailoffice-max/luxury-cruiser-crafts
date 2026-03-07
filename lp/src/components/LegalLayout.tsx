import Link from "next/link";

type LegalLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export default function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-bg-primary text-white">
      <header className="border-b border-white/[0.04] py-6">
        <div className="mx-auto max-w-3xl px-6">
          <Link href="/" className="inline-block transition-opacity hover:opacity-70">
            <span className="font-display text-lg tracking-[0.08em]">
              <span className="bg-gradient-to-b from-gold-light via-gold to-gold/70 bg-clip-text text-transparent">
                KOGEI CODE
              </span>
            </span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <h1 className="mb-12 font-serif text-2xl text-gold md:text-3xl">
          {title}
        </h1>
        <div className="prose-legal space-y-8 text-sm leading-[2] text-white/60">
          {children}
        </div>
      </main>

      <footer className="border-t border-white/[0.04] py-8">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Link
            href="/"
            className="text-[11px] tracking-wider text-white/30 transition-colors hover:text-gold/60"
          >
            ← トップページに戻る
          </Link>
        </div>
      </footer>
    </div>
  );
}
