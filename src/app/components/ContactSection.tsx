"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-contact-left]", {
        x: -40,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
      gsap.from("[data-contact-right]", {
        x: 40,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="kontakt" ref={ref} className="py-20 sm:py-28 bg-warm-white overflow-x-clip">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
            Standort & Kontakt
          </h2>
          <p className="mt-4 text-lg text-bark">
            Wohnmobil abholen in Musterstadt
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div data-contact-left className="space-y-6">
            <div className="bg-white rounded-2xl p-8 border border-sand/50 shadow-sm">
              <h3 className="text-xl font-bold text-charcoal mb-6">Kontaktdaten</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-medium text-charcoal">Abholort</p>
                    <p className="text-bark">Musterstadt, Brandenburg</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium text-charcoal">E-Mail</p>
                    <a
                      href="mailto:info@example-camper.de"
                      className="text-accent hover:text-accent-hover transition-colors"
                    >
                      info@example-camper.de
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-medium text-charcoal">Übergabe</p>
                    <p className="text-bark">Nach Vereinbarung — persönlich vor Ort</p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#buchung"
              className="block bg-accent hover:bg-accent-hover text-white text-center font-semibold px-8 py-4 rounded-full transition-colors text-lg"
            >
              Jetzt unverbindlich anfragen
            </a>
          </div>

          {/* Map */}
          <div data-contact-right className="rounded-2xl overflow-hidden border border-sand/50 shadow-sm min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9648.37!2d13.7627!3d52.8831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a9c1c0c7b0e0a1%3A0x4a8f7c8d2e1b3c5d!2sAlthuettendorf!5e0!3m2!1sde!2sde!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Standort Althuettendorf"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
