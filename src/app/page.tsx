import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import VehicleSection from "./components/VehicleSection";
import CalendarSection from "./components/CalendarSection";
import Gallery from "./components/Gallery";
import UspSection from "./components/UspSection";
import BookingSection from "./components/BookingSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <VehicleSection />
        <CalendarSection />
        <Gallery />
        <UspSection />
        <BookingSection />
        <ContactSection />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
