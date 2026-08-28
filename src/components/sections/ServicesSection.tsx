import React from 'react';
import { FadeIn } from '../ui/FadeIn';

const services = [
  {
    num: "01",
    name: "Creative Development",
    desc: "Building immersive, interactive websites that blend design, animation, 3D, and modern web technologies into distinctive digital experiences."
  },
  {
    num: "02",
    name: "3D & Interactive Web",
    desc: "Creating 3D websites, WebGL experiences, interactive scenes, and animated interfaces that turn products and ideas into engaging experiences."
  },
  {
    num: "03",
    name: "Scrollytelling",
    desc: "Designing scroll-driven experiences with cinematic transitions, animations, and interactive storytelling that guide users through a visual narrative."
  },
  {
    num: "04",
    name: "Full-Stack Development",
    desc: "Developing scalable web applications with robust frontends, complex backends, APIs, databases, authentication, and integrations tailored to business needs."
  },
  {
    num: "05",
    name: "Automation & Systems",
    desc: "Building custom automations, internal tools, workflows, and backend systems that eliminate repetitive work and connect complex business processes."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20 text-[#0C0C0C]">
      <FadeIn y={40}>
        <h2 className="font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28 leading-none">
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col">
        {services.map((service, i) => (
          <FadeIn key={service.num} delay={i * 0.1} className="flex flex-col md:flex-row border-t border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12 last:border-b">
            <div className="md:w-[40%] flex items-start">
              <span className="font-black text-[clamp(3rem,10vw,140px)] leading-none -mt-4">
                {service.num}
              </span>
            </div>
            <div className="md:w-[60%] flex flex-col justify-center mt-4 md:mt-0">
              <h3 className="font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] mb-2 sm:mb-4">
                {service.name}
              </h3>
              <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60">
                {service.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
