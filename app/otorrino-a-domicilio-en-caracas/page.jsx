import SEOLandingCaracas from "@/components/SEOLandingCaracas";
import { SITE_URL } from "@/lib/contact";

export const metadata = {
  title: "Otorrino a Domicilio en Caracas | Dra. Ana Maria Peña",
  description:
    "Otorrino a domicilio en Caracas. Consulta de oído, nariz y garganta en tu hogar con la Dra. Ana Maria Peña, especialista ORL. Coordina tu visita por WhatsApp.",
  keywords: [
    "otorrino a domicilio Caracas",
    "otorrino domicilio Caracas",
    "médico oído nariz garganta a domicilio Caracas",
    "ORL a domicilio Caracas",
    "consulta otorrino en casa Caracas",
    "especialista garganta domicilio Caracas",
  ],
  openGraph: {
    title: "Otorrino a Domicilio en Caracas | Dra. Ana Maria Peña",
    description:
      "Consulta de otorrinolaringología a domicilio en Caracas. La Dra. Ana Maria Peña evalúa oído, nariz y garganta en la comodidad de tu hogar.",
    url: `${SITE_URL}/otorrino-a-domicilio-en-caracas`,
    siteName: "Dra. Ana Maria Peña",
    images: [{ url: "/images/og-image.jpeg", width: 1200, height: 630 }],
    locale: "es_VE",
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/otorrino-a-domicilio-en-caracas`,
  },
};

const faqs = [
  {
    q: "¿La Dra. Peña realmente atiende a domicilio en Caracas?",
    a: "Sí. Las consultas a domicilio se coordinan directamente por WhatsApp. La disponibilidad depende de la zona de Caracas, el día y el tipo de consulta. Escríbenos y te confirmamos si tu caso es adecuado para atención en casa.",
  },
  {
    q: "¿Qué condiciones puede evaluar el otorrino a domicilio?",
    a: "Las consultas a domicilio son ideales para: dolor de oído agudo, sensación de taponamiento, otitis en niños que no pueden trasladarse, zumbidos, evaluación de pérdida auditiva leve-moderada, congestión nasal crónica y molestias de garganta sin emergencia. Procedimientos como limpieza de oídos también pueden realizarse a domicilio con el instrumental adecuado.",
  },
  {
    q: "¿Qué ventajas tiene la consulta de otorrino a domicilio?",
    a: "El paciente no necesita trasladarse en el tráfico de Caracas, no espera en sala de espera, el ambiente es familiar (ideal para niños), la evaluación es más tranquila y personalizada, y la recuperación —en caso de procedimientos menores— se hace en casa. Es especialmente útil para adultos mayores o pacientes con movilidad reducida.",
  },
  {
    q: "¿Qué zonas de Caracas cubre la atención a domicilio?",
    a: "La cobertura de zonas se coordina por WhatsApp según disponibilidad. Escríbenos indicando tu municipio o urbanización y te confirmamos si podemos atenderte. La respuesta es rápida.",
  },
  {
    q: "¿Cómo coordino una visita del otorrino a mi domicilio en Caracas?",
    a: "Usa el botón de WhatsApp en esta página. Cuéntanos brevemente los síntomas, tu zona de Caracas y la urgencia. La Dra. Peña o su equipo te confirman disponibilidad, horario y los pasos a seguir.",
  },
];

export default function OtorrinoDomicilioCaracasPage() {
  return (
    <SEOLandingCaracas
      heading="Otorrino a Domicilio en Caracas"
      subheading="Consulta especializada de oído, nariz y garganta en la comodidad de tu hogar en Caracas. Sin traslados, sin filas. La Dra. Ana Maria Peña va donde estás."
      intro="La Dra. Ana Maria Peña es especialista en Otorrinolaringología formada en la UCV con residencia en el Hospital Universitario de Caracas. Ofrece consultas a domicilio en Caracas para pacientes que prefieren o necesitan atención en casa: adultos mayores, niños con dificultad para trasladarse, o quienes simplemente valoran la comodidad de recibir atención médica especializada sin salir del hogar."
      faqs={faqs}
      waText="Hola Dra. Ana Maria, vengo de su sitio web y me gustaría coordinar una consulta de otorrino a domicilio en Caracas."
    />
  );
}
