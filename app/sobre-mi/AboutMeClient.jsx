// app/sobre-mi/AboutMeClient.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const academicTimeline = [
  {
    year: "2017",
    title: "Título de Médico Cirujano",
    institution: "Universidad Nacional Experimental Rómulo Gallegos (UNERG)",
    description: "Formación de base con enfoque en medicina integral y social.",
  },
  {
    year: "2021",
    title: "Especialización en Otorrinolaringología",
    institution: "Universidad Central de Venezuela (UCV)",
    description: "Postgrado cursado con distinción académica.",
  },
  {
    year: "2021-2023",
    title: "Práctica Clínica y Residencia",
    institution: "Hospital Universitario de Caracas (HUC)",
    description: "Atención especializada en uno de los centros de salud más exigentes del país.",
  },
  {
    year: "Actualidad",
    title: "Práctica Privada",
    institution: "Barinas y Caracas",
    description: "Atención profesional, cercana y de vanguardia para pacientes de ambas ciudades.",
  },
];

export default function AboutMeClient() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <main 
      ref={sectionRef}
      className="relative w-full min-h-screen pt-32 pb-24 md:pb-32 px-6 bg-[var(--color-bg)] overflow-hidden"
    >
      <div className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-start transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>

        {/* Columna Izquierda: Retrato Profesional */}
        <div className="relative w-full max-w-md mx-auto md:max-w-none group order-2 md:order-1 sticky top-32">
          <div className="absolute -inset-6 bg-[var(--color-secondary)]/10 rounded-[2.5rem] transform rotate-3 transition-transform duration-500 group-hover:rotate-6"></div>
          
          <div className="relative w-full h-[500px] md:h-[650px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 bg-white">
            <Image
              src="/images/hero-doctor.jpeg" 
              alt="Dra. Ana Maria Peña, Otorrinolaringóloga"
              fill
              quality={95}
              sizes="(max-w-768px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="absolute -bottom-6 -right-4 md:right-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow">
            <div className="bg-[var(--color-primary)]/10 p-3 rounded-full text-[var(--color-primary)]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div>
              <p className="text-slate-900 font-bold leading-none text-lg">100%</p>
              <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mt-1">Atención<br/>Dedicada</p>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Contenido Narrativo y Timeline */}
        <div className="flex flex-col order-1 md:order-2">
          
          <nav className="flex text-sm text-slate-500 mb-6 font-medium">
            <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-800">Sobre Mí</span>
          </nav>

          <span className="text-[var(--color-secondary)] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Conoce a tu Especialista
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-slate-900 leading-tight tracking-tight">
            Dra. Ana Maria Peña
          </h1>

          <div className="space-y-6 text-slate-600 mb-14 md:text-lg font-light leading-relaxed max-w-2xl">
            <p>
              Soy la Dra. Ana Maria Peña, médico cirujano apasionada por la <strong className="font-semibold text-slate-800">otorrinolaringología</strong>. Mi verdadera vocación es ayudarte a recuperar tu bienestar, abordando cada condición de oído, nariz y garganta con un enfoque integral que combina la precisión diagnóstica con la calidez humana.
            </p>
            <p>
              Creo firmemente que la medicina debe ser tanto avanzada como cercana. Por eso, me mantengo en constante actualización académica y tecnológica, pero mi mayor prioridad siempre será escucharte con atención, entender tus inquietudes y diseñarte un tratamiento personalizado y efectivo que mejore tu calidad de vida de manera real.
            </p>
          </div>

          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-[var(--color-primary)] pl-4">
              Trayectoria y Formación Académica
            </h2>
            
            <div className="space-y-10 relative pl-10">
              <div className="absolute left-3.5 top-0 w-0.5 h-full bg-slate-100 rounded-full"></div>

              {academicTimeline.map((item, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -left-10 top-1.5 w-7 h-7 rounded-full bg-white border-2 border-[var(--color-secondary)]/30 group-hover:border-[var(--color-primary)] transition-colors duration-300 flex items-center justify-center">
                     <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-secondary)] group-hover:bg-[var(--color-primary)] transition-colors"></div>
                  </div>
                  
                  <div>
                    <span className="text-sm font-semibold text-[var(--color-primary)] mb-1 block">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-700 font-medium text-sm mt-1 mb-1.5">
                      {item.institution}
                    </p>
                    <p className="text-slate-500 text-sm font-light max-w-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
             <Link
              href="https://wa.me/584140731821?text=Hola%20Dra.%20Ana%20Maria,%20vengo%20de%20su%20sitio%20web%20y%20me%20gustaría%20agendar%20una%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto text-center"
            >
              Agendar Consulta
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}