import type { Metadata } from "next";
import { Playfair_Display, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const notoSans = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const notoSerif = Noto_Serif_JP({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KOGEI CODE — 日本の美が、海の上で目を覚ます。",
  description:
    "Azimut Grande 27M を核とするラグジュアリークルーザー共同所有プログラム。伝統工芸の美と、海上での特別な体験を。",
  robots: { index: false, follow: false },
  openGraph: {
    title: "KOGEI CODE",
    description: "日本の美が、海の上で目を覚ます。",
    images: [{ url: "/images/hero-azimut.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${playfair.variable} ${notoSans.variable} ${notoSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
