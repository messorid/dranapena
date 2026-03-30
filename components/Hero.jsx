"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { waUrl } from "@/lib/contact";

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
          /* En móvil enfocamos arriba al centro para que la doctora brille, en PC centrado normal */
          className={`object-cover object-[center_top] md:object-center transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {/* OVERLAY CORREGIDO Y LIMPIO */}
        {/* En Móvil: Transparente arriba (deja ver foto), oscuro abajo (legibilidad de texto). 
            En Desktop (md:): Oscuro a la izquierda, transparente a la derecha. */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/60 to-slate-900/95 md:bg-gradient-to-r md:from-slate-900/95 md:via-slate-900/80 md:to-transparent"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        
        <div className="max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl flex flex-col items-center text-center md:items-start md:text-left pt-20 md:pt-0">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 shadow-lg">
             <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse shadow-[0_0_8px_var(--color-primary)]"></span>
             <span className="text-white text-xs md:text-sm font-semibold tracking-wider uppercase drop-shadow-md">Dra. Ana Maria Peña</span>
          </div>

          {/* Heading Principal */}
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.15] mb-5 md:mb-6 tracking-tight drop-shadow-lg">
            Especialista en Otorrinolaringología en <br className="hidden lg:block" />
            <span className="text-[var(--color-primary)] drop-shadow-md">Barinas y Caracas</span>
          </h1>

          {/* Subheading */}
          <p className="text-slate-100 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 leading-relaxed font-light drop-shadow-md max-w-[95%] sm:max-w-full">
            Recupera tu bienestar con un diagnóstico preciso y tratamientos de vanguardia para condiciones de <strong className="text-white font-medium">oído, nariz y garganta</strong>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-4 lg:gap-5 justify-center md:justify-start">
            <Link
              href={waUrl('Hola Dra. Ana Maria, vengo de su sitio web y quisiera agendar una consulta.')}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white px-8 py-4 lg:px-10 lg:py-5 rounded-full font-bold transition-all duration-300 shadow-[0_0_20px_rgba(255,122,122,0.4)] hover:-translate-y-1 text-base md:text-lg w-full sm:w-auto"
            >
              Agendar Consulta
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>

            <Link
              href="#services"
              className="flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-full font-bold backdrop-blur-md transition-all duration-300 hover:-translate-y-1 text-base md:text-lg w-full sm:w-auto shadow-lg"
            >
              Ver Tratamientos
            </Link>
          </div>

          {/* Trust Indicators - SIN CAJAS, TEXTO LIMPIO CON SOMBRAS */}
          <div className="mt-10 md:mt-12 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 md:gap-8 text-sm md:text-base text-white w-full">
            <div className="flex items-center gap-3">
              {/* Cambié el color del icono a Primario para que resalte más sin caja */}
              <svg className="w-5 h-5 md:w-6 md:h-6 text-[var(--color-primary)] shrink-0 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span className="font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-wide">Atención Personalizada</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-[var(--color-primary)] shrink-0 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span className="font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-wide">Equipos de Vanguardia</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade - Mucho más sutil para no manchar blanco */}
      <div className="absolute bottom-0 left-0 w-full h-16 md:h-32 bg-gradient-to-t from-[var(--color-bg)] to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}