import SEOLandingCaracas from "@/components/SEOLandingCaracas";
import { SITE_URL } from "@/lib/contact";

export const metadata = {
  title: "Otorrinolaringólogo en Caracas | Dra. Ana Maria Peña",
  description:
    "¿Buscas un otorrinolaringólogo en Caracas? La Dra. Ana Maria Peña ofrece consultas especializadas en oído, nariz y garganta en Caracas. Agenda tu cita.",
  keywords: [
    "otorrinolaringólogo en Caracas",
    "otorrinolaringología Caracas",
    "especialista oído nariz garganta Caracas",
    "médico ORL Caracas Venezuela",
    "Dra Ana Maria Peña Caracas",
  ],
  openGraph: {
    title: "Otorrinolaringólogo en Caracas | Dra. Ana Maria Peña",
    description:
      "Consultas especializadas en oído, nariz y garganta en Caracas con la Dra. Ana Maria Peña. Atención médica profesional y personalizada.",
    url: `${SITE_URL}/otorrinolaringologo-en-caracas`,
    siteName: "Dra. Ana Maria Peña",
    images: [{ url: "/images/og-image.jpeg", width: 1200, height: 630 }],
    locale: "es_VE",
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/otorrinolaringologo-en-caracas`,
  },
};

const faqs = [
  {
    q: "¿Hay otorrinolaringólogo en Caracas?",
    a: "Sí. La Dra. Ana Maria Peña es médico especialista en Otorrinolaringología con consultas presenciales en Caracas. Contáctanos por WhatsApp para coordinar disponibilidad y consultorio.",
  },
  {
    q: "¿Qué enfermedades trata el otorrinolaringólogo en Caracas?",
    a: "El otorrinolaringólogo trata enfermedades del oído (otitis, hipoacusia, acúfenos), nariz y senos paranasales (sinusitis, rinitis alérgica, pólipos nasales) y garganta (amigdalitis, laringitis, disfagia), entre otras condiciones de cabeza y cuello.",
  },
  {
    q: "¿Cuándo debo ir al otorrinolaringólogo en Caracas?",
    a: "Acude si tienes dolor de oído, pérdida de audición, zumbidos, sinusitis recurrente, congestión nasal crónica, ronquera persistente, dificultad para tragar, o si un médico general te ha referido al especialista.",
  },
  {
    q: "¿El otorrinolaringólogo en Caracas atiende urgencias?",
    a: "La atención se realiza con cita previa para garantizar una consulta de calidad. Si tienes una situación urgente como pérdida brusca de audición, escríbenos de inmediato por WhatsApp para orientarte.",
  },
  {
    q: "¿El otorrinolaringólogo en Caracas opera?",
    a: "La Dra. Ana Maria Peña es médico cirujano especialista, capacitada para el manejo tanto clínico como quirúrgico de las patologías ORL. En la consulta evaluará si tu caso requiere tratamiento médico o quirúrgico.",
  },
];

export default function OtorrinolaCaracasPage() {
  return (
    <SEOLandingCaracas
      heading="Otorrinolaringólogo en Caracas"
      subheading="Atención médica especializada en oído, nariz y garganta en Caracas. La Dra. Ana Maria Peña ofrece diagnóstico preciso y tratamiento personalizado."
      intro="Especialista en Otorrinolaringología formada en la Universidad Central de Venezuela (UCV) con residencia en el Hospital Universitario de Caracas. Ofrece atención clínica y quirúrgica de alto nivel para toda la familia en Caracas."
      faqs={faqs}
      waText="Hola Dra. Ana Maria, vengo de su sitio web. Busco un otorrinolaringólogo en Caracas y me gustaría agendar una consulta."
    />
  );
}
