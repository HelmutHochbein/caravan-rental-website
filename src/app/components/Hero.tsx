"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Respect users who prefer reduced motion: keep the poster frame, no loop.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      video.removeAttribute("autoplay");
      video.pause();
      return;
    }

    // Muted + playsInline autoplay is allowed on every modern browser
    // (incl. iOS Safari); if it's ever blocked we simply keep the poster.
    video.play().catch(() => {});
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[560px] overflow-hidden flex items-center justify-center">
      {/* Background video with poster fallback */}
      <video
        ref={videoRef}
        src="/videos/hero.mp4"
        poster="/images/hero-start-frame.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />

      {/* Gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/60" />

      {/* Headline + CTAs */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pb-16">
        <h1
          className="hero-rise text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight drop-shadow-lg"
          style={{ animationDelay: "0.1s" }}
        >
          Wohnmobil mieten
          <br />
          <span className="text-amber">in Brandenburg</span>
        </h1>
        <p
          className="hero-rise mt-6 text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow"
          style={{ animationDelay: "0.3s" }}
        >
          Ihr Familien-Alkoven ab Musterregion &mdash; Sun&nbsp;Living&nbsp;A&nbsp;60&nbsp;SP
          für bis zu 5 Personen mit persönlicher Einweisung.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://example-booking.de/booking/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-rise bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:shadow-lg hover:shadow-accent/30 inline-flex items-center justify-center gap-2"
            style={{ animationDelay: "0.5s" }}
          >
            Verfügbarkeit prüfen
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
          <a
            href="#fahrzeug"
            className="hero-rise bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full text-lg transition-all border border-white/30"
            style={{ animationDelay: "0.62s" }}
          >
            Fahrzeug entdecken
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <svg className="w-6 h-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
