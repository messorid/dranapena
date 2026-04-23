"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { waUrl } from "@/lib/contact";

function useVisible(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

export default function SEOServiceCaracas({
  heading,
  subheading,
  description,
  conditions,
  benefits,
  faqs,
  waText,
  relatedServices,
}) {
  const [heroRef, heroVisible] = useVisible(0.05);
  const [contentRef, contentVisible] = useVisible(0.1);
  const [faqRef, faqVisible] = useVisible(0.1);
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <main>

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative w-full pt-36 pb-20 px-6 bg-slate-950 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/50 to-transparent" />
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[var(--color-primary)]/5 rounded-full blur-3xl" />
        </div>

        <div className={`relative z-10 max-w-4xl mx-auto transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium">
            <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/otorrinolaringologo-en-caracas" className="hover:text-[var(--color-primary)] transition-colors">Caracas</Link>
            <span>/</span>
            <span className="text-slate-400">{heading}</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-[var(--color-primary)]/30 backdrop-blur-md mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
            <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">Servicio · Caracas</span>
          </div>

          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            {heading}
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-light max-w-2xl mb-10 leading-relaxed">
            {subheading}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={waUrl(waText)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-[0_0_30px_rgba(255,122,122,0.3)] hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.651.854 5.122 2.336 7.18l-1.542 5.632 5.753-1.508A11.968 11.968 0 0012.031 24c6.646 0 12.031-5.385 12.031-12.031C24.062 5.385 18.677 0 12.031 0zm0 22.016c-2.126 0-4.148-.54-5.91-1.503l-.424-.251-3.393.89.907-3.308-.276-.438a9.982 9.982 0 01-1.603-5.375c0-5.545 4.512-10.056 10.056-10.056 5.545 0 10.056 4.512 10.056 10.056s-4.511 10.035-10.056 10.035z"/><path d="M17.512 14.155c-.275-.138-1.625-.803-1.876-.896-.25-.093-.434-.138-.616.138-.184.275-.71.896-.871 1.079-.161.183-.323.206-.598.069-.275-.138-1.16-.428-2.212-1.368-.819-.733-1.371-1.637-1.533-1.913-.162-.275-.017-.424.12-.562.124-.124.275-.321.413-.482.138-.161.183-.275.275-.459.093-.183.047-.344-.022-.482-.07-.138-.617-1.488-.846-2.039-.222-.536-.448-.464-.616-.473-.162-.008-.345-.008-.528-.008-.183 0-.482.069-.733.344-.251.275-.964.941-.964 2.295 0 1.354.987 2.662 1.124 2.845.138.183 1.938 2.957 4.693 4.145.656.283 1.167.452 1.566.578.658.208 1.258.178 1.729.108.528-.079 1.625-.664 1.854-1.308.229-.643.229-1.194.161-1.308-.069-.115-.251-.183-.526-.321z"/></svg>
              Agendar esta consulta
            </a>
            <Link
              href="/otorrinolaringologo-en-caracas"
              className="inline-flex items-center justify-center gap-2 bg-white/8 border border-white/15 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/15"
            >
              Ver todos los servicios
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
      </section>

      {/* ── CONTENIDO ── */}
      <section ref={contentRef} className="w-full py-20 md:py-28 px-6 bg-white">
        <div className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-16 transition-all duration-1000 ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

          {/* Condiciones que trata */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
              ¿Qué condiciones se tratan?
            </h2>
            <p className="text-slate-500 mb-7 font-light">{description}</p>
            <ul className="space-y-3">
              {conditions.map((c) => (
                <li key={c} className="flex items-start gap-3 bg-slate-50 rounded-2xl px-4 py-3 border border-slate-100">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-slate-700 font-medium text-sm leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Por qué elegir + imagen */}
          <div>
            <div className="relative w-full h-64 md:h-80 rounded-3xl overflow-hidden mb-7 shadow-lg">
              <Image
                src="/images/Drana.jpeg"
                alt="Dra. Ana Maria Peña — Especialista ORL Caracas"
                fill
                quality={80}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-bold text-sm">Dra. Ana Maria Peña</p>
                <p className="text-white/70 text-xs">Especialista ORL · Caracas</p>
              </div>
            </div>

            <h3 className="text-xl font-extrabold text-slate-900 mb-4 tracking-tight">
              ¿Por qué elegir a la Dra. Peña?
            </h3>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-slate-600 text-sm font-light leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section ref={faqRef} className="w-full py-20 px-6 bg-slate-50">
        <div className={`max-w-3xl mx-auto transition-all duration-1000 ${faqVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">Preguntas frecuentes</h2>
            <p className="text-slate-500 font-light">Todo lo que necesitas saber antes de tu consulta.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div key={index} className={`rounded-2xl border transition-all duration-300 ${isActive ? "bg-white border-[var(--color-primary)]/30 shadow-md" : "bg-white border-slate-200"}`}>
                  <button onClick={() => setActiveIndex(isActive ? null : index)} className="w-full text-left px-6 py-5 flex justify-between items-center group focus:outline-none">
                    <span className={`font-semibold text-base pr-6 transition-colors ${isActive ? "text-[var(--color-primary)]" : "text-slate-800 group-hover:text-[var(--color-primary)]"}`}>{item.q}</span>
                    <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? "bg-[var(--color-primary)] text-white" : "bg-slate-100 text-slate-400"}`}>
                      <svg className={`w-4 h-4 transition-transform duration-300 ${isActive ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="px-6 pb-6 text-slate-600 font-light leading-relaxed">{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SERVICIOS RELACIONADOS ── */}
      {relatedServices?.length > 0 && (
        <section className="w-full py-16 px-6 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-extrabold text-slate-900 mb-8 tracking-tight text-center">Otros servicios en Caracas</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {relatedServices.map((s) => (
                <Link key={s.href} href={s.href} className="group bg-slate-50 hover:bg-[var(--color-primary)]/5 border border-slate-200 hover:border-[var(--color-primary)]/30 rounded-2xl px-5 py-4 transition-all duration-300">
                  <p className="font-semibold text-slate-800 group-hover:text-[var(--color-primary)] text-sm transition-colors">{s.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="relative w-full py-20 px-6 bg-slate-950 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/40 to-transparent" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            Agenda tu {heading.toLowerCase()} en Caracas
          </h2>
          <p className="text-slate-400 mb-8 font-light">
            Respuesta rápida por WhatsApp. Atención personalizada de la Dra. Ana Maria Peña.
          </p>
          <a
            href={waUrl(waText)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_30px_rgba(255,122,122,0.25)] hover:-translate-y-1"
          >
            Agendar por WhatsApp
          </a>
        </div>
      </section>

    </main>
  );
}
