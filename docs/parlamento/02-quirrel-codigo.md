# 02 · Quirrel — Cadeira de Engenharia Frontend

> *"Cada linha de código é uma escolha. Faça-a com calma."*

**Papel no parlamento:** qualidade de código, semântica HTML, arquitetura JS, padrões.

---

## Pontos legais

- O JS está **modularizado em IIFE com sub-módulos** (`Theme`, `CopyEmail`, `Reveal`...). Cada um tem `init()`. Limpo e escalável.
- O **fallback do `execCommand`** no copiar e-mail mostra cuidado com browsers antigos.
- Uso correto de **`IntersectionObserver`** ao invés de listener de scroll — não é detalhe trivial, é o caminho certo.
- HTML semântico bem aplicado: `header`, `main`, `section`, `article` (poderia ter mais articles, mas tudo OK), `footer`, `nav`.
- O CSS está **segmentado por seção com comentários** (`/* ============ Hero ============ */`) — facilita revisão.

## Pontos de melhora

- O `<header>` é sticky e o link âncora rola pra cima do `h2`, mas **o sticky cobre o topo da seção**. Precisa de `scroll-margin-top` nas sections.
- `iframe` do YouTube poderia ter `sandbox` e `referrerpolicy` mais restrito — já tem `referrerpolicy="strict-origin-when-cross-origin"`, falta só explicitar.
- Falta `prefers-reduced-motion` desativando o **canvas de Soul** explicitamente — o módulo trata, bom, mas vale documentar.
- O `<canvas>` decorativo está fora do `<main>`, certo, mas falta `role="presentation"`.
- `og:image` aponta pra `assets/og-image.jpg` que é um BG genérico — vale trocar por algo mais expressivo (a portrait do Knight).

## Propostas concretas

1. Adicionar `scroll-margin-top: clamp(80px, 12vh, 110px)` em `section[id]`.
2. `role="presentation"` no `#soul-canvas`.
3. Trocar `og:image` para `assets/knight.jpg` (visual mais forte na hora de compartilhar).
4. Adicionar `sandbox="allow-scripts allow-same-origin allow-presentation"` no iframe do YouTube.

## Veredito

**Aprovo.** A base de código é sólida. Os pontos de melhora são refinos, não correções estruturais.
