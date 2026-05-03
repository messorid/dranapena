import { getAllSlugs } from "@/lib/articles";

export default function sitemap() {
  const articleEntries = getAllSlugs().map((slug) => ({
    url: `https://www.otorrinoana.com/articulos/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: "https://www.otorrinoana.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.otorrinoana.com/sobre-mi",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Barinas
    {
      url: "https://www.otorrinoana.com/otorrinolaringologo-en-barinas",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.otorrinoana.com/otorrino-en-barinas",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Caracas — a domicilio
    {
      url: "https://www.otorrinoana.com/otorrino-a-domicilio-en-caracas",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.otorrinoana.com/otorrinolaringologo-a-domicilio-en-caracas",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Caracas — landing
    {
      url: "https://www.otorrinoana.com/otorrinolaringologo-en-caracas",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://www.otorrinoana.com/otorrino-en-caracas",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Caracas — servicios
    {
      url: "https://www.otorrinoana.com/servicios/consulta-orl-caracas",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: "https://www.otorrinoana.com/servicios/consulta-oido-caracas",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: "https://www.otorrinoana.com/servicios/consulta-nariz-caracas",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: "https://www.otorrinoana.com/servicios/consulta-garganta-caracas",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: "https://www.otorrinoana.com/servicios/limpieza-oidos-caracas",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: "https://www.otorrinoana.com/servicios/evaluacion-auditiva-caracas",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    // Artículos — listing
    {
      url: "https://www.otorrinoana.com/articulos",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.75,
    },
    // Artículos — individuales
    ...articleEntries,
  ];
}
