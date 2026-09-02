import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const outputPath = fileURLToPath(new URL('../dist/index.html', import.meta.url))
const oembedOutputPath = fileURLToPath(new URL('../dist/oembed.json', import.meta.url))
const candidates = [
  process.env.SITE_URL,
  process.env.URL,
  process.env.DEPLOY_PRIME_URL,
  process.env.CF_PAGES_URL,
  'https://fisiolar-propuesta2.netlify.app',
]

let siteOrigin

for (const candidate of candidates) {
  if (!candidate) continue

  try {
    siteOrigin = new URL(candidate).origin
    break
  } catch {
    // Ignore malformed optional environment values and try the next source.
  }
}

if (!siteOrigin) {
  throw new Error('No se pudo determinar la URL pública para los metadatos sociales.')
}

const html = await readFile(outputPath, 'utf8')
const oembed = await readFile(oembedOutputPath, 'utf8')
const finalizeHtml = (pageUrl) => html
  .replaceAll('__SITE_URL__', siteOrigin)
  .replaceAll('__PAGE_URL__', pageUrl)

const finalizedHtml = finalizeHtml(`${siteOrigin}/`)

if (finalizedHtml.includes('__SITE_URL__') || finalizedHtml.includes('__PAGE_URL__')) {
  throw new Error('Quedaron marcadores de URL sin reemplazar en dist/index.html.')
}

await writeFile(outputPath, finalizedHtml, 'utf8')
await writeFile(oembedOutputPath, oembed.replaceAll('__SITE_URL__', siteOrigin), 'utf8')
console.log(`Metadatos sociales configurados para ${siteOrigin}`)
