"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { waUrl } from "@/lib/contact";

export default function ContactCTA() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Animación al hacer scroll
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
      className="relative w-full py-24 px-6 overflow-hidden bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-rose-400"
    >
      {/* Elementos decorativos de fondo para dar profundidad */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl"></div>
      </div>

      <div className={`relative z-10 max-w-4xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>

        {/* Etiqueta superior */}
        <span className="inline-block py-1 px-4 rounded-full bg-white/20 text-white text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm border border-white/30">
          Empieza tu recuperación
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
          Agenda tu consulta <br className="hidden sm:block" /> hoy mismo
        </h2>

        {/* Text */}
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Atención especializada en oído, nariz y garganta en Caracas y Barinas. 
          Da el primer paso para recuperar tu bienestar con un diagnóstico profesional y humano.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          
          <Link
            href={waUrl('Hola Dra. Ana Maria, vengo de su sitio web y deseo agendar una consulta.')}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)] hover:-translate-y-1 w-full sm:w-auto"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.651.854 5.122 2.336 7.18l-1.542 5.632 5.753-1.508A11.968 11.968 0 0012.031 24c6.646 0 12.031-5.385 12.031-12.031C24.062 5.385 18.677 0 12.031 0zm0 22.016c-2.126 0-4.148-.54-5.91-1.503l-.424-.251-3.393.89.907-3.308-.276-.438a9.982 9.982 0 01-1.603-5.375c0-5.545 4.512-10.056 10.056-10.056 5.545 0 10.056 4.512 10.056 10.056s-4.511 10.035-10.056 10.035z"></path>
              <path d="M17.512 14.155c-.275-.138-1.625-.803-1.876-.896-.25-.093-.434-.138-.616.138-.184.275-.71 .896-.871 1.079-.161.183-.323.206-.598.069-.275-.138-1.16-.428-2.212-1.368-.819-.733-1.371-1.637-1.533-1.913-.162-.275-.017-.424.12-.562.124-.124.275-.321.413-.482.138-.161.183-.275.275-.459.093-.183.047-.344-.022-.482-.07-.138-.617-1.488-.846-2.039-.222-.536-.448-.464-.616-.473-.162-.008-.345-.008-.528-.008-.183 0-.482.069-.733.344-.251.275-.964.941-.964 2.295 0 1.354.987 2.662 1.124 2.845.138.183 1.938 2.957 4.693 4.145.656.283 1.167.452 1.566.578.658.208 1.258.178 1.729.108.528-.079 1.625-.664 1.854-1.308.229-.643.229-1.194.161-1.308-.069-.115-.251-.183-.526-.321z"></path>
            </svg>
            Agendar por WhatsApp
          </Link>

        </div>

        {/* Extra confianza */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-sm font-medium text-white/80">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            Respuesta rápida
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            Atención personalizada
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            Consulta segura
          </span>
        </div>

      </div>
    </section>
  );
}