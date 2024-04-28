import type { APIRoute } from 'astro'
import sharp from 'sharp'
import ico from 'sharp-ico'
import path from 'node:path'

// relative to project root
const faviconSrc = path.resolve('src/images/favicon.png')

export const GET: APIRoute = async () => {
  // resize to 32px PNG
  const buffer = await sharp(faviconSrc).resize(32).toFormat('png').toBuffer()
  const buffer32 = await sharp(faviconSrc).resize(32).toFormat('png').toBuffer()
  const buffer16 = await sharp(faviconSrc).resize(16).toFormat('png').toBuffer()

  // generate ico
  const icoBuffer = ico.encode([buffer, buffer16, buffer32])

  return new Response(icoBuffer, {
    headers: { 'Content-Type': 'image/x-icon' }
  })
}