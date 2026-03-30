import SEOLandingBarinas from "@/components/SEOLandingBarinas";
import { SITE_URL } from "@/lib/contact";

export const metadata = {
  title: "Otorrinolaringólogo en Barinas | Dra. Ana Maria Peña",
  description:
    "Busca un otorrinolaringólogo en Barinas? La Dra. Ana Maria Peña ofrece consultas especializadas en oído, nariz y garganta en Barinas. Agenda tu cita por WhatsApp.",
  keywords: [
    "otorrinolaringólogo en Barinas",
    "otorrinolaringología Barinas",
    "especialista oído nariz garganta Barinas",
    "médico ORL Barinas",
    "Dra Ana Maria Peña Barinas",
  ],
  openGraph: {
    title: "Otorrinolaringólogo en Barinas | Dra. Ana Maria Peña",
    description:
      "Consultas especializadas en oído, nariz y garganta en Barinas con la Dra. Ana Maria Peña. Atención médica profesional y personalizada.",
    url: `${SITE_URL}/otorrinolaringologo-en-barinas`,
    siteName: "Dra. Ana Maria Peña",
    images: [{ url: "/images/og-image.jpeg", width: 1200, height: 630 }],
    locale: "es_VE",
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/otorrinolaringologo-en-barinas`,
  },
};

const faqs = [
  {
    q: "¿Hay otorrinolaringólogo en Barinas?",
    a: "Sí. La Dra. Ana Maria Peña ofrece consultas presenciales de otorrinolaringología en Barinas. Escríbenos por WhatsApp para confirmar disponibilidad de fechas y coordinar el consultorio.",
  },
  {
    q: "¿Qué enfermedades trata el otorrinolaringólogo en Barinas?",
    a: "Trata enfermedades del oído (infecciones, pérdida auditiva, cerumen), nariz (sinusitis, alergias, congestión) y garganta (amigdalitis, ronquera, dificultad al tragar), entre otras condiciones de cabeza y cuello.",
  },
  {
    q: "¿Atienden niños y adultos en Barinas?",
    a: "Sí. La Dra. Ana Maria Peña atiende tanto a niños como a adultos. Las consultas pediátricas de ORL son especialmente importantes para detectar problemas de audición y otitis a tiempo.",
  },
  {
    q: "¿Cómo agendo una consulta de otorrinolaringología en Barinas?",
    a: "Puedes agendar directamente por WhatsApp haciendo clic en cualquiera de los botones de esta página. Te responderemos a la brevedad para confirmar día, hora y consultorio.",
  },
  {
    q: "¿Cuándo debo consultar al otorrinolaringólogo?",
    a: "Consulta si presentas: dolor de oído persistente, pérdida de audición, sinusitis recurrente, ronquera por más de 3 semanas, dificultad para respirar por la nariz o problemas frecuentes de garganta.",
  },
];

export default function OtorrinoBarinasPage() {
  return (
    <SEOLandingBarinas
      heading="Otorrinolaringólogo en Barinas"
      subheading="Atención médica especializada en oído, nariz y garganta en Barinas. La Dra. Ana Maria Peña ofrece diagnóstico preciso y tratamiento personalizado."
      intro="Médico cirujano especialista en Otorrinolaringología graduada en la UCV con residencia en el Hospital Universitario de Caracas. Ofrece consultas presenciales en Barinas con enfoque humano, equipos modernos y tratamientos efectivos para toda la familia."
      faqs={faqs}
      waText="Hola Dra. Ana Maria, busco un otorrinolaringólogo en Barinas y me gustaría agendar una consulta."
    />
  );
}
