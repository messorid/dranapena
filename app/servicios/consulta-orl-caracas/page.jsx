import SEOServiceCaracas from "@/components/SEOServiceCaracas";
import { SITE_URL } from "@/lib/contact";

export const metadata = {
  title: "Consulta Otorrinolaringológica en Caracas | Dra. Ana Maria Peña",
  description: "Consulta ORL en Caracas con la Dra. Ana Maria Peña. Evaluación completa de oído, nariz y garganta. Diagnóstico preciso y tratamiento personalizado.",
  keywords: ["consulta ORL Caracas", "otorrinolaringología Caracas", "médico oído nariz garganta Caracas"],
  alternates: { canonical: `${SITE_URL}/servicios/consulta-orl-caracas` },
};

const related = [
  { title: "Consulta de Oído", href: "/servicios/consulta-oido-caracas" },
  { title: "Consulta de Nariz", href: "/servicios/consulta-nariz-caracas" },
  { title: "Consulta de Garganta", href: "/servicios/consulta-garganta-caracas" },
  { title: "Limpieza de Oídos", href: "/servicios/limpieza-oidos-caracas" },
  { title: "Evaluación Auditiva", href: "/servicios/evaluacion-auditiva-caracas" },
];

export default function ConsultaORLPage() {
  return (
    <SEOServiceCaracas
      heading="Consulta ORL en Caracas"
      subheading="Evaluación completa del oído, nariz y garganta con la Dra. Ana Maria Peña, especialista certificada en Otorrinolaringología."
      description="La consulta otorrinolaringológica es el punto de partida para diagnosticar y tratar cualquier condición que afecte el oído, la nariz, la garganta y estructuras relacionadas de la cabeza y el cuello."
      conditions={[
        "Evaluación completa de oído, nariz y garganta",
        "Diagnóstico de infecciones y enfermedades crónicas",
        "Revisión de problemas auditivos y de equilibrio",
        "Valoración de ronquidos y apnea del sueño",
        "Control de patologías crónicas de vía aérea superior",
        "Segunda opinión médica especializada",
        "Consulta pediátrica de ORL para niños",
      ]}
      benefits={[
        "Especialista certificada en ORL formada en la UCV",
        "Residencia en el Hospital Universitario de Caracas (HUC)",
        "Atención personalizada, sin prisa, escuchando cada detalle",
        "Uso de instrumental médico moderno en consulta",
        "Explicación clara del diagnóstico y plan de tratamiento",
        "Disponible en Caracas previa cita coordinada por WhatsApp",
      ]}
      faqs={[
        { q: "¿Qué incluye una consulta ORL en Caracas?", a: "La consulta incluye historia clínica completa, exploración física del oído, nariz, garganta y cuello, diagnóstico y plan de tratamiento. Dependiendo del caso, puede incluir evaluaciones adicionales como audiometría o nasofibroscopía." },
        { q: "¿Cuánto dura la consulta de otorrinolaringología?", a: "La consulta inicial suele durar entre 30 y 45 minutos. Queremos tomarnos el tiempo necesario para entender tu caso y explicarte el diagnóstico con claridad." },
        { q: "¿Debo ir en ayunas a la consulta ORL?", a: "No es necesario ir en ayunas para una consulta ORL estándar. Si se programan procedimientos o estudios específicos, te lo indicaremos con anticipación." },
        { q: "¿Puedo llevar a mi hijo a la consulta?", a: "Sí. La Dra. Ana Maria Peña atiende pacientes de todas las edades, incluyendo niños. La otorrinolaringología pediátrica es fundamental para detectar a tiempo otitis, problemas de audición y adenoides." },
      ]}
      waText="Hola Dra. Ana Maria, vengo de su sitio web y me gustaría agendar una consulta ORL en Caracas."
      relatedServices={related}
    />
  );
}
