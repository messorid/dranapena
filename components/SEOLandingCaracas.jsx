"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { waUrl } from "@/lib/contact";

const services = [
  { title: "Consulta ORL General", desc: "Evaluación completa de oído, nariz y garganta.", href: "/servicios/consulta-orl-caracas" },
  { title: "Especialista en Oído", desc: "Infecciones, pérdida auditiva, otitis y cerumen.", href: "/servicios/consulta-oido-caracas" },
  { title: "Nariz y Sinusitis", desc: "Sinusitis, alergias, congestión y dificultad respiratoria.", href: "/servicios/consulta-nariz-caracas" },
  { title: "Garganta y Laringe", desc: "Amigdalitis, ronquera, dolor y dificultad al tragar.", href: "/servicios/consulta-garganta-caracas" },
  { title: "Limpieza de Oídos", desc: "Extracción segura de cerumen con instrumental médico.", href: "/servicios/limpieza-oidos-caracas" },
  { title: "Evaluación Auditiva", desc: "Diagnóstico de pérdida auditiva en niños y adultos.", href: "/servicios/evaluacion-auditiva-caracas" },
];

const stats = [
  { value: "ORL", label: "Especialidad certificada" },
  { value: "UCV", label: "Formación de postgrado" },
  { value: "HUC", label: "Residencia clínica" },
  { value: "100%", label: "Atención dedicada" },
];

function useVisible(threshold = 0.15) {
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

export default function SEOLandingCaracas({ heading, subheading, intro, faqs, waText }) {
  const [heroRef, heroVisible] = useVisible(0.05);
  const [statsRef, statsVisible] = useVisible(0.1);
  const [profileRef, profileVisible] = useVisible(0.1);
  const [servicesRef, servicesVisible] = useVisible(0.1);
  const [faqRef, faqVisible] = useVisible(0.1);
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <main>

      {/* ── HERO PREMIUM ── */}
      <section
        ref={heroRef}
        className="relative w-full min-h-screen flex items-center overflow-hidden bg-slate-950"
      >
        {/* Imagen de fondo con overlay sofisticado */}
        <Image
          src="/images/Drana.jpeg"
          alt={heading}
          fill
          priority
          quality={80}
          className="object-cover object-top opacity-25 md:opacity-35"
        />
        {/* Gradiente lateral desktop / vertical mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950 md:bg-gradient-to-r md:from-slate-950 md:via-slate-950/85 md:to-transparent" />

        {/* Línea decorativa superior */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/50 to-transparent" />

        <div
          className={`relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 pt-36 pb-24 transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="max-w-2xl xl:max-w-3xl">

            {/* Badge premium */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-[var(--color-primary)]/40 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse shadow-[0_0_8px_var(--color-primary)]" />
                <span className="text-white/90 text-xs font-semibold tracking-widest uppercase">Caracas · Venezuela</span>
              </div>
              <div className="h-px w-12 bg-[var(--color-primary)]/40" />
              <span className="text-[var(--color-primary)] text-xs font-semibold tracking-wider uppercase">Especialista ORL</span>
            </div>

            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              {heading}
            </h1>

            <p className="text-slate-300 text-lg md:text-xl lg:text-2xl mb-10 leading-relaxed font-light max-w-xl">
              {subheading}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <a
                href={waUrl(waText)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-[0_0_30px_rgba(255,122,122,0.35)] hover:-translate-y-1 text-base"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.651.854 5.122 2.336 7.18l-1.542 5.632 5.753-1.508A11.968 11.968 0 0012.031 24c6.646 0 12.031-5.385 12.031-12.031C24.062 5.385 18.677 0 12.031 0zm0 22.016c-2.126 0-4.148-.54-5.91-1.503l-.424-.251-3.393.89.907-3.308-.276-.438a9.982 9.982 0 01-1.603-5.375c0-5.545 4.512-10.056 10.056-10.056 5.545 0 10.056 4.512 10.056 10.056s-4.511 10.035-10.056 10.035z"/><path d="M17.512 14.155c-.275-.138-1.625-.803-1.876-.896-.25-.093-.434-.138-.616.138-.184.275-.71.896-.871 1.079-.161.183-.323.206-.598.069-.275-.138-1.16-.428-2.212-1.368-.819-.733-1.371-1.637-1.533-1.913-.162-.275-.017-.424.12-.562.124-.124.275-.321.413-.482.138-.161.183-.275.275-.459.093-.183.047-.344-.022-.482-.07-.138-.617-1.488-.846-2.039-.222-.536-.448-.464-.616-.473-.162-.008-.345-.008-.528-.008-.183 0-.482.069-.733.344-.251.275-.964.941-.964 2.295 0 1.354.987 2.662 1.124 2.845.138.183 1.938 2.957 4.693 4.145.656.283 1.167.452 1.566.578.658.208 1.258.178 1.729.108.528-.079 1.625-.664 1.854-1.308.229-.643.229-1.194.161-1.308-.069-.115-.251-.183-.526-.321z"/></svg>
                Agendar en Caracas
              </a>
              <Link
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 bg-white/8 hover:bg-white/15 border border-white/20 text-white px-8 py-4 rounded-full font-semibold backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 text-base"
              >
                Ver todos los servicios
              </Link>
            </div>

            {/* Mini trust strip */}
            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
              {["Previa cita", "Diagnóstico preciso", "Oído · Nariz · Garganta"].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />
      </section>

      {/* ── STATS BAR ── */}
      <section ref={statsRef} className="relative z-10 w-full bg-slate-900 border-y border-slate-800">
        <div className={`max-w-5xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 ${statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl md:text-3xl font-extrabold text-[var(--color-primary)] mb-1">{s.value}</p>
              <p className="text-slate-400 text-xs uppercase tracking-wider font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PERFIL ── */}
      <section ref={profileRef} className="w-full py-24 md:py-32 px-6 bg-white overflow-hidden">
        <div className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-14 lg:gap-24 items-center transition-all duration-1000 ${profileVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

          {/* Imagen */}
          <div className="relative w-full max-w-md mx-auto md:max-w-none group order-2 md:order-1">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-[var(--color-primary)]/15 to-[var(--color-secondary)]/10 rotate-2 transition-transform duration-500 group-hover:rotate-4" />
            <div className="relative w-full h-[460px] md:h-[580px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
              <Image
                src="/images/Drana.jpeg"
                alt="Dra. Ana Maria Peña — Otorrinolaringóloga en Caracas"
                fill
                quality={90}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
            </div>
            {/* Badge premium */}
            <div className="absolute -bottom-5 left-6 bg-white px-5 py-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm leading-none">Especialista ORL</p>
                <p className="text-slate-400 text-xs mt-0.5">Caracas · Venezuela</p>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="order-1 md:order-2">
            <span className="inline-block text-[var(--color-secondary)] font-semibold tracking-widest uppercase text-xs mb-4 border-b border-[var(--color-secondary)]/30 pb-2">
              Especialista en Caracas
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-slate-900 leading-tight tracking-tight">
              Dra. Ana Maria Peña
            </h2>
            <h3 className="text-xl text-[var(--color-primary)] font-medium mb-6">
              Médico Especialista en Otorrinolaringología
            </h3>
            <p className="text-slate-600 mb-8 text-lg font-light leading-relaxed">{intro}</p>

            <div className="grid grid-cols-2 gap-3 mb-10">
              {["Médico Cirujano (UNERG)", "Especialista ORL (UCV)", "Residencia en HUC", "Consultas en Caracas"].map((item) => (
                <div key={item} className="flex items-center gap-2.5 bg-slate-50 px-4 py-3 rounded-2xl border border-slate-100">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-slate-700 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={waUrl(waText)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg hover:-translate-y-1"
              >
                Agendar Consulta
              </a>
              <Link
                href="/sobre-mi"
                className="inline-flex items-center justify-center gap-2 border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white px-8 py-4 rounded-full font-bold transition-all duration-300"
              >
                Ver Perfil Completo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS EN CARACAS ── */}
      <section id="servicios" ref={servicesRef} className="w-full py-24 md:py-32 px-6 bg-slate-50">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-16">
            <span className="text-[var(--color-secondary)] font-semibold tracking-widest uppercase text-xs mb-4 block">Disponibles en Caracas</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">
              Servicios de Otorrinolaringología
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">
              Atención clínica especializada para niños y adultos. Consulta presencial en Caracas previa cita.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <Link
                key={s.title}
                href={s.href}
                style={{ transitionDelay: `${i * 70}ms` }}
                className="group relative bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-[0_20px_50px_-15px_rgba(255,122,122,0.2)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* Gradiente hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />

                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary)]/8 group-hover:bg-[var(--color-primary)] flex items-center justify-center transition-all duration-500">
                    <svg className="w-5 h-5 text-[var(--color-primary)] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <svg className="w-4 h-4 text-slate-300 group-hover:text-[var(--color-primary)] transition-colors duration-300 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-300">{s.title}</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section ref={faqRef} className="w-full py-24 md:py-28 px-6 bg-white">
        <div className={`max-w-3xl mx-auto transition-all duration-1000 ${faqVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-14">
            <span className="text-[var(--color-accent)] font-semibold tracking-widest uppercase text-xs mb-4 block">Preguntas frecuentes</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Todo lo que necesitas saber
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div key={index} className={`rounded-2xl border transition-all duration-300 ${isActive ? "bg-white border-[var(--color-primary)]/30 shadow-md" : "bg-slate-50 border-slate-200"}`}>
                  <button
                    onClick={() => setActiveIndex(isActive ? null : index)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center group focus:outline-none"
                  >
                    <span className={`font-semibold text-base pr-6 transition-colors ${isActive ? "text-[var(--color-primary)]" : "text-slate-800 group-hover:text-[var(--color-primary)]"}`}>
                      {item.q}
                    </span>
                    <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? "bg-[var(--color-primary)] text-white" : "bg-white border border-slate-200 text-slate-400"}`}>
                      <svg className={`w-4 h-4 transition-transform duration-300 ${isActive ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
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

      {/* ── CTA FINAL PREMIUM ── */}
      <section className="relative w-full py-28 px-6 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/40 to-transparent" />
          <div className="absolute -top-40 left-1/3 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-[var(--color-secondary)]/8 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/15 mb-8">
            <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
            <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">Caracas · Atención Especializada</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Agenda tu consulta<br className="hidden sm:block" /> en Caracas hoy
          </h2>
          <p className="text-slate-400 text-lg mb-10 font-light max-w-xl mx-auto">
            Especialista en oído, nariz y garganta disponible en Caracas. Diagnóstico preciso y atención personalizada.
          </p>
          <a
            href={waUrl(waText)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_40px_rgba(255,122,122,0.3)] hover:-translate-y-1"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.651.854 5.122 2.336 7.18l-1.542 5.632 5.753-1.508A11.968 11.968 0 0012.031 24c6.646 0 12.031-5.385 12.031-12.031C24.062 5.385 18.677 0 12.031 0zm0 22.016c-2.126 0-4.148-.54-5.91-1.503l-.424-.251-3.393.89.907-3.308-.276-.438a9.982 9.982 0 01-1.603-5.375c0-5.545 4.512-10.056 10.056-10.056 5.545 0 10.056 4.512 10.056 10.056s-4.511 10.035-10.056 10.035z"/><path d="M17.512 14.155c-.275-.138-1.625-.803-1.876-.896-.25-.093-.434-.138-.616.138-.184.275-.71.896-.871 1.079-.161.183-.323.206-.598.069-.275-.138-1.16-.428-2.212-1.368-.819-.733-1.371-1.637-1.533-1.913-.162-.275-.017-.424.12-.562.124-.124.275-.321.413-.482.138-.161.183-.275.275-.459.093-.183.047-.344-.022-.482-.07-.138-.617-1.488-.846-2.039-.222-.536-.448-.464-.616-.473-.162-.008-.345-.008-.528-.008-.183 0-.482.069-.733.344-.251.275-.964.941-.964 2.295 0 1.354.987 2.662 1.124 2.845.138.183 1.938 2.957 4.693 4.145.656.283 1.167.452 1.566.578.658.208 1.258.178 1.729.108.528-.079 1.625-.664 1.854-1.308.229-.643.229-1.194.161-1.308-.069-.115-.251-.183-.526-.321z"/></svg>
            Agendar por WhatsApp
          </a>
        </div>
      </section>

    </main>
  );
}
