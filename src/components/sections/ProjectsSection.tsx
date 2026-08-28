import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from '../ui/LiveProjectButton';

import bkLanding from '../../assets/campaigns/bk-landing.mp4';
import woodArtLanding from '../../assets/campaigns/woodart-concept-landing-page.mp4';
import fmf from '../../assets/campaigns/fmf.png';
import vday from '../../assets/campaigns/vday.png';
import vipPass from '../../assets/campaigns/vip-pass.png';
import cg from '../../assets/campaigns/cg2.mp4';

const projects = [
  {
    num: "01",
    label: "Fintech Platform",
    name: "BankKaro.com",
    media: bkLanding,
    type: "video",
    link: "https://bankkaro.com"
  },
  {
    num: "02",
    label: "In-app Campaign",
    name: "Free Money Fiesta - CashKaro",
    media: fmf,
    type: "image",
    link: "https://cashkaro.com"
  },
  {
    num: "03",
    label: "In-app Campaign",
    name: "Valentine's Day Special - CashKaro",
    media: vday,
    type: "image",
    link: "https://cashkaro.com"
  },
  {
    num: "04",
    label: "In-app Campaign",
    name: "VIP Pass - CashKaro",
    media: vipPass,
    type: "image",
    link: "https://cashkaro.com"
  },
    {
    num: "05",
    label: "Website Concept",
    name: "Woodart Furniture",
    media: woodArtLanding,
    type: "video",
    link: ""
  },
     {
    num: "06",
    label: "Credit Card Discovery Platform",
    name: "Great.Cards (prev. Card Genius)",
    media: cg,
    type: "video",
    link: "https://great.cards"
  }
];

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="projects" className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-30 pt-20 sm:pt-24 md:pt-32 pb-32 px-5 sm:px-8 md:px-10 overflow-clip text-textLight">
      <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28 leading-none">
        Projects
      </h2>
      
      <div ref={containerRef} className="max-w-6xl mx-auto flex flex-col gap-10">
        {projects.map((project, index) => {
          return (
            <ProjectCard 
              key={project.num}
              project={project}
              index={index}
              totalCards={projects.length}
              containerRef={containerRef}
            />
          );
        })}
      </div>
    </section>
  );
}

function ProjectCard({ project, index, totalCards, containerRef }: { project: any; index: number; totalCards: number; containerRef: React.RefObject<HTMLDivElement | null> }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Calculate target scale (e.g. index 0 -> 1 - 3*0.03 = 0.91, index 1 -> 0.94, index 2 -> 0.97, index 3 -> 1)
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  
  // Transform scale based on progress
  const startProgress = index / totalCards;
  const endProgress = (index + 1) / totalCards;
  
  const scale = useTransform(scrollYProgress, [startProgress, endProgress], [1, targetScale]);

  return (
    <div 
      className="h-auto sm:h-[80vh] md:h-[85vh] flex items-center justify-center sticky top-20 sm:top-24 md:top-32 pb-8 sm:pb-0" 
      style={{ top: `calc(clamp(5rem, 15vh, 8rem) + ${index * 20}px)` }}
    >
      <motion.div 
        ref={cardRef}
        style={{ scale }}
        className="w-full bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-2xl sm:rounded-[40px] md:rounded-[60px] p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6 md:gap-8 h-auto sm:h-full max-h-none sm:max-h-[80vh] md:max-h-[85vh]"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="font-black text-[clamp(2.5rem,8vw,100px)] leading-none text-[#D7E2EA]">
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="uppercase text-sm sm:text-base opacity-60 tracking-wider">
                {project.label}
              </span>
              <h3 className="uppercase text-[clamp(1.2rem,3vw,2rem)] font-medium leading-tight">
                {project.name}
              </h3>
            </div>
          </div>
          {project.link && (
            <LiveProjectButton 
              className="hidden sm:block shrink-0" 
              onClick={() => window.open(project.link, '_blank')}
            />
          )}
        </div>
        
        <div className="w-full sm:flex-1 overflow-hidden rounded-xl sm:rounded-[30px] md:rounded-[40px] aspect-video sm:aspect-auto">
          {project.type === 'video' ? (
            <video 
              src={project.media} 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img 
              src={project.media} 
              alt={`${project.name} main view`} 
              className="w-full h-full object-cover"
            />
          )}
        </div>
        {project.link && (
          <div className="sm:hidden mt-2">
            <LiveProjectButton 
              className="w-full text-center" 
              onClick={() => window.open(project.link, '_blank')}
            />
          </div>
        )}
      </motion.div>
    </div>
  );
}
