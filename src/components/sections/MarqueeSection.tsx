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
        className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0 pointer-events-none"
      />
    );
  }

  return (
    <img 
      key={`${prefix}-${index}`}
      src={src} 
      alt="Marquee item" 
      loading="lazy"
      className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0 pointer-events-none"
    />
  );
};

function useSwipeable(rowRef: React.RefObject<HTMLDivElement | null>) {
  const dragOffset = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const lastDragOffset = useRef(0);
  const directionLocked = useRef<'horizontal' | 'vertical' | null>(null);

  // Apply transform directly to the DOM element (avoids React state re-render lag)
  const applyOffset = (baseTransform: string) => {
    if (rowRef.current) {
      rowRef.current.style.transform = baseTransform;
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
    lastDragOffset.current = dragOffset.current;
    directionLocked.current = null; // reset direction lock
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;

    const dx = e.touches[0].clientX - startX.current;
    const dy = e.touches[0].clientY - startY.current;

    // Lock direction after a small movement threshold
    if (directionLocked.current === null && (Math.abs(dx) > 5 || Math.abs(dy) > 5)) {
      directionLocked.current = Math.abs(dx) > Math.abs(dy) ? 'horizontal' : 'vertical';
    }

    // If vertical, let browser handle native scroll
    if (directionLocked.current === 'vertical') {
      isDragging.current = false;
      return;
    }

    // Horizontal swipe — prevent page scroll and update drag
    if (directionLocked.current === 'horizontal') {
      e.preventDefault();
      dragOffset.current = lastDragOffset.current + dx;
    }
  };

  const onTouchEnd = () => {
    isDragging.current = false;
    directionLocked.current = null;
  };

  // Mouse handlers
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    lastDragOffset.current = dragOffset.current;
    e.preventDefault();
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

  return { dragOffset, isDragging, applyOffset, onTouchStart, onTouchMove, onTouchEnd, onMouseDown };
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
      if (section) {
        const sectionTop = section.offsetTop;
        scrollOffset.current = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      }

      if (row1Ref.current) {
        row1Ref.current.style.transform = `translateX(${scrollOffset.current - 200 + row1Swipe.dragOffset.current}px)`;
      }
      if (row2Ref.current) {
        row2Ref.current.style.transform = `translateX(${-(scrollOffset.current - 200) + row2Swipe.dragOffset.current}px)`;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section id="marquee-section" className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-3">
      <div 
        ref={row1Ref}
        className="flex gap-3 whitespace-nowrap select-none"
        style={{ 
          willChange: 'transform',
          cursor: 'grab',
          touchAction: 'pan-y',
        }}
        onTouchStart={row1Swipe.onTouchStart}
        onTouchMove={row1Swipe.onTouchMove}
        onTouchEnd={row1Swipe.onTouchEnd}
        onMouseDown={row1Swipe.onMouseDown}
      >
        {row1.map((src, i) => renderMedia(src, i, 'row1'))}
      </div>
      <div 
        ref={row2Ref}
        className="flex gap-3 whitespace-nowrap select-none"
        style={{ 
          willChange: 'transform',
          cursor: 'grab',
          touchAction: 'pan-y',
        }}
        onTouchStart={row2Swipe.onTouchStart}
        onTouchMove={row2Swipe.onTouchMove}
        onTouchEnd={row2Swipe.onTouchEnd}
        onMouseDown={row2Swipe.onMouseDown}
      >
        {row2.map((src, i) => renderMedia(src, i, 'row2'))}
      </div>
    </section>
  );
}
