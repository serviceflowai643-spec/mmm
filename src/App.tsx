import React, { useState } from 'react';
import { IntroLoader } from './components/IntroLoader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { TeamSection } from './components/TeamSection';
import { GallerySection } from './components/GallerySection';
import { InstagramSection } from './components/InstagramSection';
import { ReviewsSection } from './components/ReviewsSection';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActionButton } from './components/FloatingActionButton';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [preselectedBarber, setPreselectedBarber] = useState<string | undefined>(undefined);

  const scrollToBooking = (serviceId?: string, barberId?: string) => {
    if (serviceId) setPreselectedService(serviceId);
    if (barberId) setPreselectedBarber(barberId);

    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#090909] text-[#FAFAFA] antialiased selection:bg-[#C9A227] selection:text-[#090909]">
      {/* Intro Loader Opening Experience */}
      {showIntro && <IntroLoader onComplete={() => setShowIntro(false)} />}

      {/* Main App Layout */}
      {!showIntro && (
        <>
          <Navbar onOpenBooking={() => scrollToBooking()} />
          <main>
            <Hero onOpenBooking={() => scrollToBooking()} />
            <Marquee />
            <AboutSection />
            <ServicesSection onSelectService={(serviceId) => scrollToBooking(serviceId, undefined)} />
            <TeamSection onSelectBarber={(barberId) => scrollToBooking(undefined, barberId)} />
            <GallerySection />
            <InstagramSection />
            <ReviewsSection />
            <BookingSection initialServiceId={preselectedService} initialBarberId={preselectedBarber} />
            <ContactSection />
          </main>
          <Footer />
          <FloatingActionButton onOpenBooking={() => scrollToBooking()} />
        </>
      )}
    </div>
  );
}
