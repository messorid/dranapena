"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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

function formatDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("es-VE", { year: "numeric", month: "long", day: "numeric" });
}

function renderContent(raw) {
  const paragraphs = raw.split("\n\n");
  return paragraphs.map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="text-2xl font-extrabold text-slate-900 mt-10 mb-4 tracking-tight leading-snug">
          {block.slice(3)}
        </h2>
      );
    }
    if (block.startsWith("### ")) {
      return (
        <h3 key={i} className="text-xl font-bold text-slate-800 mt-8 mb-3 tracking-tight">
          {block.slice(4)}
        </h3>
      );
    }
    if (block.startsWith("- ") || block.split("\n").every((l) => l.startsWith("- "))) {
      const items = block.split("\n").filter((l) => l.startsWith("- "));
      return (
        <ul key={i} className="space-y-2 my-5 pl-0">
          {items.map((item, j) => {
            const text = item.slice(2);
            const parts = text.split(/\*\*(.*?)\*\*/g);
            return (
              <li key={j} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[var(--color-primary)]/15 flex items-center justify-center shrink-0 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                </div>
                <span className="text-slate-700 leading-relaxed text-base">
                  {parts.map((p, k) => k % 2 === 1 ? <strong key={k} className="font-semibold text-slate-900">{p}</strong> : p)}
                </span>
              </li>
            );
          })}
        </ul>
      );
    }
    if (/^\d+\. /.test(block) || block.split("\n").every((l) => /^\d+\. /.test(l))) {
      const items = block.split("\n").filter((l) => /^\d+\. /.test(l));
      return (
        <ol key={i} className="space-y-3 my-5 counter-reset-list">
          {items.map((item, j) => {
            const text = item.replace(/^\d+\. /, "");
            const parts = text.split(/\*\*(.*?)\*\*/g);
            return (
              <li key={j} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[var(--color-primary)] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {j + 1}
                </span>
                <span className="text-slate-700 leading-relaxed text-base">
                  {parts.map((p, k) => k % 2 === 1 ? <strong key={k} className="font-semibold text-slate-900">{p}</strong> : p)}
                </span>
              </li>
            );
          })}
        </ol>
      );
    }
    const parts = block.split(/\*\*(.*?)\*\*/g);
    return (
      <p key={i} className="text-slate-700 leading-relaxed text-base md:text-lg my-5 font-light">
        {parts.map((p, k) => k % 2 === 1 ? <strong key={k} className="font-semibold text-slate-900">{p}</strong> : p)}
      </p>
    );
  });
}

const CATEGORY_COLORS = {
  "Nariz y Senos Paranasales": "bg-blue-50 text-blue-700 border-blue-200",
  "Audición": "bg-violet-50 text-violet-700 border-violet-200",
  "Oído Pediátrico": "bg-amber-50 text-amber-700 border-amber-200",
  "Vía Aérea y Sueño": "bg-teal-50 text-teal-700 border-teal-200",
};

export default function ArticleContent({ article, others }) {
  const [heroRef, heroVisible] = useVisible(0.05);
  const [bodyRef, bodyVisible] = useVisible(0.05);

  const categoryStyle = CATEGORY_COLORS[article.category] || "bg-slate-50 text-slate-600 border-slate-200";

  return (
    <main>
      {/* ── HERO ── */}
      <section ref={heroRef} className="relative w-full pt-36 pb-20 px-6 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/50 to-transparent" />
          <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-[var(--color-primary)]/5 rounded-full blur-3xl" />
        </div>
        <div className={`relative z-10 max-w-3xl mx-auto transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8 font-medium flex-wrap">
            <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/articulos" className="hover:text-[var(--color-primary)] transition-colors">Artículos</Link>
            <span>/</span>
            <span className="text-slate-400 truncate max-w-[200px]">{article.title}</span>
          </nav>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${categoryStyle}`}>
              {article.category}
            </span>
            <span className="text-slate-500 text-xs">{formatDate(article.date)}</span>
            <span className="text-slate-500 text-xs">· {article.readTime} lectura</span>
          </div>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6 tracking-tight">
            {article.title}
          </h1>
          <p className="text-slate-300 text-lg font-light leading-relaxed max-w-2xl">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-3 mt-8">
            <div className="w-9 h-9 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Dra. Ana Maria Peña</p>
              <p className="text-slate-400 text-xs">Especialista en Otorrinolaringología · Caracas</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
      </section>

      {/* ── CONTENIDO ── */}
      <section ref={bodyRef} className="w-full py-16 px-6 bg-white">
        <div className={`max-w-3xl mx-auto transition-all duration-1000 ${bodyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="prose-like">
            {renderContent(article.content)}
          </div>

          {/* Inline CTA */}
          <div className="mt-14 bg-slate-950 rounded-3xl px-8 py-10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/50 to-transparent" />
            <p className="text-white font-extrabold text-xl mb-2 tracking-tight">¿Tienes alguno de estos síntomas?</p>
            <p className="text-slate-400 font-light mb-6 text-sm">Consulta con la Dra. Ana Maria Peña en Caracas. Atención especializada ORL.</p>
            <a
              href={waUrl(`Hola Dra. Ana Maria, vengo de su sitio web y leí el artículo "${article.title}". Me gustaría agendar una consulta.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white px-8 py-3.5 rounded-full font-bold transition-all duration-300 hover:-translate-y-1 shadow-[0_0_25px_rgba(255,122,122,0.3)]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.651.854 5.122 2.336 7.18l-1.542 5.632 5.753-1.508A11.968 11.968 0 0012.031 24c6.646 0 12.031-5.385 12.031-12.031C24.062 5.385 18.677 0 12.031 0zm0 22.016c-2.126 0-4.148-.54-5.91-1.503l-.424-.251-3.393.89.907-3.308-.276-.438a9.982 9.982 0 01-1.603-5.375c0-5.545 4.512-10.056 10.056-10.056 5.545 0 10.056 4.512 10.056 10.056s-4.511 10.035-10.056 10.035z"/><path d="M17.512 14.155c-.275-.138-1.625-.803-1.876-.896-.25-.093-.434-.138-.616.138-.184.275-.71.896-.871 1.079-.161.183-.323.206-.598.069-.275-.138-1.16-.428-2.212-1.368-.819-.733-1.371-1.637-1.533-1.913-.162-.275-.017-.424.12-.562.124-.124.275-.321.413-.482.138-.161.183-.275.275-.459.093-.183.047-.344-.022-.482-.07-.138-.617-1.488-.846-2.039-.222-.536-.448-.464-.616-.473-.162-.008-.345-.008-.528-.008-.183 0-.482.069-.733.344-.251.275-.964.941-.964 2.295 0 1.354.987 2.662 1.124 2.845.138.183 1.938 2.957 4.693 4.145.656.283 1.167.452 1.566.578.658.208 1.258.178 1.729.108.528-.079 1.625-.664 1.854-1.308.229-.643.229-1.194.161-1.308-.069-.115-.251-.183-.526-.321z"/></svg>
              Agendar consulta
            </a>
          </div>
        </div>
      </section>

      {/* ── OTROS ARTÍCULOS ── */}
      {others.length > 0 && (
        <section className="w-full py-16 px-6 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-extrabold text-slate-900 mb-8 tracking-tight text-center">Otros artículos</h3>
            <div className="grid md:grid-cols-3 gap-5">
              {others.map((a) => {
                const cs = CATEGORY_COLORS[a.category] || "bg-slate-50 text-slate-600 border-slate-200";
                return (
                  <Link key={a.slug} href={`/articulos/${a.slug}`} className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-[var(--color-primary)]/40 hover:shadow-md transition-all duration-300">
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-3 ${cs}`}>
                      {a.category}
                    </span>
                    <p className="font-bold text-slate-900 text-sm leading-snug group-hover:text-[var(--color-primary)] transition-colors mb-2">
                      {a.title}
                    </p>
                    <p className="text-slate-500 text-xs">{a.readTime} lectura</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
