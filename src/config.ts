export const WHATSAPP_GROUP_URL: string | null = 'https://chat.whatsapp.com/Kk6RnDfOvLLF2u88wbEgV4'
export const META_PIXEL_ID: string | null = null

export function getWhatsappGroupUrl() {
  if (!WHATSAPP_GROUP_URL) return null

  const url = new URL(WHATSAPP_GROUP_URL)
  const currentParams = new URLSearchParams(window.location.search)

  currentParams.forEach((value, key) => {
    if (key.startsWith('utm_') || key === 'fbclid') url.searchParams.set(key, value)
  })

  return url.toString()
}
