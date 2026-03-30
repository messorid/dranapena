"use client";

import { waUrl } from "@/lib/contact";

export default function WhatsAppFloat() {
  return (
    <a
      href={waUrl("Hola Dra. Ana Maria, vengo de su sitio web y me gustaría agendar una cita.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar cita por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white pl-4 pr-5 py-3 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 group"
    >
      {/* Onda de pulso */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />

      {/* Ícono WhatsApp */}
      <svg
        className="w-6 h-6 shrink-0 relative z-10"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.651.854 5.122 2.336 7.18l-1.542 5.632 5.753-1.508A11.968 11.968 0 0012.031 24c6.646 0 12.031-5.385 12.031-12.031C24.062 5.385 18.677 0 12.031 0zm0 22.016c-2.126 0-4.148-.54-5.91-1.503l-.424-.251-3.393.89.907-3.308-.276-.438a9.982 9.982 0 01-1.603-5.375c0-5.545 4.512-10.056 10.056-10.056 5.545 0 10.056 4.512 10.056 10.056s-4.511 10.035-10.056 10.035z" />
        <path d="M17.512 14.155c-.275-.138-1.625-.803-1.876-.896-.25-.093-.434-.138-.616.138-.184.275-.71.896-.871 1.079-.161.183-.323.206-.598.069-.275-.138-1.16-.428-2.212-1.368-.819-.733-1.371-1.637-1.533-1.913-.162-.275-.017-.424.12-.562.124-.124.275-.321.413-.482.138-.161.183-.275.275-.459.093-.183.047-.344-.022-.482-.07-.138-.617-1.488-.846-2.039-.222-.536-.448-.464-.616-.473-.162-.008-.345-.008-.528-.008-.183 0-.482.069-.733.344-.251.275-.964.941-.964 2.295 0 1.354.987 2.662 1.124 2.845.138.183 1.938 2.957 4.693 4.145.656.283 1.167.452 1.566.578.658.208 1.258.178 1.729.108.528-.079 1.625-.664 1.854-1.308.229-.643.229-1.194.161-1.308-.069-.115-.251-.183-.526-.321z" />
      </svg>

      {/* Texto */}
      <span className="font-bold text-sm relative z-10 whitespace-nowrap">
        Agendar Cita aquí
      </span>
    </a>
  );
}
