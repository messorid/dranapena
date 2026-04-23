import Link from "next/link";
import { articles } from "@/lib/articles";
import { SITE_URL } from "@/lib/contact";

export const metadata = {
  title: "Artículos de Otorrinolaringología | Dra. Ana Maria Peña",
  description: "Artículos sobre enfermedades del oído, nariz y garganta escritos por la Dra. Ana Maria Peña, otorrinolaringóloga en Caracas. Información médica actualizada para Venezuela.",
  keywords: ["otorrinolaringología Venezuela", "artículos ORL", "enfermedades oído nariz garganta", "blog otorrino Caracas"],
  alternates: { canonical: `${SITE_URL}/articulos` },
};

const CATEGORY_COLORS = {
  "Nariz y Senos Paranasales": "bg-blue-50 text-blue-700 border-blue-200",
  "Audición": "bg-violet-50 text-violet-700 border-violet-200",
  "Oído Pediátrico": "bg-amber-50 text-amber-700 border-amber-200",
  "Vía Aérea y Sueño": "bg-teal-50 text-teal-700 border-teal-200",
};

function formatDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("es-VE", { year: "numeric", month: "long", day: "numeric" });
}

export default function ArticulosPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative w-full pt-36 pb-20 px-6 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/50 to-transparent" />
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[var(--color-primary)]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-[var(--color-accent)]/5 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-[var(--color-primary)]/30 backdrop-blur-md mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
            <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">Artículos · ORL Venezuela</span>
          </div>
          <h1 className="text-white text-4xl sm:text-5xl font-extrabold leading-tight mb-5 tracking-tight">
            Artículos de Otorrinolaringología
          </h1>
          <p className="text-slate-300 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Información médica actualizada sobre enfermedades del oído, nariz y garganta. Escrita por la Dra. Ana Maria Peña para pacientes en Caracas y Venezuela.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
      </section>

      {/* ── LISTADO ── */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {articles.map((article) => {
              const categoryStyle = CATEGORY_COLORS[article.category] || "bg-slate-50 text-slate-600 border-slate-200";
              return (
                <Link
                  key={article.slug}
                  href={`/articulos/${article.slug}`}
                  className="group block bg-white border border-slate-200 rounded-3xl p-8 hover:border-[var(--color-primary)]/40 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${categoryStyle}`}>
                      {article.category}
                    </span>
                    <span className="text-slate-400 text-xs">{formatDate(article.date)}</span>
                    <span className="text-slate-400 text-xs">· {article.readTime} lectura</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-[var(--color-primary)] transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-slate-500 font-light leading-relaxed mb-5">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold text-sm">
                    Leer artículo
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative w-full py-20 px-6 bg-slate-950 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/40 to-transparent" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            ¿Tienes algún síntoma? Consulta con la especialista
          </h2>
          <p className="text-slate-400 mb-8 font-light">
            La Dra. Ana Maria Peña atiende en Caracas. Agenda por WhatsApp con respuesta rápida.
          </p>
          <a
            href="https://wa.me/584140731821?text=Hola%20Dra.%20Ana%20Maria%2C%20vengo%20de%20su%20sitio%20web%20y%20me%20gustar%C3%ADa%20agendar%20una%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_30px_rgba(255,122,122,0.25)] hover:-translate-y-1"
          >
            Agendar consulta en Caracas
          </a>
        </div>
      </section>
    </main>
  );
}
