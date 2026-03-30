export default function sitemap() {
  return [
    {
      url: 'https://www.otorrinoana.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://www.otorrinoana.com/sobre-mi',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.otorrinoana.com/otorrinolaringologo-en-barinas',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.otorrinoana.com/otorrino-en-barinas',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
