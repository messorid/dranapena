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
  barinas: {
    name: 'Unidad Quirúrgica del Centro',
    city: 'Barinas',
    note: '1 vez al mes · Previa cita',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Unidad+Quirurgica+del+Centro+Barinas+Venezuela',
  },
  caracas: [
    {
      name: 'Clínica Amay',
      city: 'Caracas',
      mapsUrl: 'https://www.google.com/maps/place/Clinica+AMAY/@10.4887676,-66.9358852,16z/data=!3m1!4b1!4m6!3m5!1s0x8c2a5f109d540cfb:0x74acda0d37a3177!8m2!3d10.4887676!4d-66.9358852',
    },
    {
      name: 'Clínica Bosque Ávila',
      city: 'Caracas',
      address: 'Calle Cantaura, entre Av. Libertador y Av. Maturín',
      mapsUrl: 'https://www.google.com/maps?q=CLINICA+BOSQUE+AVILA,+Calle+Cantaura+Entre+Avenida+Libertador,+Avenida+Matur%C3%ADn,+Caracas+1050',
    },
  ],
}
