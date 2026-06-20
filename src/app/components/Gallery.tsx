"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

const galleryImages = [
  { src: "/images/gallery-01.jpg", alt: "Wohnmobil im Sonnenuntergang", caption: "Goldene Stunde am Stellplatz" },
  { src: "/images/gallery-02.jpg", alt: "Wohnmobil am See", caption: "Stille Abende am Wasser" },
  { src: "/images/gallery-03.jpg", alt: "Wohnmobil bei Abendlicht", caption: "Abendlicht über dem See" },
  { src: "/images/gallery-04.jpg", alt: "Wohnmobil Nahaufnahme goldene Stunde", caption: "Warmes Licht zur blauen Stunde" },
  { src: "/images/gallery-05.jpg", alt: "Wohnmobil Seitenansicht Sonnenuntergang", caption: "Unterwegs im Sonnenuntergang" },
  { src: "/images/gallery-06.jpg", alt: "Wohnmobil Gegenlicht", caption: "Gegenlicht & Fernweh" },
  { src: "/images/gallery-07.jpg", alt: "Kind schaut aus dem Wohnmobil", caption: "Kinderaugen, große Abenteuer" },
  { src: "/images/gallery-08.jpg", alt: "Kind zeigt auf Sonnenuntergang", caption: "Schau mal, die Sonne!" },
  { src: "/images/gallery-09.jpg", alt: "Sun Living A 60 SP mit Campingtisch bei Sonnenuntergang", caption: "Erster Kaffee mit Aussicht" },
  { src: "/images/gallery-10.jpg", alt: "Modernes Fahrerhaus Cockpit mit goldenem Licht", caption: "Bereit für die nächste Etappe" },
  { src: "/images/gallery-11.jpg", alt: "Drohnenansicht Wohnmobil mit Markise", caption: "Markise raus, Urlaub an" },
  { src: "/images/gallery-12.jpg", alt: "Drohnenansicht Wohnmobil am See bei Sonnenuntergang", caption: "Unser Plätzchen am See" },
  { src: "/images/gallery-13.jpg", alt: "Vogelperspektive Wohnmobil mit Solarpanel", caption: "Autark mit Sonne auf dem Dach" },
];

// Slight, deterministic tilt per slide for the casual snapshot feel.
const ROTATIONS = [-2.5, 1.8, -1.4, 2.4, -2, 1.2, -2.6, 2.1, -1.6, 2.6, -1.9, 1.5, -2.3];

const AUTOPLAY_DELAY = 4000;

function PolaroidPhoto({
  image,
  priority = false,
}: {
  image: (typeof galleryImages)[number];
  priority?: boolean;
}) {
  return (
    <div className="bg-white p-3 sm:p-4 pb-12 sm:pb-16 rounded-[4px] shadow-[0_18px_40px_-12px_rgba(45,45,45,0.45)] ring-1 ring-black/5">
      <div className="relative aspect-square w-full overflow-hidden bg-sand">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 640px) 80vw, 380px"
          draggable={false}
        />
      </div>
      <p className="mt-3 sm:mt-4 text-center text-2xl sm:text-3xl leading-none text-charcoal/80 [font-family:var(--font-caveat),cursive]">
        {image.caption}
      </p>
    </div>
  );
}

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  // direction: 1 = next, -1 = previous — drives slide direction.
  const [direction, setDirection] = useState(1);

  const total = galleryImages.length;

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setIndex((prev) => (prev + dir + total) % total);
    },
    [total]
  );

  // Auto-rotate, paused on hover/focus and when the tab is hidden.
  const pausedRef = useRef(paused);
  pausedRef.current = paused;
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      if (!pausedRef.current && !document.hidden) {
        setDirection(1);
        setIndex((prev) => (prev + 1) % total);
      }
    }, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, [total]);

  const active = galleryImages[index];
  const rotation = ROTATIONS[index % ROTATIONS.length];

  return (
    <section id="galerie" className="py-20 sm:py-28 bg-sand/30 overflow-x-clip">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
            Impressionen
          </h2>
          <p className="mt-4 text-lg text-bark">
            Der Sun Living A 60 SP in seiner natürlichen Umgebung
          </p>
        </div>

        <div
          className="flex flex-col items-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          {/* Stage — sized by an invisible sizer so there is no layout shift */}
          <div className="relative w-[78vw] max-w-[340px] sm:max-w-[380px]">
            {/* sizer (keeps the stage at the polaroid's natural height) */}
            <div className="invisible" aria-hidden="true">
              <PolaroidPhoto image={active} />
            </div>

            <div
              className="absolute inset-0"
              role="region"
              aria-roledescription="Galerie"
              aria-label="Impressionen vom Wohnmobil"
            >
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={index}
                  custom={direction}
                  initial={{
                    opacity: 0,
                    x: direction * 60,
                    rotate: rotation * 1.6,
                    scale: 0.94,
                  }}
                  animate={{ opacity: 1, x: 0, rotate: rotation, scale: 1 }}
                  exit={{
                    opacity: 0,
                    x: direction * -50,
                    rotate: rotation * -1.4,
                    scale: 0.94,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 26,
                    opacity: { duration: 0.35 },
                  }}
                  className="absolute inset-0 will-change-transform"
                >
                  <PolaroidPhoto image={active} priority={index === 0} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center gap-5">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Vorheriges Bild"
              className="grid place-items-center w-11 h-11 rounded-full bg-white text-charcoal shadow-md ring-1 ring-black/5 transition-all hover:bg-charcoal hover:text-white"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div
              className="tabular-nums text-bark font-medium select-none w-[72px] text-center"
              aria-live="polite"
            >
              <span className="text-charcoal text-lg">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-bark/50"> / {total}</span>
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Nächstes Bild"
              className="grid place-items-center w-11 h-11 rounded-full bg-white text-charcoal shadow-md ring-1 ring-black/5 transition-all hover:bg-charcoal hover:text-white"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
