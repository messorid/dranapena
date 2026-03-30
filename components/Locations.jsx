"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { waUrl } from "@/lib/contact";

export default function Locations() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Animación suave al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="locations" 
      className="w-full py-24 px-6 bg-slate-50 relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-[var(--color-primary)]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-[var(--color-accent)]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Card Central (Unified CTA) */}
        <div className={`bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 p-8 md:p-14 text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          
          {/* Icono de Ubicación */}
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 rounded-full flex items-center justify-center mb-8">
            <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Atención Presencial en <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]">
              Caracas y Barinas
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            La Dra. Ana Maria Peña ofrece consultas especializadas en ambas ciudades. Escríbenos para conocer la disponibilidad de fechas, horarios y coordinar el centro médico más conveniente para ti.
          </p>

          {/* Chips/Tags de Ciudades */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 font-medium text-sm border border-slate-200">
              📍 Consultas en Caracas
            </span>
            <span className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 font-medium text-sm border border-slate-200">
              📍 Consultas en Barinas
            </span>
            <span className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 font-medium text-sm border border-slate-200">
              🗓️ Previa Cita
            </span>
          </div>

          {/* Botón de Contacto (Con efecto Pulse) */}
          <div className="relative inline-block">
            {/* Efecto de onda detrás del botón */}
            <div className="absolute inset-0 bg-[var(--color-primary)] rounded-full animate-ping opacity-20"></div>
            
            <Link
              href={waUrl('Hola, me gustaría saber la disponibilidad y dónde están atendiendo actualmente para agendar una cita.')}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center gap-3 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white px-8 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_10px_30px_rgba(255,122,122,0.3)] hover:shadow-[0_15px_40px_rgba(217,108,138,0.5)] hover:-translate-y-1 w-full sm:w-auto"
            >
              {/* Icono de WhatsApp genérico usando SVG */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.651.854 5.122 2.336 7.18l-1.542 5.632 5.753-1.508A11.968 11.968 0 0012.031 24c6.646 0 12.031-5.385 12.031-12.031C24.062 5.385 18.677 0 12.031 0zm0 22.016c-2.126 0-4.148-.54-5.91-1.503l-.424-.251-3.393.89.907-3.308-.276-.438a9.982 9.982 0 01-1.603-5.375c0-5.545 4.512-10.056 10.056-10.056 5.545 0 10.056 4.512 10.056 10.056s-4.511 10.035-10.056 10.035z"></path>
                <path d="M17.512 14.155c-.275-.138-1.625-.803-1.876-.896-.25-.093-.434-.138-.616.138-.184.275-.71 .896-.871 1.079-.161.183-.323.206-.598.069-.275-.138-1.16-.428-2.212-1.368-.819-.733-1.371-1.637-1.533-1.913-.162-.275-.017-.424.12-.562.124-.124.275-.321.413-.482.138-.161.183-.275.275-.459.093-.183.047-.344-.022-.482-.07-.138-.617-1.488-.846-2.039-.222-.536-.448-.464-.616-.473-.162-.008-.345-.008-.528-.008-.183 0-.482.069-.733.344-.251.275-.964.941-.964 2.295 0 1.354.987 2.662 1.124 2.845.138.183 1.938 2.957 4.693 4.145.656.283 1.167.452 1.566.578.658.208 1.258.178 1.729.108.528-.079 1.625-.664 1.854-1.308.229-.643.229-1.194.161-1.308-.069-.115-.251-.183-.526-.321z"></path>
              </svg>
              Coordinar Cita por WhatsApp
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}