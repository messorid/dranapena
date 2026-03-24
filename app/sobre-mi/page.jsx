// app/sobre-mi/page.jsx
// NO usamos "use client" aquí. Esto es un Server Component.

import AboutMeClient from "./AboutMeClient";

// 🚀 Objeto de Metadata para SEO perfecto
export const metadata = {
  title: "Sobre la Dra. Ana Maria Peña | Otorrinolaringóloga en Barinas y Caracas",
  description: "Conoce a la Dra. Ana Maria Peña, médico cirujano especialista en Otorrinolaringología. Atención clínica y quirúrgica integral para enfermedades del oído, nariz y garganta.",
  keywords: ["Otorrinolaringólogo Barinas", "Otorrino Caracas", "Dra Ana Maria Peña", "Especialista oído nariz garganta", "Cirugía otorrino Venezuela"],
  openGraph: {
    title: "Dra. Ana Maria Peña | Especialista en Otorrinolaringología",
    description: "Atención clínica y quirúrgica integral para enfermedades del oído, nariz y garganta en Barinas y Caracas.",
    url: "https://otorrinoana.com/sobre-mi", // Reemplazar con el dominio real
    siteName: "Dra. Ana Maria Peña",
    images: [
      {
        url: "/images/doctor-portrait.jpg", // Asegúrate de tener esta imagen
        width: 800,
        height: 600,
        alt: "Retrato de la Dra. Ana Maria Peña",
      },
    ],
    locale: "es_VE",
    type: "profile",
  },
};

export default function SobreMiPage() {
  return (
    // Llamamos al componente interactivo que tiene las animaciones
    <AboutMeClient />
  );
}