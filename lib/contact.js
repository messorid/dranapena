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
