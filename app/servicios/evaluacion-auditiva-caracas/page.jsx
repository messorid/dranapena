import SEOServiceCaracas from "@/components/SEOServiceCaracas";
import { SITE_URL } from "@/lib/contact";

export const metadata = {
  title: "Evaluación Auditiva en Caracas | Dra. Ana Maria Peña",
  description: "Evaluación auditiva en Caracas. Diagnóstico de pérdida auditiva en niños y adultos con la Dra. Ana Maria Peña, especialista en otorrinolaringología.",
  keywords: ["evaluación auditiva Caracas", "audiometría Caracas", "pérdida auditiva Caracas", "hipoacusia Caracas"],
  alternates: { canonical: `${SITE_URL}/servicios/evaluacion-auditiva-caracas` },
};

const related = [
  { title: "Consulta de Oído", href: "/servicios/consulta-oido-caracas" },
  { title: "Limpieza de Oídos", href: "/servicios/limpieza-oidos-caracas" },
  { title: "Consulta ORL General", href: "/servicios/consulta-orl-caracas" },
];

export default function EvaluacionAuditivaPage() {
  return (
    <SEOServiceCaracas
      heading="Evaluación Auditiva en Caracas"
      subheading="Diagnóstico preciso de pérdida auditiva en niños y adultos en Caracas. Detecta a tiempo la hipoacusia con la Dra. Ana Maria Peña."
      description="La evaluación auditiva es el estudio clínico que permite determinar si existe pérdida de audición, su grado y su tipo. Es fundamental para niños en etapa de desarrollo del lenguaje, adultos con sospecha de hipoacusia y personas expuestas a ruido laboral."
      conditions={[
        "Sospecha de pérdida auditiva en adultos",
        "Evaluación auditiva en niños y detección temprana",
        "Hipoacusia neurosensorial o conductiva",
        "Seguimiento tras otitis media recurrente",
        "Evaluación previa al uso de audífonos",
        "Daño auditivo por exposición al ruido (laboral o recreacional)",
        "Retraso en el desarrollo del lenguaje en niños",
        "Control de audición en pacientes con medicamentos ototóxicos",
      ]}
      benefits={[
        "Evaluación clínica completa antes de cualquier estudio audiológico",
        "Interpretación experta de los resultados en el contexto del paciente",
        "Diagnóstico diferencial entre hipoacusia conductiva, neurosensorial y mixta",
        "Orientación sobre uso de audífonos cuando corresponde",
        "Seguimiento de la audición en niños con otitis media recurrente",
        "Atención en Caracas con enfoque clínico especializado",
      ]}
      faqs={[
        { q: "¿Cómo sé si mi hijo tiene problemas de audición?", a: "En bebés: no responde a sonidos fuertes ni a la voz. En niños mayores: no sigue instrucciones, habla poco o mal para su edad, sube mucho el volumen del televisor, o los maestros reportan que no atiende. Cualquiera de estas señales amerita una evaluación auditiva urgente." },
        { q: "¿Qué es la hipoacusia?", a: "Hipoacusia es el término médico para la pérdida auditiva. Puede ser unilateral (un oído) o bilateral, leve, moderada, severa o profunda. Puede tener origen en el oído externo, medio o interno, y el tratamiento varía según la causa y el grado." },
        { q: "¿La pérdida auditiva tiene tratamiento?", a: "Depende de la causa. La hipoacusia conductiva (por cerumen, otitis, perforación del tímpano) frecuentemente es tratable médica o quirúrgicamente. La hipoacusia neurosensorial severa puede manejarse con audífonos o, en casos seleccionados, implante coclear." },
        { q: "¿A qué edad se debe hacer la primera evaluación auditiva?", a: "Idealmente al nacer (tamizaje neonatal). Si no se realizó, ante cualquier sospecha de problema auditivo en la infancia. En adultos, cuando note cambios en su audición, tenga zumbidos frecuentes o haya estado expuesto a ruido intenso de forma sostenida." },
      ]}
      waText="Hola Dra. Ana Maria, vengo de su sitio web y me gustaría agendar una evaluación auditiva en Caracas."
      relatedServices={related}
    />
  );
}
