import SEOLandingCaracas from "@/components/SEOLandingCaracas";
import { SITE_URL } from "@/lib/contact";

export const metadata = {
  title: "Otorrinolaringólogo a Domicilio en Caracas | Dra. Ana Maria Peña",
  description:
    "Otorrinolaringólogo a domicilio en Caracas. La Dra. Ana Maria Peña realiza consultas ORL en tu hogar. Diagnóstico de oído, nariz y garganta sin salir de casa.",
  keywords: [
    "otorrinolaringólogo a domicilio Caracas",
    "otorrinolaringólogo domicilio Caracas",
    "ORL domicilio Caracas Venezuela",
    "médico especialista a domicilio Caracas",
    "consulta otorrinolaringología en casa Caracas",
    "especialista oído nariz garganta domicilio Caracas",
  ],
  openGraph: {
    title: "Otorrinolaringólogo a Domicilio en Caracas | Dra. Ana Maria Peña",
    description:
      "Consulta de otorrinolaringología a domicilio en Caracas con la Dra. Ana Maria Peña. Diagnóstico especializado de oído, nariz y garganta en tu hogar.",
    url: `${SITE_URL}/otorrinolaringologo-a-domicilio-en-caracas`,
    siteName: "Dra. Ana Maria Peña",
    images: [{ url: "/images/og-image.jpeg", width: 1200, height: 630 }],
    locale: "es_VE",
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/otorrinolaringologo-a-domicilio-en-caracas`,
  },
};

const faqs = [
  {
    q: "¿En qué consiste la consulta de otorrinolaringología a domicilio?",
    a: "La Dra. Peña lleva el instrumental médico necesario a tu hogar: otoscopio, lupa, instrumental básico de exploración ORL. Realiza una evaluación clínica completa de oído, nariz y garganta, hace el diagnóstico y prescribe el tratamiento en el lugar. Para procedimientos como limpieza de oídos, también puede realizarse a domicilio con equipo portátil.",
  },
  {
    q: "¿Es igual de efectiva la consulta a domicilio que en consultorio?",
    a: "Para la mayoría de las condiciones clínicas del oído, nariz y garganta, sí. El otorrinolaringólogo puede diagnosticar otitis, sinusitis, amigdalitis, pérdida auditiva leve-moderada y muchos otros cuadros con un examen físico completo. Casos que requieran audiometría, tomografía o cirugía serán derivados al centro correspondiente.",
  },
  {
    q: "¿Cuándo conviene pedir un otorrinolaringólogo a domicilio en Caracas?",
    a: "La consulta a domicilio es ideal cuando: el paciente es un adulto mayor o tiene movilidad reducida, se trata de un niño pequeño que se altera en ambientes clínicos desconocidos, el síntoma es incapacitante (dolor severo de oído, vértigo intenso) y trasladarse es difícil, o simplemente prefieres la comodidad de recibir atención especializada en casa sin exponerte al tráfico de Caracas.",
  },
  {
    q: "¿Cuánto tiempo dura la consulta a domicilio?",
    a: "Una consulta de otorrinolaringología a domicilio dura entre 30 y 45 minutos, incluyendo la evaluación clínica, el diagnóstico y las indicaciones terapéuticas. Si se incluye limpieza de oídos u otro procedimiento menor, puede extenderse un poco más.",
  },
  {
    q: "¿Cómo solicito la consulta del otorrinolaringólogo a domicilio en Caracas?",
    a: "Escríbenos por WhatsApp usando el botón en esta página. Indícanos: síntomas, urgencia, zona de Caracas y si es para un niño o adulto. La Dra. Peña responde personalmente y coordina disponibilidad, logística y honorarios antes de la visita.",
  },
];

export default function OtorrinolaringologoDomicilioCaracasPage() {
  return (
    <SEOLandingCaracas
      heading="Otorrinolaringólogo a Domicilio en Caracas"
      subheading="La Dra. Ana Maria Peña realiza consultas especializadas de ORL directamente en tu hogar en Caracas. Diagnóstico preciso y tratamiento sin salir de casa."
      intro="Especialista en Otorrinolaringología con formación de postgrado en la Universidad Central de Venezuela y residencia clínica en el Hospital Universitario de Caracas. La Dra. Ana Maria Peña lleva la experiencia del consultorio a tu hogar, con instrumental médico portátil, diagnóstico profesional y el mismo estándar de atención que en consulta presencial. Servicio disponible en Caracas previa coordinación por WhatsApp."
      faqs={faqs}
      waText="Hola Dra. Ana Maria, vengo de su sitio web y me gustaría solicitar una consulta de otorrinolaringólogo a domicilio en Caracas."
    />
  );
}
