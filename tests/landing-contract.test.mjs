import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import test from 'node:test'

const root = new URL('../', import.meta.url)

async function source(path) {
  return readFile(new URL(path, root), 'utf8')
}

test('renders fishing promotion copy without inherited skincare claims', async () => {
  const html = await source('index.html')

  assert.match(html, /Clube da Pesca/)
  assert.match(html, /promoções de pesca/i)
  assert.match(html, /logo-clube-da-pesca\.svg/)
  assert.doesNotMatch(html, /skincare|dermocosméticos|proteção solar/i)
  assert.doesNotMatch(html, /\d+\s?mil\+|\d+%\s?off|sorteio|depoimentos/i)
})

test('directs every WhatsApp CTA to the configured fishing group', async () => {
  const [html, config, main] = await Promise.all([
    source('index.html'),
    source('src/config.ts'),
    source('src/main.ts'),
  ])

  assert.equal((html.match(/data-platform="whatsapp"/g) ?? []).length, 3)
  assert.equal((html.match(/aria-disabled="true"/g) ?? []).length, 0)
  assert.equal((html.match(/href="https:\/\/chat\.whatsapp\.com\/Kk6RnDfOvLLF2u88wbEgV4"/g) ?? []).length, 3)
  assert.match(config, /WHATSAPP_GROUP_URL: string \| null = 'https:\/\/chat\.whatsapp\.com\/Kk6RnDfOvLLF2u88wbEgV4'/)
  assert.match(main, /link\.href = '#dados-de-lancamento'/)
  assert.match(main, /event\.preventDefault\(\)/)
  assert.doesNotMatch(`${html}\n${config}`, /tr\.ee\/clubedoskincare|clubedoskincare/i)
  assert.match(config, /key\.startsWith\('utm_'\)/)
  assert.match(config, /key === 'fbclid'/)
})

test('shows the WhatsApp brand icon in every conversion button', async () => {
  const html = await source('index.html')

  assert.equal((html.match(/class="whatsapp-icon"/g) ?? []).length, 3)
  assert.equal((html.match(/<svg[^>]*class="whatsapp-icon"[^>]*aria-hidden="true"/g) ?? []).length, 3)
  assert.doesNotMatch(html, /☎/)
})

test('keeps analytics support pending and identifies each CTA placement', async () => {
  const [html, config, main] = await Promise.all([
    source('index.html'),
    source('src/config.ts'),
    source('src/main.ts'),
  ])

  assert.match(config, /META_PIXEL_ID: string \| null = null/)
  assert.match(html, /ID de analytics da pesca: pendente/)
  assert.doesNotMatch(`${html}\n${main}`, /915964627618020/)
  assert.match(main, /if \(META_PIXEL_ID\)/)
  assert.match(main, /PageView/)
  assert.match(main, /ViewContent/)
  assert.match(main, /'Lead'/)
  assert.match(main, /IntersectionObserver/)
  assert.match(main, /threshold:\s*\[0,\s*0\.25\]/)
  for (const placement of ['hero', 'final', 'mobile_sticky']) {
    assert.match(html, new RegExp(`data-placement="${placement}"`))
  }
})

test('provides responsive, accessible fishing brand metadata and markup', async () => {
  const [html, css] = await Promise.all([source('index.html'), source('src/styles.css')])

  assert.match(html, /Clube da Pesca \| Promoções de pesca/)
  assert.match(html, /property="og:image" content="\/logo-clube-da-pesca\.png"/)
  assert.match(html, /data-hero-cta/)
  assert.match(html, /data-sticky-cta/)
  for (const image of html.matchAll(/<img\b[^>]*>/g)) {
    assert.match(image[0], /\bwidth="\d+"/)
    assert.match(image[0], /\bheight="\d+"/)
  }
  assert.doesNotMatch(css, /100(?:s|d|l)?vh/)
  assert.doesNotMatch(css, /white-space:\s*nowrap/)
  assert.match(css, /@media\s*\(max-width:\s*359px\)/)
  assert.match(css, /@media\s*\(min-width:\s*768px\)/)
  assert.match(css, /prefers-reduced-motion:\s*reduce/)
  assert.match(css, /safe-area-inset-bottom/)
  assert.match(css, /overflow-x:\s*hidden/)
})

test('applies the approved palette and CTA states', async () => {
  const css = (await source('src/styles.css')).toLowerCase()

  for (const color of ['#318c91', '#b6e0dc', '#79c4c2', '#ffffff', '#eaf7f4']) {
    assert.match(css, new RegExp(color))
  }
  assert.doesNotMatch(css, /#9464d9|#713db5|#5c2f98|#f8f4fe|#efe7fc/)
  assert.match(css, /\.cta-primary:hover/)
  assert.match(css, /\.benefit-card/)
  assert.match(css, /footer\s*\{[^}]*background:\s*var\(--primary\)/s)
})

test('ships the supplied logo formats and local font', async () => {
  const html = await source('index.html')
  const files = [
    'public/logo-clube-da-pesca.svg',
    'public/logo-clube-da-pesca.png',
    'public/fonts/inter-latin.woff2',
  ]

  await Promise.all(files.map((path) => access(new URL(path, root))))
  assert.match(html, /logo-clube-da-pesca\.svg/)
  assert.match(html, /logo-clube-da-pesca\.png/)
})

test('does not carry over hosting configuration', async () => {
  await assert.rejects(access(new URL('vercel.json', root)))
})
