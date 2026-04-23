import SEOServiceCaracas from "@/components/SEOServiceCaracas";
import { SITE_URL } from "@/lib/contact";

export const metadata = {
  title: "Especialista en Oído en Caracas | Dra. Ana Maria Peña",
  description: "Especialista en oído en Caracas. Tratamiento de otitis, dolor de oído, pérdida auditiva y cerumen con la Dra. Ana Maria Peña, otorrinolaringóloga.",
  keywords: ["especialista oído Caracas", "otitis Caracas", "dolor de oído Caracas", "médico oído Caracas"],
  alternates: { canonical: `${SITE_URL}/servicios/consulta-oido-caracas` },
};

const related = [
  { title: "Consulta ORL General", href: "/servicios/consulta-orl-caracas" },
  { title: "Limpieza de Oídos", href: "/servicios/limpieza-oidos-caracas" },
  { title: "Evaluación Auditiva", href: "/servicios/evaluacion-auditiva-caracas" },
  { title: "Consulta de Nariz", href: "/servicios/consulta-nariz-caracas" },
  { title: "Consulta de Garganta", href: "/servicios/consulta-garganta-caracas" },
];

export default function ConsultaOidoPage() {
  return (
    <SEOServiceCaracas
      heading="Especialista en Oído en Caracas"
      subheading="Diagnóstico y tratamiento de enfermedades del oído con la Dra. Ana Maria Peña en Caracas. Desde otitis hasta pérdida auditiva."
      description="El oído es un órgano delicado que requiere atención especializada. La consulta de oído en Caracas abarca el diagnóstico y tratamiento de todas las afecciones que comprometen la audición, el equilibrio y la salud del conducto auditivo."
      conditions={[
        "Otitis media aguda y crónica",
        "Otitis externa (oído del nadador)",
        "Dolor de oído (otalgia) sin causa aparente",
        "Pérdida auditiva gradual o brusca",
        "Acúfenos o tinnitus (zumbidos en el oído)",
        "Vértigo y mareos de origen ótico",
        "Sensación de taponamiento u oído lleno",
        "Supuración o secreción por el oído",
      ]}
      benefits={[
        "Exploración otoscópica detallada con instrumental de precisión",
        "Diagnóstico diferencial entre otitis, cerumen y otras causas",
        "Tratamiento médico y seguimiento de enfermedades crónicas del oído",
        "Derivación a audiometría cuando el caso lo requiere",
        "Especialista con residencia en el HUC, uno de los hospitales más exigentes del país",
        "Atención en Caracas, con disponibilidad coordinada por WhatsApp",
      ]}
      faqs={[
        { q: "¿Por qué me duele el oído en Caracas?", a: "El dolor de oído puede tener múltiples causas: infección bacteriana o viral, acumulación de cerumen, cambios de presión, o incluso problemas de mandíbula o garganta que se irradian al oído. Solo un especialista puede determinar la causa exacta." },
        { q: "¿Cómo sé si tengo otitis?", a: "Los síntomas típicos de otitis incluyen: dolor intenso dentro del oído, sensación de taponamiento, pérdida parcial de audición, y a veces fiebre o secreción. Si tienes estos síntomas, agenda una consulta a la brevedad." },
        { q: "¿Cuándo debo preocuparme por la pérdida de audición?", a: "Cualquier pérdida de audición merece evaluación médica. Es especialmente urgente cuando es súbita (aparece en horas o días), afecta solo un oído, o va acompañada de zumbidos intensos o mareos." },
        { q: "¿Los acúfenos tienen tratamiento?", a: "Sí. Aunque no siempre se pueden eliminar por completo, existen tratamientos que reducen significativamente su intensidad e impacto en la calidad de vida. El primer paso es identificar la causa subyacente con el especialista." },
      ]}
      waText="Hola Dra. Ana Maria, vengo de su sitio web y me gustaría agendar una consulta de oído en Caracas."
      relatedServices={related}
    />
  );
}
