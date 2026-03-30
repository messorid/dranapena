"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { waUrl } from "@/lib/contact";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-white/90 backdrop-blur-sm shadow-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">

        {/* Logo y Marca */}
        <Link href="/" className="flex items-center gap-3 group relative z-50">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border border-slate-100 shadow-sm group-hover:shadow-md transition-shadow bg-white">
            <Image
              src="/images/logo.png" 
              alt="Logo Dra Ana Maria Peña"
              fill
              sizes="40px" /* <-- AÑADIDO: Optimización de rendimiento de Next.js */
              className="object-cover"
            />
          </div>
          <span className="font-bold text-slate-900 text-lg md:text-xl tracking-tight group-hover:text-[var(--color-primary)] transition-colors duration-300">
            Dra. Ana Maria Peña
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          {[
            { name: "Inicio", href: "/" },
            { name: "Especialidades", href: "#services" },
            { name: "Sobre la Doctora", href: "/sobre-mi" },
            { name: "FAQ", href: "#faq" }
          ].map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="relative group text-slate-600 hover:text-[var(--color-primary)] transition-colors duration-300"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* CTA Desktop */}
        <div className="hidden md:block">
          <Link
            href={waUrl('Hola Dra. Ana Maria, quisiera agendar una consulta.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[var(--color-secondary)] transition-all duration-300 shadow-[0_4px_14px_rgba(255,122,122,0.3)] hover:shadow-[0_6px_20px_rgba(217,108,138,0.4)] hover:-translate-y-0.5"
          >
            Agendar Cita
          </Link>
        </div>

        {/* Botón Hamburguesa (Móvil) */}
        <button
          className="md:hidden relative z-50 p-2 text-slate-600 hover:text-[var(--color-primary)] transition-colors focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Alternar menú"
        >
          <div className="w-6 h-6 flex items-center justify-center relative">
            <span className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 delay-100' : '-translate-y-2'}`}></span>
            <span className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 delay-100' : 'translate-y-2'}`}></span>
          </div>
        </button>
      </div>

      {/* Menú Móvil Desplegable */}
      <div 
        className={`md:hidden absolute top-0 left-0 w-full bg-white shadow-xl transition-all duration-500 ease-in-out origin-top ${
          isOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-0 pointer-events-none'
        }`}
      >
        <div className="px-6 pt-24 pb-8 flex flex-col gap-2">
          {[
            { name: "Inicio", href: "/" },
            { name: "Especialidades", href: "#services" },
            { name: "Sobre la Doctora", href: "/sobre-mi" },
            { name: "Preguntas Frecuentes", href: "#faq" }
          ].map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-slate-800 font-bold text-lg py-3 border-b border-slate-100 hover:text-[var(--color-primary)] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <Link
            href={waUrl('Hola Dra. Ana Maria, quisiera agendar una consulta.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-6 flex justify-center items-center gap-2 bg-[var(--color-primary)] text-white px-6 py-4 rounded-full font-bold shadow-lg"
          >
            Agendar por WhatsApp
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </Link>
        </div>
      </div>
    </header>
  );
}