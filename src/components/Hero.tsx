import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/ffa8a35f-effd-45bc-9e56-99d36f3c4d4a/files/d62c0131-eb12-4b03-8b64-7fc667c9aa1e.jpg"
          alt="Гранитный карьер"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 drop-shadow-lg">
          КАМЕНЬ<br className="block" /> <span className="opacity-80">И ПАМЯТЬ</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90 drop-shadow">
          Памятники и благоустройство из натурального гранита и мрамора — от простых до эксклюзивных
        </p>
        <p className="mt-3 text-sm uppercase tracking-widest opacity-70">г. Киров</p>
        <a
          href="tel:+79014790408"
          className="mt-8 inline-block bg-white text-black px-8 py-3 uppercase tracking-wide text-sm font-semibold hover:bg-neutral-200 transition-colors duration-300"
        >
          Позвонить Андрею
        </a>
      </div>
    </div>
  );
}