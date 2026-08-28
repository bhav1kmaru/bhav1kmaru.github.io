import { useRef, useCallback } from 'react';
import { FadeIn } from '../ui/FadeIn';
import { Magnet } from '../ui/Magnet';
import { ContactButton } from '../ui/ContactButton';
import bvkImage from '../../assets/hero/bvk.png';
import bvkCallImage from '../../assets/hero/bvk-call.png';

interface HeroSectionProps {
  onContactClick: () => void;
}

export function HeroSection({ onContactClick }: HeroSectionProps) {
  const heroImgRef = useRef<HTMLImageElement>(null);

  const handleContactEnter = useCallback(() => {
    if (heroImgRef.current) heroImgRef.current.src = bvkCallImage;
  }, []);

  const handleContactLeave = useCallback(() => {
    if (heroImgRef.current) heroImgRef.current.src = bvkImage;
  }, []);

  return (
    <section className="h-[100dvh] flex flex-col overflow-x-clip relative">
      <nav className="flex justify-between px-6 md:px-10 pt-6 md:pt-8 w-full z-20">
        {['About', 'Projects'].map((item) => (
          <FadeIn key={item} delay={0} y={-20} as="a" href={`#${item.toLowerCase()}`} className="text-textLight font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">
            {item}
          </FadeIn>
        ))}
        <FadeIn delay={0} y={-20}>
          <button
            onClick={onContactClick}
            className="text-textLight font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 bg-transparent border-none cursor-pointer"
          >
            Contact
          </button>
        </FadeIn>
      </nav>

      <div className="flex-1 flex flex-col relative z-20">
        <div className="overflow-hidden mt-6 sm:mt-4 md:-mt-5">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[11vw] sm:text-[12vw] md:text-[13vw] lg:text-[14vw] text-center">
              Hi, i&apos;m BHAVIK
            </h1>
          </FadeIn>
        </div>

        <div className="flex-1 flex justify-between items-end pb-24 sm:pb-8 md:pb-10 px-6 md:px-10 w-full z-20 relative">
          <FadeIn delay={0.35} y={20} className="w-1/2">
            <p className="text-textLight font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)] max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
              Full Stack Developer, Designer, Tech Advisor.
              I create unforgettable web experiences.
            </p>
          </FadeIn>
          <FadeIn delay={0.5} y={20} className="flex justify-end w-1/2">
            <ContactButton 
              onClick={onContactClick} 
              onMouseEnter={handleContactEnter}
              onMouseLeave={handleContactLeave}
            />
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
        <Magnet padding={150} strength={3}>
          <img
            ref={heroImgRef}
            src={bvkImage}
            alt="Bvk"
            className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] object-cover pointer-events-none transition-opacity duration-300"
          />
        </Magnet>
      </FadeIn>
    </section>
  );
}
