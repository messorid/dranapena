import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/navbar";



export const metadata = {
  title: "Otorrinolaringólogo en Barinas y Caracas | Dra Ana Maria Peña",
  description: "Consulta con la Dra Ana Maria Peña, especialista en otorrinolaringología en Barinas y Caracas. Atención de oído, nariz y garganta con enfoque profesional y humano.",
  openGraph: {
    title: "Dra Ana Maria Peña | Otorrinolaringólogo",
    description: "Especialista en oído, nariz y garganta en Venezuela",
    url: "https://tudominio.com",
    siteName: "Dra Ana Maria Peña",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_VE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Otorrinolaringólogo en Venezuela",
    description: "Consulta especializada en Barinas y Caracas",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>

    </html>
  );
}