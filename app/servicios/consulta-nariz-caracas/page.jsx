import SEOServiceCaracas from "@/components/SEOServiceCaracas";
import { SITE_URL } from "@/lib/contact";

export const metadata = {
  title: "Especialista en Nariz y Sinusitis en Caracas | Dra. Ana Maria Peña",
  description: "Especialista en nariz y sinusitis en Caracas. Tratamiento de sinusitis, rinitis alérgica, congestión nasal y pólipos con la Dra. Ana Maria Peña.",
  keywords: ["sinusitis Caracas", "especialista nariz Caracas", "rinitis alérgica Caracas", "otorrino nariz Caracas"],
  alternates: { canonical: `${SITE_URL}/servicios/consulta-nariz-caracas` },
};

const related = [
  { title: "Consulta ORL General", href: "/servicios/consulta-orl-caracas" },
  { title: "Consulta de Garganta", href: "/servicios/consulta-garganta-caracas" },
  { title: "Consulta de Oído", href: "/servicios/consulta-oido-caracas" },
  { title: "Evaluación Auditiva", href: "/servicios/evaluacion-auditiva-caracas" },
];

export default function ConsultaNarizPage() {
  return (
    <SEOServiceCaracas
      heading="Especialista en Nariz en Caracas"
      subheading="Diagnóstico y tratamiento de sinusitis, alergias nasales, congestión crónica y otras condiciones en Caracas con la Dra. Ana Maria Peña."
      description="El clima de Caracas y los niveles de contaminación y polvo hacen que las enfermedades nasales sean especialmente frecuentes. La consulta de nariz cubre todas las afecciones de la nariz y los senos paranasales, desde alergias hasta sinusitis crónica."
      conditions={[
        "Sinusitis aguda y crónica",
        "Rinitis alérgica y no alérgica",
        "Congestión nasal persistente o crónica",
        "Pólipos nasales",
        "Desviación del tabique nasal",
        "Dificultad para respirar por la nariz",
        "Epistaxis (sangrado nasal recurrente)",
        "Pérdida del olfato o alteraciones del olfato",
      ]}
      benefits={[
        "Diagnóstico diferencial entre rinitis, sinusitis y otras causas de congestión",
        "Tratamiento médico actualizado para rinitis alérgica en el contexto venezolano",
        "Evaluación de indicación quirúrgica cuando el tratamiento médico no es suficiente",
        "Enfoque en mejorar la calidad de vida y la respiración nasal del paciente",
        "Especialista con formación en las técnicas diagnósticas y terapéuticas más actuales",
        "Atención en Caracas, previa cita coordinada por WhatsApp",
      ]}
      faqs={[
        { q: "¿Por qué tengo sinusitis frecuente en Caracas?", a: "Caracas tiene factores que favorecen la sinusitis: polvo, contaminación, cambios de temperatura entre zonas altas y bajas, y alta exposición a alérgenos. Estos factores irritan la mucosa nasal y facilitan las infecciones de los senos paranasales." },
        { q: "¿Cómo sé si tengo sinusitis o una simple gripe?", a: "La sinusitis dura más de 10 días, produce dolor o presión en la cara (frente, mejillas, entre los ojos), congestión nasal persistente y secreción espesa amarilla o verde. La gripe típicamente mejora en menos de una semana." },
        { q: "¿La rinitis alérgica tiene cura?", a: "La rinitis alérgica no tiene cura definitiva, pero se puede controlar muy bien con medicación, medidas de evitación del alérgeno y, en algunos casos, inmunoterapia. El especialista determinará el mejor plan para tu caso." },
        { q: "¿Cuándo se operan los pólipos nasales?", a: "Los pólipos nasales se tratan primero con medicación (corticoides nasales). La cirugía se indica cuando el tratamiento médico no es suficiente o cuando los pólipos son tan grandes que bloquean completamente la respiración." },
      ]}
      waText="Hola Dra. Ana Maria, vengo de su sitio web y me gustaría agendar una consulta de nariz/sinusitis en Caracas."
      relatedServices={related}
    />
  );
}
