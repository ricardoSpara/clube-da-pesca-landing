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
- ID do Pixel/analytics: pendente (`META_PIXEL_ID` em `src/config.ts`)
- Os CTAs direcionam ao grupo configurado. Nenhum Pixel é carregado enquanto o ID estiver pendente.

Os parâmetros `utm_*` e `fbclid` recebidos pela landing são preservados no link de saída.

## Antes do lançamento

Defina o ID de analytics da pesca. Escolha o domínio público e atualize metadados canônicos e sitemap antes da publicação. Esta cópia ainda não está pronta para publicação.
