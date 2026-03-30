import SEOLandingBarinas from "@/components/SEOLandingBarinas";
import { SITE_URL } from "@/lib/contact";

export const metadata = {
  title: "Otorrino en Barinas | Dra. Ana Maria Peña",
  description:
    "¿Necesitas un otorrino en Barinas? La Dra. Ana Maria Peña atiende consultas de oído, nariz y garganta en Barinas. Agenda tu cita rápidamente por WhatsApp.",
  keywords: [
    "otorrino en Barinas",
    "otorrino Barinas",
    "otorrino Barinas Venezuela",
    "especialista ORL Barinas",
    "médico oído nariz garganta Barinas",
  ],
  openGraph: {
    title: "Otorrino en Barinas | Dra. Ana Maria Peña",
    description:
      "Consulta con un otorrino en Barinas. La Dra. Ana Maria Peña ofrece atención especializada en oído, nariz y garganta con diagnóstico preciso.",
    url: `${SITE_URL}/otorrino-en-barinas`,
    siteName: "Dra. Ana Maria Peña",
    images: [{ url: "/images/og-image.jpeg", width: 1200, height: 630 }],
    locale: "es_VE",
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/otorrino-en-barinas`,
  },
};

const faqs = [
  {
    q: "¿Dónde encuentro un otorrino en Barinas?",
    a: "La Dra. Ana Maria Peña es especialista en otorrinolaringología y ofrece consultas presenciales en Barinas. Contáctanos por WhatsApp para conocer disponibilidad y coordinar tu cita.",
  },
  {
    q: "¿Qué hace un otorrino?",
    a: "El otorrino (otorrinolaringólogo) diagnostica y trata enfermedades del oído, nariz, senos paranasales y garganta. También realiza procedimientos como limpieza de oídos, evaluación auditiva y manejo quirúrgico cuando es necesario.",
  },
  {
    q: "¿El otorrino en Barinas atiende urgencias de oído?",
    a: "La atención se realiza de forma programada con cita previa. Si presentas dolor de oído intenso, pérdida de audición repentina u otra urgencia, escríbenos por WhatsApp de inmediato para orientarte.",
  },
  {
    q: "¿Cuánto cuesta la consulta del otorrino en Barinas?",
    a: "El costo de la consulta se confirma directamente por WhatsApp, donde también coordinamos el consultorio y la disponibilidad de fechas. Escríbenos para obtener toda la información.",
  },
  {
    q: "¿El otorrino en Barinas atiende a niños?",
    a: "Sí. La Dra. Ana Maria Peña atiende pacientes de todas las edades. La consulta pediátrica es clave para detectar a tiempo otitis, problemas de audición y obstrucciones nasales en menores.",
  },
];

export default function OtorrinoBarinasPage() {
  return (
    <SEOLandingBarinas
      heading="Otorrino en Barinas"
      subheading="¿Buscas un otorrino en Barinas? La Dra. Ana Maria Peña ofrece consultas especializadas en oído, nariz y garganta con atención cercana y profesional."
      intro="La Dra. Ana Maria Peña es médico cirujano especializada en otorrinolaringología (ORL) con formación en la UCV y amplia experiencia clínica. Brinda atención presencial en Barinas para niños y adultos con los más altos estándares médicos."
      faqs={faqs}
      waText="Hola Dra. Ana Maria, busco un otorrino en Barinas y me gustaría agendar una consulta."
    />
  );
}
