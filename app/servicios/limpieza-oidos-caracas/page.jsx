import SEOServiceCaracas from "@/components/SEOServiceCaracas";
import { SITE_URL } from "@/lib/contact";

export const metadata = {
  title: "Limpieza de Oídos en Caracas | Dra. Ana Maria Peña",
  description: "Limpieza de oídos profesional en Caracas. Extracción segura de cerumen con instrumental médico especializado. Dra. Ana Maria Peña, otorrinolaringóloga.",
  keywords: ["limpieza de oídos Caracas", "extracción cerumen Caracas", "tapón de cera Caracas", "otorrino limpieza oidos Caracas"],
  alternates: { canonical: `${SITE_URL}/servicios/limpieza-oidos-caracas` },
};

const related = [
  { title: "Consulta de Oído", href: "/servicios/consulta-oido-caracas" },
  { title: "Evaluación Auditiva", href: "/servicios/evaluacion-auditiva-caracas" },
  { title: "Consulta ORL General", href: "/servicios/consulta-orl-caracas" },
];

export default function LimpiezaOidosPage() {
  return (
    <SEOServiceCaracas
      heading="Limpieza de Oídos en Caracas"
      subheading="Extracción segura y profesional de cerumen en Caracas. Mejora tu audición de forma inmediata con la Dra. Ana Maria Peña."
      description="La acumulación de cerumen (tapón de cera) es una de las causas más frecuentes de pérdida auditiva temporal y sensación de taponamiento. La limpieza de oídos realizada por un especialista ORL es el método más seguro y efectivo para resolverla."
      conditions={[
        "Tapón de cerumen (acumulación excesiva de cera)",
        "Sensación de taponamiento u oído lleno",
        "Pérdida auditiva temporal por cerumen",
        "Zumbidos o pitidos asociados al cerumen",
        "Picazón o molestia dentro del conducto auditivo",
        "Oídos que producen cerumen en exceso de forma habitual",
        "Previo a audiometría o exploración del tímpano",
      ]}
      benefits={[
        "Procedimiento realizado por especialista ORL, no por técnico o enfermero",
        "Uso de instrumental médico adecuado: pinzas, aspiración o irrigación según el caso",
        "Procedimiento rápido, indoloro y sin riesgo de perforación del tímpano",
        "Revisión completa del conducto auditivo y el tímpano tras la extracción",
        "Recomendaciones personalizadas para evitar acumulación futura",
        "Disponible en Caracas, previa cita coordinada por WhatsApp",
      ]}
      faqs={[
        { q: "¿Es peligroso limpiarse los oídos en casa con hisopo?", a: "Sí. Los hisopos pueden empujar el cerumen más adentro del conducto, creando tapones más profundos y difíciles de extraer. También pueden irritar el conducto auditivo y, en casos extremos, perforar el tímpano. Lo más seguro es acudir al especialista." },
        { q: "¿Cuánto dura el procedimiento de limpieza de oídos?", a: "La limpieza de oídos profesional suele durar entre 10 y 20 minutos por oído. El proceso es rápido, no requiere anestesia y el resultado se siente inmediatamente: mejor audición y desaparece la sensación de taponamiento." },
        { q: "¿Cada cuánto debo hacerme una limpieza de oídos?", a: "No hay una frecuencia estándar. Depende de cuánto cerumen produzca cada persona. Algunas personas necesitan una limpieza 1-2 veces al año, otras nunca. Si sientes taponamiento o baja de audición, es el momento de consultar." },
        { q: "¿Las gotas para oídos de farmacia son suficientes para disolver el cerumen?", a: "Las gotas reblandecedoras pueden ayudar en tapones pequeños, pero con frecuencia no son suficientes para tapones grandes o muy compactados. Además, no deben usarse si tienes perforación del tímpano. Lo más seguro es la evaluación con el especialista." },
      ]}
      waText="Hola Dra. Ana Maria, vengo de su sitio web y me gustaría agendar una limpieza de oídos en Caracas."
      relatedServices={related}
    />
  );
}
