"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[var(--color-bg)]">
      
      {/* Background Image optimizado */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-doctor.jpeg" /* Reemplaza con tu ruta real */
          alt="Dra. Ana Maria Peña, Otorrinolaringóloga realizando procedimiento especializado"
          fill
          priority
          quality={75}
          className={`object-cover object-[70%_center] md:object-center transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        {/* Overlay: Ajustado para que oscurezca un poco más el centro en móviles y se lea bien el texto */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/30 md:to-slate-900/20"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        
        {/* Contenedor flex para controlar el centrado en móvil y alineación izquierda en desktop */}
        <div className="max-w-3xl flex flex-col items-center text-center md:items-start md:text-left mt-12 md:mt-0">
          
          {/* Badge de Marca Personal */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-5 md:mb-6">
             <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
             <span className="text-white text-xs md:text-sm font-medium tracking-wide uppercase">Dra. Ana Maria Peña</span>
          </div>

          {/* Heading Principal */}
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.2] mb-4 md:mb-6 tracking-tight">
            Especialista en Otorrinolaringología en <br className="hidden md:block" />
            <span className="text-[var(--color-primary)]">Barinas y Caracas</span>
          </h1>

          {/* Subheading */}
          <p className="text-gray-300 text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed max-w-xl md:max-w-2xl font-light">
            Recupera tu bienestar con un diagnóstico preciso y tratamientos de vanguardia para condiciones de <strong className="text-white font-medium">oído, nariz y garganta</strong>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="https://wa.me/584140731821"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar consulta por WhatsApp con la Dra. Ana Maria"
              className="group flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold transition-all duration-300 shadow-[0_0_15px_rgba(255,122,122,0.3)] hover:shadow-[0_0_25px_rgba(217,108,138,0.5)] hover:-translate-y-1 text-base md:text-lg w-full sm:w-auto"
            >
              Agendar Consulta
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>

            <Link
              href="#services"
              className="flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold backdrop-blur-md transition-all duration-300 hover:-translate-y-1 text-base md:text-lg w-full sm:w-auto"
            >
              Ver Tratamientos
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 md:gap-6 text-sm text-gray-300 w-full">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[var(--color-accent)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>Atención Personalizada</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[var(--color-accent)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>Equipos de Vanguardia</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-[var(--color-bg)] to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}