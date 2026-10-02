# Clube da Pesca — Landing Page Design

## Objetivo

Criar uma landing page independente para o Clube da Pesca, reaproveitando a estrutura técnica e os comportamentos de conversão da landing do Clube Skin Care. A página será preparada para divulgar promoções de pesca. O destino final dos CTAs e os dados específicos da comunidade serão definidos antes da publicação.

## Escopo

- Criar o projeto em `clube-da-pesca-landing` como uma cópia independente da aplicação Vite + TypeScript.
- Manter um histórico Git próprio no destino; não reutilizar o histórico da landing de origem.
- Preservar a estrutura mobile-first, os componentes de conversão, a preservação de UTMs e `fbclid`, o CTA móvel e o suporte atual a analytics.
- Usar a logo já fornecida em `assets/CLUBE DA PESCA.svg`.
- Aplicar a paleta fornecida para a identidade visual da página.
- Atualizar o nome técnico e as referências de marca que forem necessárias para a nova identidade.
- Tratar textos específicos de skincare, métricas da comunidade, links de grupo e identificadores de analytics herdados como dados temporários até receber as informações próprias do Clube da Pesca.
- Não publicar nem configurar hospedagem nesta etapa.

## Direção visual

A página manterá a hierarquia compacta da landing de origem, com identidade de pesca baseada nas cores fornecidas pelo usuário. As cores serão aplicadas aos fundos, bordas, destaques e elementos da logo sem introduzir tons de marca não informados.

| Uso | Cor |
| --- | --- |
| Cor principal e fundo da logo | `#318C91` |
| Borda externa | `#B6E0DC` |
| Faixa e destaques intermediários | `#79C4C2` |
| Texto e ícones sobre a logo | `#FFFFFF` |
| Fundo externo / fundo claro | `#EAF7F4` |

Os textos corridos preservarão contraste legível usando os tons neutros já existentes na aplicação. Os CTAs de WhatsApp continuarão identificáveis como ações para o WhatsApp.

## Estrutura e comportamento

O cabeçalho, hero, benefícios, CTA final, rodapé e CTA fixo móvel seguem a organização da aplicação de origem. O comportamento dos botões permanece no mesmo fluxo: CTAs apontam para o destino configurado, recebem `utm_*` e `fbclid`, e disparam os eventos de analytics existentes.

Nesta etapa, a estrutura é reutilizada como base. Conteúdo, prova social, link do grupo e analytics específicos do Clube da Pesca precisam ser confirmados antes de publicação, para que dados da landing de skincare não sejam tratados como informação final.

## Arquivos e ativos

- Manter Vite, TypeScript, scripts npm, lockfiles, código-fonte, testes e ativos necessários para executar o projeto.
- Copiar o SVG fornecido para a pasta pública ao integrá-lo à interface; preparar formatos derivados somente se forem necessários para compatibilidade ou desempenho.
- Não copiar `.git`, `node_modules` ou `dist` da aplicação de origem.
- Não reutilizar a documentação específica do Clube Skin Care como documentação do novo produto.

## Verificação

A validação deve confirmar que o projeto mantém a estrutura de execução da origem e que a nova identidade usa o SVG fornecido e as cores listadas. Testes automatizados existentes podem ser adaptados quando o conteúdo de pesca e os dados finais de conversão forem definidos. A página não será publicada nesta etapa.
