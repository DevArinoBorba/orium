import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import SocialProofToast from './components/SocialProofToast';
import ServiceModal from './components/ServiceModal';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    // Refresh ScrollTrigger calculations after initial paint
    document.fonts.ready.then(() => {
      ScrollTrigger.refresh();
    });
  }, [currentPath]);

  const handleNavigate = (path, anchor) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo(0, 0);
    }

    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (path === currentPath && !anchor) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  let PageComponent = Home;
  if (currentPath === '/sobre') {
    PageComponent = About;
  } else if (currentPath === '/contato') {
    PageComponent = Contact;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#08070c] text-white selection:bg-purple-600/40 selection:text-white relative">
      {/* Procedural Film Grain Overlay */}
      <div className="grain" aria-hidden="true" />

      {/* Fluid Dual-Ring Custom Cursor */}
      <CustomCursor />

      {/* Awwwards Luxury Preloader */}
      <Preloader />

      {/* Fixed Glass Navigation with Top Progress */}
      <Header currentPath={currentPath} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <div className="flex-1">
        <PageComponent
          onNavigate={handleNavigate}
          onSelectService={setSelectedService}
        />
      </div>

      {/* Luxury Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Interactive Elements */}
      <FloatingWhatsApp />
      <SocialProofToast />

      {/* Service Details Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
}

export default App;
