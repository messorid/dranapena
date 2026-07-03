export const PHONE_DISPLAY = '+58 414-0731821'
export const PHONE_WA = '584140731821'
export const EMAIL = 'otorrinoana.orl@gmail.com'
export const INSTAGRAM = '@otorrinoana'
export const SITE_URL = 'https://www.otorrinoana.com'

export const WA_URL = `https://wa.me/${PHONE_WA}`

export function waUrl(text = '') {
  if (!text) return WA_URL
  return `${WA_URL}?text=${encodeURIComponent(text)}`
}

export const LOCATIONS = {
  barinas: [
    {
      name: 'Unidad Quirúrgica del Centro',
      city: 'Barinas',
      note: 'Lun a vie, 8am–6pm (excepto miércoles) · Previa cita',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Unidad+Quirurgica+del+Centro+Barinas+Venezuela',
    },
    {
      name: 'Centro Médico Belén',
      city: 'Sabaneta',
      note: 'Miércoles en la tarde · Previa cita',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Centro+Medico+Belen+Sabaneta+Barinas+Venezuela',
    },
  ],
}
