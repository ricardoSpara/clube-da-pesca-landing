# Clube da Pesca Landing

Landing page mobile-first do Clube da Pesca, preparada para divulgar promoções relacionadas à pesca.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Verificação

```bash
npm test
npm run lint
npm run build
```

## Integrações

- Link do grupo do WhatsApp: https://chat.whatsapp.com/Kk6RnDfOvLLF2u88wbEgV4 (`WHATSAPP_GROUP_URL` em `src/config.ts`)
- Meta Pixel: `1413752953721295` (`META_PIXEL_ID` em `src/config.ts`)
- Eventos: `PageView`, `ViewContent` e `Lead` nos cliques dos CTAs.
- Os CTAs direcionam ao grupo configurado e os parâmetros `utm_*` e `fbclid` são preservados.

## Antes do lançamento

Escolha o domínio público e atualize metadados canônicos e sitemap antes da publicação. Esta cópia ainda não está pronta para publicação.
