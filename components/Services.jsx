"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { waUrl } from "@/lib/contact";

const services = [
  {
    title: "Consulta Otorrinolaringológica",
    category: "General",
    description: "Evaluación completa de oído, nariz y garganta para diagnóstico y tratamiento especializado.",
    icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
  },
  {
    title: "Consulta de Oído",
    category: "Oído",
    description: "Tratamiento de infecciones, dolor, pérdida auditiva y otros problemas del oído.",
    icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
  },
  {
    title: "Consulta de Nariz",
    category: "Nariz",
    description: "Atención para sinusitis, congestión nasal, alergias y dificultades respiratorias.",
    icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  },
  {
    title: "Consulta de Garganta",
    category: "Garganta",
    description: "Diagnóstico de dolor de garganta, infecciones, ronquera y problemas al tragar.",
    icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
  },
  {
    title: "Limpieza de Oídos",
    category: "Oído",
    description: "Extracción segura de cerumen para mejorar la audición y evitar molestias.",
    icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
  },
  {
    title: "Evaluación Auditiva",
    category: "Oído",
    description: "Chequeo de la audición para detectar pérdida auditiva y recomendar tratamiento.",
    icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path></svg>
  },
];

const categories = ["Todos", "Oído", "Nariz", "Garganta", "General"];

export default function Services() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Todos");

  // Animación al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Lógica de filtrado
  const filteredServices = activeFilter === "Todos" 
    ? services 
    : services.filter(service => service.category === activeFilter);

  return (
    <section id="services" ref={sectionRef} className="w-full py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className={`text-center mb-10 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <span className="text-[var(--color-secondary)] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Especialidades Médicas
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
            Servicios de Otorrinolaringología
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Atención clínica y quirúrgica especializada para niños y adultos. Selecciona una categoría para explorar.
          </p>
        </div>

        {/* Sistema de Filtros */}
        <div className={`flex overflow-x-auto pb-4 mb-4 -mx-6 px-6 md:mx-0 md:px-0 md:justify-center gap-3 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`snap-center shrink-0 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeFilter === category
                  ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-white shadow-md shadow-[var(--color-primary)]/20"
                  : "bg-white border-slate-200 text-slate-600 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* INDICADOR DE DESPLAZAMIENTO (SOLO MÓVIL) */}
        <div className="flex md:hidden items-center justify-center gap-2 text-[var(--color-secondary)] text-sm mb-6 animate-pulse font-medium">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          <span>Desliza para ver más tratamientos</span>
        </div>

      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex overflow-x-auto gap-6 pb-12 pt-2 px-6 md:px-6 lg:px-8 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:snap-none">
          
          {filteredServices.map((service, index) => (
            <div
              key={service.title} 
              style={{ animationDelay: `${index * 100}ms` }}
              className="group relative bg-white border border-slate-100 rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,122,122,0.2)] overflow-hidden w-[85vw] sm:w-[320px] shrink-0 snap-center md:w-auto md:shrink flex flex-col animate-fade-in-up"
            >
              
              {/* Fondo decorativo hover */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-500 mb-6 shadow-sm shrink-0">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 mb-8 leading-relaxed font-light flex-grow">
                {service.description}
              </p>

              {/* CTA Flotante inferior */}
              <div className="mt-auto pt-4 border-t border-slate-50">
                <Link
                  href={waUrl(`Hola Dra. Ana Maria, vengo de su sitio web y me gustaría agendar una cita para: ${service.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[var(--color-accent)] font-semibold text-sm hover:text-[var(--color-primary)] transition-colors group/link"
                >
                  Agendar consulta 
                  <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </Link>
              </div>

            </div>
          ))}

          {filteredServices.length === 0 && (
            <div className="col-span-full py-12 text-center text-slate-500">
              No hay servicios disponibles en esta categoría actualmente.
            </div>
          )}

        </div>
      </div>
    </section>
  );
}