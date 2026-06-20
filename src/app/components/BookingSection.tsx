"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MultiStepForm from "./MultiStepForm";

gsap.registerPlugin(ScrollTrigger);

export default function BookingSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-booking-content]", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="buchung" ref={ref} className="py-20 sm:py-28 bg-sand/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
            Anfrage senden
          </h2>
          <p className="mt-4 text-lg text-bark">
            In nur 4 Schritten zu Ihrem Wohnmobil-Urlaub
          </p>
        </div>

        {/* Multi-Step Form */}
        <div data-booking-content className="bg-white rounded-2xl border border-sand/50 p-6 sm:p-10 shadow-sm">
          <MultiStepForm />
        </div>
      </div>
    </section>
  );
}
