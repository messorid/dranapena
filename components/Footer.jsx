"use client";

import Link from "next/link";
import { PHONE_DISPLAY, EMAIL, INSTAGRAM, WA_URL } from "@/lib/contact";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-slate-900 text-slate-300 pt-16 pb-8 px-6 overflow-hidden">
      
      {/* Línea de gradiente superior decorativa */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)] opacity-80"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">

          {/* Columna 1: Marca y Bio */}
          <div className="flex flex-col items-start md:items-start text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
              Dra. Ana Maria Peña
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Especialista en Otorrinolaringología. Atención médica clínica y quirúrgica con enfoque humano y tecnología de vanguardia para el cuidado de tu salud.
            </p>
            {/* Badge sutil */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]"></span>
              Consultas Presenciales
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-semibold mb-6 tracking-wide uppercase text-sm">
              Navegación
            </h4>
            <ul className="space-y-3 w-full max-w-[200px] text-center md:text-left">
              <li>
                <Link href="/" className="inline-block hover:text-[var(--color-primary)] hover:translate-x-1 transition-all duration-300">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#services" className="inline-block hover:text-[var(--color-primary)] hover:translate-x-1 transition-all duration-300">
                  Especialidades
                </Link>
              </li>
              <li>
                <Link href="#about" className="inline-block hover:text-[var(--color-primary)] hover:translate-x-1 transition-all duration-300">
                  Sobre la Doctora
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto (Con iconos y enlaces funcionales) */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-semibold mb-6 tracking-wide uppercase text-sm">
              Contacto
            </h4>
            <ul className="space-y-4 text-sm w-full max-w-[250px]">
              
              {/* Ubicación */}
              <li className="flex items-start justify-center md:justify-start gap-3">
                <svg className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span className="text-slate-400 text-center md:text-left">Atención previa cita en <br/> Caracas y Barinas</span>
              </li>
              
              {/* Teléfono / WhatsApp */}
              <li>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 group">
                  <svg className="w-5 h-5 text-[var(--color-primary)] shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  <span className="text-slate-400 group-hover:text-white transition-colors">{PHONE_DISPLAY}</span>
                </a>
              </li>

              {/* Correo */}
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center justify-center md:justify-start gap-3 group">
                  <svg className="w-5 h-5 text-[var(--color-primary)] shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <span className="text-slate-400 group-hover:text-white transition-colors">{EMAIL}</span>
                </a>
              </li>

              {/* Instagram */}
              <li>
                <a href={`https://instagram.com/${INSTAGRAM.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 group">
                  <svg className="w-5 h-5 text-[var(--color-primary)] shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  <span className="text-slate-400 group-hover:text-white transition-colors">{INSTAGRAM}</span>
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Divider y Copyright (Flex para Desktop, Stack para Móvil) */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-slate-500">
          
          <p className="text-center md:text-left">
            © {currentYear} Dra. Ana Maria Peña. Todos los derechos reservados.
          </p>

          {/* Firma de Agencia Optimizada */}
          <p className="flex items-center gap-1.5">
            Diseñado y desarrollado por{" "}
            <a
              href="https://www.boostori.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white relative group inline-block"
            >
              Boostori
              {/* Subrayado animado para la agencia */}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
}