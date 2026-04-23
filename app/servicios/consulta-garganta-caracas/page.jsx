import SEOServiceCaracas from "@/components/SEOServiceCaracas";
import { SITE_URL } from "@/lib/contact";

export const metadata = {
  title: "Especialista de Garganta en Caracas | Dra. Ana Maria Peña",
  description: "Especialista de garganta en Caracas. Tratamiento de amigdalitis, ronquera, disfagia y laringitis con la Dra. Ana Maria Peña, otorrinolaringóloga.",
  keywords: ["especialista garganta Caracas", "amigdalitis Caracas", "ronquera Caracas", "otorrino garganta Caracas"],
  alternates: { canonical: `${SITE_URL}/servicios/consulta-garganta-caracas` },
};

const related = [
  { title: "Consulta ORL General", href: "/servicios/consulta-orl-caracas" },
  { title: "Consulta de Nariz", href: "/servicios/consulta-nariz-caracas" },
  { title: "Consulta de Oído", href: "/servicios/consulta-oido-caracas" },
  { title: "Limpieza de Oídos", href: "/servicios/limpieza-oidos-caracas" },
];

export default function ConsultaGargantaPage() {
  return (
    <SEOServiceCaracas
      heading="Especialista de Garganta en Caracas"
      subheading="Diagnóstico y tratamiento de amigdalitis, ronquera, dificultad para tragar y otras condiciones de garganta en Caracas."
      description="La garganta es la puerta de entrada del sistema respiratorio y digestivo. Sus enfermedades pueden afectar seriamente la calidad de vida, la voz y la alimentación. La Dra. Ana Maria Peña ofrece atención especializada para toda la patología faríngea y laríngea en Caracas."
      conditions={[
        "Amigdalitis aguda y crónica recurrente",
        "Faringitis bacteriana y viral",
        "Ronquera o disfonía (alteración de la voz)",
        "Dificultad o dolor al tragar (disfagia)",
        "Laringitis aguda y crónica",
        "Ronquidos y apnea obstructiva del sueño",
        "Sensación de cuerpo extraño en la garganta (globo faríngeo)",
        "Nódulos o lesiones en las cuerdas vocales",
      ]}
      benefits={[
        "Evaluación clínica completa de faringe y laringe",
        "Diagnóstico preciso entre causas virales, bacterianas y funcionales",
        "Manejo de ronquidos y apnea con enfoque conservador y quirúrgico",
        "Cuidado de la voz para pacientes que la usan profesionalmente",
        "Especialista formada en patología laríngea durante su residencia en el HUC",
        "Atención en Caracas previa cita, respuesta rápida por WhatsApp",
      ]}
      faqs={[
        { q: "¿Cuándo debo ver al especialista por dolor de garganta?", a: "Consulta al especialista si: el dolor dura más de una semana, tienes fiebre persistente, dificultad para tragar o respirar, presencia de manchas blancas en las amígdalas, o si los episodios de amigdalitis se repiten más de 3-4 veces al año." },
        { q: "¿La ronquera siempre es grave?", a: "No siempre, pero una ronquera que dura más de 2-3 semanas debe evaluarse por un especialista. Puede deberse a laringitis, nódulos vocales, pólipos o, en casos menos frecuentes, lesiones que requieren estudio más detallado." },
        { q: "¿Los ronquidos tienen tratamiento?", a: "Sí. El tratamiento depende de la causa: puede ir desde cambios en el estilo de vida (posición al dormir, pérdida de peso) hasta dispositivos o cirugía. La evaluación del especialista determina cuál es la mejor opción para cada paciente." },
        { q: "¿Cuándo se recomienda la amigdalectomía (cirugía de amígdalas)?", a: "La amigdalectomía se indica cuando hay amigdalitis bacteriana recurrente (más de 5-7 episodios en un año o más de 3 años seguidos), amígdalas muy grandes que obstruyen la vía aérea, o abscesos periamigdalinos repetidos." },
      ]}
      waText="Hola Dra. Ana Maria, vengo de su sitio web y me gustaría agendar una consulta de garganta en Caracas."
      relatedServices={related}
    />
  );
}
