// app/sobre-mi/page.jsx
// NO usamos "use client" aquí. Esto es un Server Component.

import AboutMeClient from "./AboutMeClient";
import { SITE_URL } from "@/lib/contact";

// 🚀 Objeto de Metadata para SEO perfecto
export const metadata = {
  title: "Sobre la Dra. Ana Maria Peña | Otorrinolaringóloga en Barinas y Caracas",
  description: "Conoce a la Dra. Ana Maria Peña, médico cirujano especialista en Otorrinolaringología. Atención clínica y quirúrgica integral para enfermedades del oído, nariz y garganta.",
  keywords: ["Otorrinolaringólogo Barinas", "Otorrino Caracas", "Dra Ana Maria Peña", "Especialista oído nariz garganta", "Cirugía otorrino Venezuela"],
  openGraph: {
    title: "Dra. Ana Maria Peña | Especialista en Otorrinolaringología",
    description: "Atención clínica y quirúrgica integral para enfermedades del oído, nariz y garganta en Barinas y Caracas.",
    url: `${SITE_URL}/sobre-mi`,
    siteName: "Dra. Ana Maria Peña",
    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Dra. Ana Maria Peña, Otorrinolaringóloga",
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