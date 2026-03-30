"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { waUrl } from "@/lib/contact";

export default function AboutDoctor() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Efecto para la animación al hacer scroll (Intersection Observer)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Solo animar una vez
        }
      },
      { threshold: 0.15 } // Se activa cuando el 15% de la sección es visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative w-full py-20 md:py-32 px-6 bg-slate-50 overflow-hidden"
    >
      <div className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>

        {/* Columna Izquierda: Imagen */}
        <div className="relative w-full max-w-md mx-auto md:max-w-none group">

          {/* Elemento decorativo detrás de la imagen */}
          <div className="absolute -inset-4 md:-inset-6 bg-[var(--color-secondary)]/10 rounded-[2.5rem] transform rotate-3 transition-transform duration-500 group-hover:rotate-6"></div>

          {/* Contenedor de la imagen */}
          <div className="relative w-full h-[450px] md:h-[550px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50">
            <Image
              src="/images/Drana.jpeg"
              alt="Dra. Ana Maria Peña, Especialista en Otorrinolaringología"
              fill
              quality={75}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
          </div>

          {/* Badge Flotante */}
          <div className="absolute -bottom-6 -right-4 md:right-8 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow">
            <div className="bg-[var(--color-primary)]/10 p-3 rounded-full text-[var(--color-primary)]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div>
              <p className="text-slate-900 font-bold leading-none text-lg">100%</p>
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mt-1">Atención<br/>Dedicada</p>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Contenido y Textos */}
        <div className="flex flex-col justify-center mt-8 md:mt-0">
          
          {/* Eyebrow / Etiqueta superior */}
          <span className="text-[var(--color-secondary)] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Conoce a tu Especialista
          </span>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-slate-900 leading-tight">
            Dra. Ana Maria Peña
          </h2>

          {/* Subtitle */}
          <h3 className="text-xl md:text-2xl text-[var(--color-primary)] font-medium mb-6">
            Especialista en Otorrinolaringología
          </h3>

          {/* Description */}
          <div className="space-y-4 text-slate-600 mb-8 md:text-lg font-light leading-relaxed">
            <p>
              Médico especialista en el diagnóstico y tratamiento de enfermedades del <strong className="font-semibold text-slate-800">oído, nariz y garganta</strong>, ofreciendo atención especializada y personalizada en Barinas y Caracas.
            </p>
            <p>
              Su enfoque combina una sólida experiencia clínica, tecnología médica de vanguardia y, sobre todo, un trato humano y cercano para brindar soluciones efectivas que mejoren tu calidad de vida.
            </p>
          </div>

          {/* Credentials - Diseño de tarjetas limpias */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {[
              "Médico Cirujano",
              "Especialista en ORL",
              "Atención en Caracas",
              "Atención en Barinas"
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-sm border border-slate-100">
                <div className="bg-[var(--color-accent)]/10 p-1.5 rounded-full text-[var(--color-accent)] shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="text-slate-700 font-medium text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>

          {/* CTAs (Principal y Secundario) */}
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            
            {/* CTA Principal: WhatsApp */}
            <a
              href={waUrl('Hola Dra. Ana Maria, vengo de su sitio web y quisiera consultar.')}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(255,122,122,0.4)] hover:-translate-y-1 w-full sm:w-auto text-center text-lg md:text-base lg:text-lg"
            >
              Consultar por WhatsApp
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>

            {/* AÑADIDO: CTA Secundario: Ver Perfil Completo */}
            <Link
              href="/sobre-mi"
              className="group inline-flex items-center justify-center gap-2 bg-white border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 w-full sm:w-auto text-center text-lg md:text-base lg:text-lg"
            >
              Ver Perfil Completo
              <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transform transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}