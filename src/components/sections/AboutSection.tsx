
import { FadeIn } from '../ui/FadeIn';
import { AnimatedText } from '../ui/AnimatedText';
import { ContactButton } from '../ui/ContactButton';
import { ChromaKeyVideo } from '../ui/ChromaKeyVideo';
import aboutVideo from '../../assets/about/aboutsec1.mp4';
import awIcon from '../../assets/about/icons/star-icon.png';
import cdIcon from '../../assets/about/icons/cd-icon.png';
import footballIcon from '../../assets/about/icons/fb-icon.png';
import cursorIcon from '../../assets/about/icons/cursor-icon.png';

interface AboutSectionProps {
  onContactClick: () => void;
}

export function AboutSection({ onContactClick }: AboutSectionProps) {
  return (
    <section id="about" className="min-h-screen px-5 sm:px-8 md:px-10 py-20 relative flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Green Screen Video */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-100">
        <ChromaKeyVideo 
          src={aboutVideo} 
          className="w-full h-full"
          autoPlay 
          loop 
          muted 
          playsInline
        />
      </div>

      {/* Decorative 3D Images */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0">
        <img 
          src={awIcon}
          className="w-[150px] sm:w-[160px] md:w-[210px] pointer-events-none"
          alt="AW icon"
        />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0">
        <img 
          src={footballIcon}
          className="w-[120px] sm:w-[140px] md:w-[180px] pointer-events-none"
          alt="Football icon"
        />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0">
        <img 
          src={cdIcon}
          className="w-[120px] sm:w-[160px] md:w-[210px] pointer-events-none"
          alt="CD icon"
        />
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0">
        <img 
          src={cursorIcon}
          className="w-[130px] sm:w-[170px] md:w-[220px] pointer-events-none"
          alt="3D group"
        />
      </FadeIn>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]">
            About me
          </h2>
        </FadeIn>
        
        <div className="mt-10 sm:mt-14 md:mt-16 flex flex-col items-center">
          <AnimatedText 
            text="With more than five years of experience in development & design, i focus on branding, web design & ui/ux, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"
            className="text-textLight font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)] justify-center"
          />
          
          <div className="mt-16 sm:mt-20 md:mt-24">
            <ContactButton onClick={onContactClick} />
          </div>
        </div>
      </div>
    </section>
  );
}
