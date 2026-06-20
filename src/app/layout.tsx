import type { Metadata, Viewport } from "next";
import { Geist, Caveat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.example.com"),
  title: "Wohnmobil mieten in Brandenburg | Camperio - Alkoven für Familien",
  description:
    "Sun Living A 60 SP mieten in Musterstadt (Musterregion). Modernes Alkoven-Wohnmobil für 5 Personen mit Solar, CarPlay & persönlicher Einweisung. Jetzt anfragen!",
  keywords: [
    "Wohnmobil mieten Brandenburg",
    "Camper mieten Brandenburg",
    "Wohnmobil mieten Berlin",
    "Alkoven Wohnmobil mieten",
    "Wohnmobilvermietung Brandenburg",
    "Familien Wohnmobil mieten",
    "Wohnmobil 5 Personen",
  ],
  openGraph: {
    title: "Wohnmobil mieten in Brandenburg | Camperio",
    description:
      "Sun Living A 60 SP mieten in Musterstadt. Alkoven-Wohnmobil für 5 Personen.",
    type: "website",
    locale: "de_DE",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630, alt: "Camperio Wohnmobil am See" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Camperio - Wohnmobilvermietung",
  url: "https://your-domain.example.com",
  image: "https://your-domain.example.com/images/hero.jpg",
  description:
    "Wohnmobilvermietung in Musterstadt (Musterregion/Brandenburg). Sun Living A 60 SP Alkoven für Familien.",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Musterstadt",
    addressRegion: "Brandenburg",
    addressCountry: "DE",
  },
  areaServed: [
    { "@type": "State", name: "Brandenburg" },
    { "@type": "City", name: "Berlin" },
    { "@type": "AdministrativeArea", name: "Musterregion" },
    { "@type": "AdministrativeArea", name: "Uckermark" },
  ],
  email: "info@example-camper.de",
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Vehicle",
      name: "Sun Living A 60 SP",
      vehicleConfiguration: "Alkoven",
      numberOfPassengers: 5,
      modelDate: "2026",
      manufacturer: { "@type": "Organization", name: "Sun Living" },
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${geistSans.variable} ${caveat.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
