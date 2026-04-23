import SEOLandingCaracas from "@/components/SEOLandingCaracas";
import { SITE_URL } from "@/lib/contact";

export const metadata = {
  title: "Otorrino en Caracas | Dra. Ana Maria Peña",
  description:
    "¿Buscas un otorrino en Caracas? La Dra. Ana Maria Peña ofrece consultas especializadas en oído, nariz y garganta en Caracas. Agenda tu cita por WhatsApp.",
  keywords: [
    "otorrino en Caracas",
    "otorrino Caracas",
    "otorrino Caracas Venezuela",
    "especialista ORL Caracas",
    "médico oído nariz garganta Caracas",
  ],
  openGraph: {
    title: "Otorrino en Caracas | Dra. Ana Maria Peña",
    description:
      "Consulta con un otorrino en Caracas. La Dra. Ana Maria Peña ofrece atención especializada en oído, nariz y garganta con diagnóstico preciso.",
    url: `${SITE_URL}/otorrino-en-caracas`,
    siteName: "Dra. Ana Maria Peña",
    images: [{ url: "/images/og-image.jpeg", width: 1200, height: 630 }],
    locale: "es_VE",
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/otorrino-en-caracas`,
  },
};

const faqs = [
  {
    q: "¿Dónde encuentro un otorrino en Caracas?",
    a: "La Dra. Ana Maria Peña es especialista en otorrinolaringología con consultas presenciales en Caracas. Escríbenos por WhatsApp para conocer disponibilidad y coordinar tu cita en el consultorio más conveniente para ti.",
  },
  {
    q: "¿Qué hace un otorrino?",
    a: "El otorrino diagnostica y trata enfermedades del oído (infecciones, pérdida auditiva, cerumen), nariz (sinusitis, alergias, pólipos) y garganta (amigdalitis, ronquera, dificultad al tragar). También realiza procedimientos como limpieza de oídos y evaluación auditiva.",
  },
  {
    q: "¿El otorrino en Caracas atiende niños y adultos?",
    a: "Sí. La Dra. Ana Maria Peña atiende pacientes de todas las edades. Las consultas pediátricas son especialmente importantes para detectar a tiempo otitis, problemas de audición y obstrucciones nasales en niños.",
  },
  {
    q: "¿Cuándo debo ver al otorrino en Caracas?",
    a: "Consulta si presentas: dolor de oído persistente, taponamiento o zumbido, pérdida de audición, sinusitis frecuente, congestión nasal crónica, ronquera por más de 3 semanas o dificultad para respirar por la nariz.",
  },
  {
    q: "¿Cómo agendo una cita con el otorrino en Caracas?",
    a: "Es muy sencillo: escríbenos directamente por WhatsApp usando los botones de esta página. Te confirmaremos disponibilidad, consultorio y horario a la brevedad.",
  },
];

export default function OtorrinoCaracasPage() {
  return (
    <SEOLandingCaracas
      heading="Otorrino en Caracas"
      subheading="La Dra. Ana Maria Peña ofrece consultas especializadas en oído, nariz y garganta en Caracas. Diagnóstico preciso y atención cercana."
      intro="Médico cirujano especializada en Otorrinolaringología con formación de postgrado en la UCV y residencia en el Hospital Universitario de Caracas. Brinda atención de alto nivel en Caracas para niños y adultos, con tecnología moderna y un enfoque humano."
      faqs={faqs}
      waText="Hola Dra. Ana Maria, vengo de su sitio web. Busco un otorrino en Caracas y me gustaría agendar una consulta."
    />
  );
}
