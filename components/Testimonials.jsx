"use client";

import { useEffect, useRef, useState } from "react";

// Enriquecemos los datos añadiendo el "tratamiento" para dar más contexto a los nuevos pacientes
const testimonials = [
  {
    name: "María G.",
    treatment: "Problema de Oído",
    text: "Excelente atención. La doctora explicó todo con claridad y me ayudó a resolver mi problema de oído rápidamente. Transmite mucha paz.",
  },
  {
    name: "Carlos R.",
    treatment: "Tratamiento de Sinusitis",
    text: "Muy profesional. Fui por un problema de sinusitis crónico y el tratamiento fue efectivo desde el primer momento. 100% recomendada.",
  },
  {
    name: "Andrea P.",
    treatment: "Chequeo General",
    text: "Me sentí muy cómoda en la consulta. Atención humana, equipos modernos y un diagnóstico preciso. Es difícil encontrar médicos así hoy en día.",
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Animación al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading Header */}
        <div className={`text-center mb-16 md:mb-20 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <span className="text-[var(--color-secondary)] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Historias Reales
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
            Opiniones de Pacientes
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            La salud y tranquilidad de nuestros pacientes es la mayor prioridad. Conoce las experiencias de quienes ya han confiado en la Dra. Ana Maria Peña.
          </p>
        </div>

        {/* Grid de Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`relative bg-white border border-slate-100 rounded-[2rem] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-15px_rgba(255,122,122,0.15)] transition-all duration-700 hover:-translate-y-2 flex flex-col ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
            >
              
              {/* Comillas Decorativas de Fondo */}
              <svg className="absolute top-6 right-8 w-16 h-16 text-[var(--color-primary)] opacity-10" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>

              {/* Estrellas (SVG reales) */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Texto de la Reseña */}
              <p className="text-slate-600 mb-8 italic leading-relaxed text-lg flex-grow z-10 relative">
                "{item.text}"
              </p>

              {/* Información del Paciente (Avatar + Nombre + Etiqueta) */}
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-50">
                
                {/* Avatar generado con la inicial */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
                  <span className="text-[var(--color-accent)] font-bold text-lg">
                    {item.name.charAt(0)}
                  </span>
                </div>
                
                <div>
                  <p className="font-bold text-slate-900 leading-tight">
                    {item.name}
                  </p>
                  <p className="text-xs font-medium text-[var(--color-secondary)] uppercase tracking-wide mt-1">
                    {item.treatment}
                  </p>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}