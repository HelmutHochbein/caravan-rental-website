"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const specs = [
  { value: "599", unit: "cm", label: "Länge" },
  { value: "232", unit: "cm", label: "Breite" },
  { value: "309", unit: "cm", label: "Höhe" },
  { value: "140", unit: "PS", label: "Leistung" },
  { value: "3.500", unit: "kg", label: "Zul. Gesamtgewicht" },
  { value: "4+1", unit: "", label: "Schlafplätze" },
];

const highlights = [
  { icon: "☀️", label: "Solarpanel" },
  { icon: "🚲", label: "Fahrradträger" },
  { icon: "📱", label: "Apple CarPlay" },
  { icon: "❄️", label: "Kühlschrank" },
  { icon: "🔥", label: "Heizung" },
  { icon: "🛡️", label: "Beheizte Tanks" },
  { icon: "🧳", label: "Heckgarage" },
  { icon: "📷", label: "Rückfahrkamera" },
  { icon: "💡", label: "LED-Lichtkonzept" },
  { icon: "🚿", label: "Bad & Dusche" },
];

const vehicleImages = [
  { src: "/images/vehicle-front.jpg", alt: "Sun Living A 60 SP Frontansicht" },
  { src: "/images/vehicle-side.jpg", alt: "Sun Living A 60 SP Seitenansicht" },
  { src: "/images/vehicle-rear.jpg", alt: "Sun Living A 60 SP Heckansicht mit Fahrradträger" },
];

export default function VehicleSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-spec-card]", {
        x: -60,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        scrollTrigger: { trigger: "[data-spec-grid]", start: "top 80%" },
      });
      gsap.from("[data-highlight]", {
        x: 60,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        scrollTrigger: { trigger: "[data-highlight-grid]", start: "top 80%" },
      });
      gsap.from("[data-vehicle-img]", {
        x: -40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.2,
        scrollTrigger: { trigger: "[data-vehicle-images]", start: "top 80%" },
      });
      gsap.from("[data-vehicle-cta]", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: { trigger: "[data-vehicle-cta]", start: "top 90%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="fahrzeug" ref={ref} className="py-20 sm:py-28 bg-warm-white overflow-x-clip">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
            Sun Living A 60 SP
          </h2>
          <p className="mt-4 text-lg text-bark max-w-2xl mx-auto">
            Alkoven-Wohnmobil Baujahr 2026 &mdash; Ihr Camper für Brandenburg, familienfreundlich und voll ausgestattet.
          </p>
        </div>

        {/* Specs Grid */}
        <div data-spec-grid className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {specs.map((spec) => (
            <div
              key={spec.label}
              data-spec-card
              className="bg-white rounded-2xl p-5 text-center shadow-sm border border-sand/50 hover:shadow-md transition-shadow"
            >
              <p className="text-2xl sm:text-3xl font-bold text-charcoal">
                {spec.value}
                <span className="text-sm font-normal text-bark ml-1">{spec.unit}</span>
              </p>
              <p className="text-sm text-bark mt-1">{spec.label}</p>
            </div>
          ))}
        </div>

        {/* Highlights Grid */}
        <div data-highlight-grid className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-16">
          {highlights.map((item) => (
            <div
              key={item.label}
              data-highlight
              className="flex items-center gap-3 bg-sand/40 rounded-xl px-4 py-3"
            >
              <span className="text-2xl" role="img" aria-hidden="true">{item.icon}</span>
              <span className="text-sm font-medium text-charcoal">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Vehicle Photos */}
        <div data-vehicle-images className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vehicleImages.map((img) => (
            <div
              key={img.src}
              data-vehicle-img
              className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="#buchung"
            data-vehicle-cta
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold text-lg transition-colors group"
          >
            Dieses Wohnmobil anfragen
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
