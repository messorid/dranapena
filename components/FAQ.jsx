"use client";

import { useState, useRef, useEffect } from "react";

const faqs = [
  {
    question: "¿Cuándo debo acudir a un otorrinolaringólogo?",
    answer:
      "Debes acudir si presentas dolor de oído, congestión nasal persistente, sinusitis, dolor de garganta frecuente, ronquera o problemas auditivos que afecten tu calidad de vida.",
  },
  {
    question: "¿Qué trata un otorrinolaringólogo?",
    answer:
      "Es el especialista médico encargado del diagnóstico y tratamiento clínico o quirúrgico de enfermedades del oído, nariz, senos paranasales, faringe, laringe y estructuras relacionadas de la cabeza y el cuello.",
  },
  {
    question: "¿Realizan limpieza de oídos?",
    answer:
      "Sí, realizamos extracción de cerumen impactado y limpieza de oídos de forma segura, utilizando instrumental médico especializado para evitar lesiones y mejorar la audición de inmediato.",
  },
  {
    question: "¿Atienden en Caracas y Barinas?",
    answer:
      "Sí, la Dra. Ana Maria Peña ofrece consultas presenciales en ambas ciudades. Escríbenos para confirmar la disponibilidad de fechas en tu ciudad.",
  },
  {
    question: "¿Cómo puedo agendar una consulta?",
    answer:
      "Puedes agendar tu cita de manera rápida y directa a través de WhatsApp haciendo clic en los botones de contacto disponibles en esta página. Nuestro equipo te responderá a la brevedad.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  // Animación de entrada general para mantener la coherencia
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
    <section id="faq"
      ref={sectionRef} 
      className="w-full py-24 px-6 bg-slate-50 relative overflow-hidden"
    >
      {/* Detalle decorativo de fondo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-secondary)]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className={`max-w-3xl mx-auto relative z-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-[var(--color-accent)] font-semibold tracking-wider uppercase text-sm mb-3 block">
            Aclara tus dudas
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Encuentra respuestas rápidas sobre nuestras consultas, procedimientos y disponibilidad. Si tienes otra duda, contáctanos sin compromiso.
          </p>
        </div>

        {/* Contenedor de FAQ Items */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-md ${
                  isActive ? "border-[var(--color-primary)]/30" : "border-slate-200"
                }`}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isActive}
                  className="w-full text-left px-6 py-5 flex justify-between items-center group focus:outline-none"
                >
                  <span 
                    className={`font-semibold text-base md:text-lg pr-6 transition-colors duration-300 ${
                      isActive ? "text-[var(--color-primary)]" : "text-slate-800 group-hover:text-[var(--color-primary)]"
                    }`}
                  >
                    {item.question}
                  </span>
                  
                  {/* Icono animado */}
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-[var(--color-primary)]/10' : 'bg-slate-50 group-hover:bg-[var(--color-primary)]/10'}`}>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isActive ? "rotate-180 text-[var(--color-primary)]" : "text-slate-400 group-hover:text-[var(--color-primary)]"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* Answer Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-slate-600 font-light leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}