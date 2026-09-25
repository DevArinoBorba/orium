import React from 'react';
import { Hero } from '../components/Hero';
import { ClientLogos } from '../components/ClientLogos';
import { ServicesShowcase } from '../components/ServicesShowcase';
import { PerformanceCockpit } from '../components/PerformanceCockpit';
import { Methodology } from '../components/Methodology';
import { AuthorityManifesto } from '../components/AuthorityManifesto';
import { Testimonials } from '../components/Testimonials';
import { FAQSection } from '../components/FAQSection';
import { FinalCTA } from '../components/FinalCTA';

export function Home({ onNavigate, onSelectService }) {
  return (
    <main className="overflow-x-clip">
      {/* 1. HERO SECTION */}
      <Hero onNavigate={onNavigate} />

      {/* 2. CLIENT LOGOS SECTION (ONLY LOGOS AS REQUESTED) */}
      <ClientLogos />

      {/* 3. SERVICES SHOWCASE (3D PARALLAX CARDS) */}
      <ServicesShowcase onSelectService={onSelectService} />

      {/* 4. PERFORMANCE COCKPIT & SCALE DASHBOARD */}
      <PerformanceCockpit />

      {/* 5. METHODOLOGY & PROCESS */}
      <Methodology />

      {/* 6. FOUNDER & EDITORIAL MANIFESTO */}
      <AuthorityManifesto />

      {/* 7. TESTIMONIALS & SUCCESS STORIES */}
      <Testimonials />

      {/* 8. FAQ ACCORDION */}
      <FAQSection />

      {/* 9. FINAL HIGH-CONVERSION CTA */}
      <FinalCTA />
    </main>
  );
}

export default Home;
