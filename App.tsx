import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import BackToTop from './components/BackToTop';
import MouseGradient from './components/MouseGradient';
import Lenis from 'lenis';

function App() {
  const lenisRef = useRef<Lenis | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for preloader effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling after loading
    if (isLoading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Animation Frame Loop
    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Anchor Link Interceptor for smooth scroll to sections
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href?.startsWith('#') && href.length > 1) {
          e.preventDefault();
          lenis.scrollTo(href);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Cleanup
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      document.removeEventListener('click', handleAnchorClick);
    };
  }, [isLoading]);

  return (
    <>
      {/* Preloader */}
      <Preloader isLoading={isLoading} />

      {/* Custom Cursor (Desktop only) */}
      <CustomCursor />

      {/* Back to Top Button */}
      <BackToTop />

      {/* Mouse Follower Gradient */}
      <MouseGradient />

      <div className="min-h-screen relative w-full overflow-hidden" style={{ cursor: 'none' }}>
        <div className="bg-grain"></div>
        <Navbar />
        <main className="relative z-10 w-full">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
