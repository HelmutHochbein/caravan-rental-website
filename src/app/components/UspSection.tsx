"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const usps = [
  {
    title: "Erstklassige Qualität",
    desc: "Unser Sun Living A 60 SP ist Baujahr 2026 — Sie fahren ein nagelneues Alkoven-Wohnmobil mit modernster Ausstattung, Solar und beheizten Tanks.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Persönliche Betreuung",
    desc: "Wir übergeben Ihnen das Wohnmobil persönlich in Althuettendorf mit ausführlicher Einweisung — und sind auch während Ihrer Reise erreichbar.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Perfekter Standort",
    desc: "Ab Barnim sind Sie in unter einer Stunde an der Ostsee, in der Uckermark oder im Spreewald — und in 45 Minuten am Berliner Ring.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function UspSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-usp-card]", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
      gsap.from("[data-usp-image]", {
        x: 60,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: { trigger: "[data-usp-image]", start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="vorteile" ref={ref} className="py-20 sm:py-28 bg-warm-white overflow-x-clip">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
            Warum Camperio?
          </h2>
          <p className="mt-4 text-lg text-bark max-w-2xl mx-auto">
            Wohnmobil oder Camper mieten in Brandenburg — unkompliziert, persönlich und mit Top-Ausstattung.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {usps.map((usp) => (
            <div
              key={usp.title}
              data-usp-card
              className="bg-white rounded-2xl p-8 shadow-sm border border-sand/50 hover:shadow-md transition-shadow"
            >
              <div className="text-accent mb-4">{usp.icon}</div>
              <h3 className="text-xl font-bold text-charcoal mb-3">{usp.title}</h3>
              <p className="text-bark leading-relaxed">{usp.desc}</p>
            </div>
          ))}
        </div>

        {/* Emotional Image */}
        <div data-usp-image className="relative rounded-2xl overflow-hidden aspect-[21/9]">
          <Image
            src="/images/gallery-08.jpg"
            alt="Kind zeigt auf den Sonnenuntergang aus dem Wohnmobil"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 to-transparent flex items-center">
            <div className="px-8 sm:px-12 max-w-lg">
              <p className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                Unvergessliche Momente für die ganze Familie
              </p>
              <a
                href="#buchung"
                className="inline-block mt-6 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-3 rounded-full transition-colors"
              >
                Urlaub jetzt sichern
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
