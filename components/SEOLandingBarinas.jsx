"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { waUrl } from "@/lib/contact";

const services = [
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      </svg>
    ),
    title: "Problemas de Oído",
    desc: "Infecciones, pérdida auditiva, cerumen, otitis y dolor de oído.",
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Nariz y Senos Paranasales",
    desc: "Sinusitis, congestión nasal, alergias y dificultad para respirar.",
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Garganta y Laringe",
    desc: "Amigdalitis, ronquera, dolor al tragar e infecciones recurrentes.",
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Limpieza de Oídos",
    desc: "Extracción segura de cerumen con instrumental médico especializado.",
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    title: "Evaluación Auditiva",
    desc: "Diagnóstico de pérdida auditiva en niños y adultos.",
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Consulta General ORL",
    desc: "Evaluación completa del oído, nariz y garganta.",
  },
];

const steps = [
  { n: "1", title: "Escríbenos por WhatsApp", desc: "Cuéntanos tu caso y agenda tu cita de forma rápida y directa." },
  { n: "2", title: "Confirma tu cita en Barinas", desc: "Coordinamos día, hora y consultorio más conveniente para ti." },
  { n: "3", title: "Ven a tu consulta", desc: "Recibe atención especializada, diagnóstico preciso y tratamiento personalizado." },
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

export default function SEOLandingBarinas({ heading, subheading, intro, faqs, waText }) {
  const [heroRef, heroVisible] = useVisible(0.1);
  const [profileRef, profileVisible] = useVisible(0.1);
  const [servicesRef, servicesVisible] = useVisible(0.1);
  const [stepsRef, stepsVisible] = useVisible(0.1);
  const [faqRef, faqVisible] = useVisible(0.1);
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <main>

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative w-full min-h-[70vh] flex items-center overflow-hidden bg-slate-900"
      >
        <Image
          src="/images/hero-doctor.jpeg"
          alt={heading}
          fill
          priority
          quality={70}
          className="object-cover object-[center_top] md:object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/70 to-slate-900/95 md:bg-gradient-to-r md:from-slate-900/95 md:via-slate-900/75 md:to-slate-900/30" />

        <div
          className={`relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 pt-32 pb-20 transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="max-w-2xl flex flex-col items-center text-center md:items-start md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
              <span className="text-white text-xs font-semibold tracking-wider uppercase">Barinas, Venezuela</span>
            </div>

            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-5 tracking-tight">
              {heading}
            </h1>

            <p className="text-slate-200 text-lg md:text-xl mb-8 leading-relaxed font-light">
              {subheading}
            </p>

            <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-4">
              <a
                href={waUrl(waText)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-[0_0_20px_rgba(255,122,122,0.4)] hover:-translate-y-1 text-base"
              >
                Agendar Consulta en Barinas
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
              <Link
                href="/#services"
                className="flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-full font-bold backdrop-blur-md transition-all duration-300 hover:-translate-y-1 text-base"
              >
                Ver Tratamientos
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />
      </section>

      {/* ── PERFIL ── */}
      <section
        ref={profileRef}
        className="relative w-full py-20 md:py-28 px-6 bg-white overflow-hidden"
      >
        <div className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-1000 ${profileVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="relative w-full max-w-md mx-auto md:max-w-none group order-2 md:order-1">
            <div className="absolute -inset-4 bg-[var(--color-secondary)]/10 rounded-[2.5rem] rotate-3 transition-transform duration-500 group-hover:rotate-6" />
            <div className="relative w-full h-[420px] md:h-[520px] rounded-3xl overflow-hidden shadow-xl border border-white/50">
              <Image
                src="/images/hero-doctor.jpeg"
                alt="Dra. Ana Maria Peña — Otorrinolaringóloga en Barinas"
                fill
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 md:right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
              <div className="bg-[var(--color-primary)]/10 p-2.5 rounded-full text-[var(--color-primary)]">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <p className="text-slate-900 font-bold leading-none">Especialista</p>
                <p className="text-slate-500 text-xs uppercase tracking-wider mt-1">ORL · Barinas</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <span className="text-[var(--color-secondary)] font-semibold tracking-wider uppercase text-sm mb-3 block">
              Tu especialista en Barinas
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 leading-tight">
              Dra. Ana Maria Peña
            </h2>
            <h3 className="text-xl text-[var(--color-primary)] font-medium mb-6">
              Médico Especialista en Otorrinolaringología
            </h3>
            <p className="text-slate-600 mb-6 text-lg font-light leading-relaxed">
              {intro}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {["Médico Cirujano (UNERG)", "Especialista ORL (UCV)", "Residencia HUC Caracas", "Consultas en Barinas"].map((item) => (
                <li key={item} className="flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-2xl border border-slate-100">
                  <div className="bg-[var(--color-accent)]/10 p-1.5 rounded-full text-[var(--color-accent)] shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-slate-700 font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={waUrl(waText)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:-translate-y-1"
              >
                Consultar por WhatsApp
              </a>
              <Link
                href="/sobre-mi"
                className="inline-flex items-center justify-center gap-2 border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Ver Perfil Completo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section ref={servicesRef} className="w-full py-20 md:py-28 px-6 bg-slate-50">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-14">
            <span className="text-[var(--color-secondary)] font-semibold tracking-wider uppercase text-sm mb-3 block">
              Tratamientos disponibles en Barinas
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Servicios de Otorrinolaringología
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg font-light">
              Atención clínica especializada para niños y adultos en Barinas. Consulta presencial previa cita.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                style={{ transitionDelay: `${i * 80}ms` }}
                className="group bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(255,122,122,0.2)] hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-500 mb-5">
                  {s.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CÓMO AGENDAR ── */}
      <section ref={stepsRef} className="w-full py-20 md:py-28 px-6 bg-white">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${stepsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-14">
            <span className="text-[var(--color-secondary)] font-semibold tracking-wider uppercase text-sm mb-3 block">
              Simple y rápido
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              ¿Cómo agendar tu cita en Barinas?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-extrabold text-2xl flex items-center justify-center mb-5 shadow-lg shadow-[var(--color-primary)]/25">
                  {s.n}
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={waUrl(waText)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(255,122,122,0.3)] hover:-translate-y-1"
            >
              Agendar ahora
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section ref={faqRef} className="w-full py-20 md:py-28 px-6 bg-slate-50">
        <div className={`max-w-3xl mx-auto transition-all duration-1000 ${faqVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="text-center mb-14">
            <span className="text-[var(--color-accent)] font-semibold tracking-wider uppercase text-sm mb-3 block">
              Preguntas frecuentes
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Todo lo que necesitas saber
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl border transition-all duration-300 shadow-sm ${isActive ? "border-[var(--color-primary)]/30" : "border-slate-200"}`}
                >
                  <button
                    onClick={() => setActiveIndex(isActive ? null : index)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center group focus:outline-none"
                  >
                    <span className={`font-semibold text-base pr-6 transition-colors ${isActive ? "text-[var(--color-primary)]" : "text-slate-800 group-hover:text-[var(--color-primary)]"}`}>
                      {item.q}
                    </span>
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? "bg-[var(--color-primary)]/10" : "bg-slate-50"}`}>
                      <svg className={`w-5 h-5 transition-transform duration-300 ${isActive ? "rotate-180 text-[var(--color-primary)]" : "text-slate-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* ── CTA FINAL ── */}
      <section className="relative w-full py-24 px-6 overflow-hidden bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-secondary)] to-rose-400">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-white/20 text-white text-sm font-semibold tracking-wider uppercase mb-6 border border-white/30">
            Barinas · Atención Especializada
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            ¿Tienes un problema de oído, nariz o garganta?
          </h2>
          <p className="text-white/90 text-lg mb-10 font-light max-w-xl mx-auto">
            Agenda tu consulta con la Dra. Ana Maria Peña en Barinas. Respuesta rápida y atención personalizada.
          </p>
          <a
            href={waUrl(waText)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[var(--color-primary)] px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all duration-300 shadow-xl hover:-translate-y-1"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.651.854 5.122 2.336 7.18l-1.542 5.632 5.753-1.508A11.968 11.968 0 0012.031 24c6.646 0 12.031-5.385 12.031-12.031C24.062 5.385 18.677 0 12.031 0zm0 22.016c-2.126 0-4.148-.54-5.91-1.503l-.424-.251-3.393.89.907-3.308-.276-.438a9.982 9.982 0 01-1.603-5.375c0-5.545 4.512-10.056 10.056-10.056 5.545 0 10.056 4.512 10.056 10.056s-4.511 10.035-10.056 10.035z" />
              <path d="M17.512 14.155c-.275-.138-1.625-.803-1.876-.896-.25-.093-.434-.138-.616.138-.184.275-.71.896-.871 1.079-.161.183-.323.206-.598.069-.275-.138-1.16-.428-2.212-1.368-.819-.733-1.371-1.637-1.533-1.913-.162-.275-.017-.424.12-.562.124-.124.275-.321.413-.482.138-.161.183-.275.275-.459.093-.183.047-.344-.022-.482-.07-.138-.617-1.488-.846-2.039-.222-.536-.448-.464-.616-.473-.162-.008-.345-.008-.528-.008-.183 0-.482.069-.733.344-.251.275-.964.941-.964 2.295 0 1.354.987 2.662 1.124 2.845.138.183 1.938 2.957 4.693 4.145.656.283 1.167.452 1.566.578.658.208 1.258.178 1.729.108.528-.079 1.625-.664 1.854-1.308.229-.643.229-1.194.161-1.308-.069-.115-.251-.183-.526-.321z" />
            </svg>
            Agendar Cita por WhatsApp
          </a>
        </div>
      </section>

    </main>
  );
}
