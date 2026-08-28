import { useState, useEffect, useCallback } from 'react'
import { LoaderContext } from './context/LoaderContext'
import { HeroSection } from './components/sections/HeroSection'
import { MarqueeSection } from './components/sections/MarqueeSection'
import { AboutSection } from './components/sections/AboutSection'
import { ServicesSection } from './components/sections/ServicesSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { ContactSidebar } from './components/ui/ContactSidebar'
import { EarthLoader } from './components/ui/EarthLoader'

function App() {
  const [loaded, setLoaded] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openContact = useCallback(() => setSidebarOpen(true), []);
  const closeContact = useCallback(() => setSidebarOpen(false), []);

  useEffect(() => {
    // Minimum display time so the loader animation is visible
    const MIN_LOADER_MS = 2000;
    const start = Date.now();

    const checkAssets = () => {
      // Grab all images and videos currently in the DOM
      const images = Array.from(document.querySelectorAll('img'));
      const videos = Array.from(document.querySelectorAll('video'));

      const imagePromises = images.map(img => {
        if (img.complete && img.naturalHeight > 0) return Promise.resolve();
        return new Promise<void>((resolve) => {
          img.addEventListener('load', () => resolve(), { once: true });
          img.addEventListener('error', () => resolve(), { once: true });
        });
      });

      const videoPromises = videos.map(video => {
        if (video.readyState >= 3) return Promise.resolve();
        return new Promise<void>((resolve) => {
          video.addEventListener('canplaythrough', () => resolve(), { once: true });
          video.addEventListener('error', () => resolve(), { once: true });
          // Fallback timeout for videos that may stall
          setTimeout(() => resolve(), 8000);
        });
      });

      Promise.all([...imagePromises, ...videoPromises]).then(() => {
        const elapsed = Date.now() - start;
        const remaining = Math.max(0, MIN_LOADER_MS - elapsed);
        setTimeout(() => setLoaded(true), remaining);
      });
    };

    // Wait a tick so the DOM has rendered the sections
    requestAnimationFrame(() => {
      requestAnimationFrame(checkAssets);
    });

    // Safety net: force-dismiss loader after 12 seconds no matter what
    const safetyTimeout = setTimeout(() => setLoaded(true), 12000);
    return () => clearTimeout(safetyTimeout);
  }, []);

  return (
    <LoaderContext.Provider value={loaded}>
      <div className={`loader-overlay ${loaded ? 'loaded' : ''}`}>
        <EarthLoader />
      </div>

      <main className="w-full overflow-x-clip">
        <HeroSection onContactClick={openContact} />
        <MarqueeSection />
        <AboutSection onContactClick={openContact} />
        <ServicesSection />
        <ProjectsSection />
      </main>

      <ContactSidebar open={sidebarOpen} onClose={closeContact} />
    </LoaderContext.Provider>
  )
}

export default App
