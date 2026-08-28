import { useEffect, useRef } from 'react';

import bkLanding from '../../assets/campaigns/bk-landing.mp4';
import portalLanding from '../../assets/campaigns/portal-landing-page2.mp4';
import cg from '../../assets/campaigns/cg2.mp4';
import orbit from '../../assets/campaigns/orbit.mp4';
import woodArtLanding from '../../assets/campaigns/woodart-concept-landing-page.mp4';
import fmf from '../../assets/campaigns/fmf.png';
import vday from '../../assets/campaigns/vday.png';
import vipPass from '../../assets/campaigns/vip-pass.png';

const row1Media = [
  bkLanding,
  portalLanding,
  fmf, orbit
];

const row2Media = [
  vday,
  woodArtLanding,
  vipPass,
  cg
];

// Triple the arrays for seamless loop
const row1 = [...row1Media, ...row1Media, ...row1Media];
const row2 = [...row2Media, ...row2Media, ...row2Media];

const renderMedia = (src: string, index: number, prefix: string) => {
  const isVideo = src.endsWith('.mp4');
  
  if (isVideo) {
    return (
      <video
        key={`${prefix}-${index}`}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-[280px] h-[180px] md:w-[420px] md:h-[270px] rounded-2xl object-cover shrink-0 pointer-events-none"
      />
    );
  }

  return (
    <img 
      key={`${prefix}-${index}`}
      src={src} 
      alt="Marquee item" 
      loading="lazy"
      className="w-[280px] h-[180px] md:w-[420px] md:h-[270px] rounded-2xl object-cover shrink-0 pointer-events-none"
    />
  );
};

function useSwipeable(rowRef: React.RefObject<HTMLDivElement | null>) {
  const dragOffset = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const lastDragOffset = useRef(0);

  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
    lastDragOffset.current = dragOffset.current;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const dx = e.touches[0].clientX - startX.current;
    dragOffset.current = lastDragOffset.current + dx;
  };

  const onTouchEnd = () => {
    isDragging.current = false;
  };

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    lastDragOffset.current = dragOffset.current;
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const diff = e.clientX - startX.current;
      dragOffset.current = lastDragOffset.current + diff;
    };

    const onMouseUp = () => {
      isDragging.current = false;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return { dragOffset, isDragging, onTouchStart, onTouchMove, onTouchEnd, onMouseDown };
}

export function MarqueeSection() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const scrollOffset = useRef(0);
  const row1Swipe = useSwipeable(row1Ref);
  const row2Swipe = useSwipeable(row2Ref);

  useEffect(() => {
    const section = document.getElementById('marquee-section');
    let rafId: number;

    const tick = () => {
      if (section && window.innerWidth >= 768) { // Only calculate on desktop
        const sectionTop = section.offsetTop;
        scrollOffset.current = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      }

      if (row1Ref.current && window.innerWidth >= 768) {
        row1Ref.current.style.transform = `translateX(${scrollOffset.current - 200 + row1Swipe.dragOffset.current}px)`;
      }
      if (row2Ref.current && window.innerWidth >= 768) {
        row2Ref.current.style.transform = `translateX(${-(scrollOffset.current - 200) + row2Swipe.dragOffset.current}px)`;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section id="marquee-section" className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-3">
      {/* DESKTOP MARQUEE (Scroll Parallax + Mouse Drag) */}
      <div className="hidden md:flex flex-col gap-3">
        <div 
          ref={row1Ref}
          className="flex gap-3 whitespace-nowrap select-none"
          style={{ willChange: 'transform', cursor: 'grab' }}
          onMouseDown={row1Swipe.onMouseDown}
          onDragStart={(e) => e.preventDefault()}
        >
          {row1.map((src, i) => renderMedia(src, i, 'desktop-row1'))}
        </div>
        <div 
          ref={row2Ref}
          className="flex gap-3 whitespace-nowrap select-none"
          style={{ willChange: 'transform', cursor: 'grab' }}
          onMouseDown={row2Swipe.onMouseDown}
          onDragStart={(e) => e.preventDefault()}
        >
          {row2.map((src, i) => renderMedia(src, i, 'desktop-row2'))}
        </div>
      </div>

      {/* MOBILE MARQUEE (Native Swipe Carousel, No Scroll Parallax) */}
      <div className="flex md:hidden flex-col gap-3">
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pl-5 pr-5">
          {row1.map((src, i) => (
            <div key={`mobile-row1-${i}`} className="snap-center shrink-0">
              {renderMedia(src, i, 'mobile-row1')}
            </div>
          ))}
        </div>
        <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pl-5 pr-5">
          {row2.map((src, i) => (
            <div key={`mobile-row2-${i}`} className="snap-center shrink-0">
              {renderMedia(src, i, 'mobile-row2')}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
