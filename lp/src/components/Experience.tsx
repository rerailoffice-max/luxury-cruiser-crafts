"use client";

import FadeIn from "./FadeIn";

const EXPERIENCES = [
  {
    title: "船上寿司",
    desc: "一流の寿司職人がその場で握る極上のにぎり",
    image: "/images/exp-sushi.jpg",
    gradient: "from-amber-900/80 to-bg-primary/90",
  },
  {
    title: "和牛BBQ",
    desc: "A5和牛を海風のなかで。特別監修のBBQ",
    image: "/images/exp-wagyu.jpg",
    gradient: "from-red-900/80 to-bg-primary/90",
  },
  {
    title: "花火クルーズ",
    desc: "東京湾花火を船上特等席から。夏の風物詩を独占",
    image: "/images/exp-hanabi.jpg",
    gradient: "from-indigo-900/80 to-bg-primary/90",
  },
  {
    title: "工芸ディナー",
    desc: "伝統工芸の器と空間で味わう、匠のフルコース",
    image: "/images/exp-craft-dinner.jpg",
    gradient: "from-gold/40 to-bg-primary/90",
  },
  {
    title: "シェフクルーズ",
    desc: "ミシュランシェフが乗船。海上の特別なディナー",
    image: "/images/exp-chef.jpg",
    gradient: "from-emerald-900/80 to-bg-primary/90",
  },
];

export default function Experience() {
  return (
    <section className="bg-bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <div className="mb-16">
            <p className="font-display text-sm tracking-[0.3em] text-gold uppercase">
              Experience
            </p>
            <h2 className="mt-4 font-serif text-2xl text-white md:text-3xl">
              乗るたびに、特別な体験を。
            </h2>
            <div className="mt-4 h-px w-16 bg-gold" />
          </div>
        </FadeIn>

        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 scrollbar-hide md:grid md:grid-cols-5 md:overflow-visible">
          {EXPERIENCES.map((e, i) => (
            <FadeIn key={e.title} delay={i * 0.1} className="shrink-0 snap-center">
              <div className="group relative h-80 w-56 overflow-hidden rounded-sm md:h-96 md:w-full">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-bg-primary"
                  style={{ backgroundImage: `url('${e.image}')` }}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${e.gradient} transition-opacity duration-500 group-hover:opacity-80`}
                />

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="mb-2 text-lg font-medium text-white">
                    {e.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-white/70">
                    {e.desc}
                  </p>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-px bg-gold/0 transition-all duration-500 group-hover:bg-gold/60" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
