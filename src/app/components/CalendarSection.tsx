"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CalendarSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-calendar-content]", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
      gsap.from("[data-calendar-cta]", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        delay: 0.3,
        scrollTrigger: { trigger: "[data-calendar-cta]", start: "top 90%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="kalender" ref={ref} className="py-16 sm:py-20 bg-sand/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div data-calendar-content className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
            Direkt buchen
          </h2>
          <p className="mt-4 text-lg text-bark max-w-2xl mx-auto">
            Buchen Sie direkt über den Deutschen Caravan-Verband &mdash; einfach, sicher und transparent.
          </p>
        </div>

        <div className="text-center mt-8" data-calendar-cta>
          <a
            href="https://example-booking.de/booking/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
          >
            Direkt buchen
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
