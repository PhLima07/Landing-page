# 05 · Cloth — Cadeira de Mobile e Responsividade

> *"Hahaha! Não importa o tamanho da arena, importa se você se vira nela!"*

**Papel no parlamento:** breakpoints, telas pequenas, toque, performance percebida no mobile.

---

## Pontos legais

- **Três breakpoints reais** (880px, 680px, 380px) — não é só "mobile/desktop", é gradação.
- O **menu hambúrguer** abre, fecha no Esc, fecha clicando fora, fecha clicando num link. Trinca completa.
- `clamp()` na tipografia do hero — escala bem sem precisar de mil media queries.
- `aspect-ratio: 4 / 3` na galeria — evita layout shift quando imagens carregam.
- Botões do hero viram **full-width em mobile** — alvo de toque maior, certo.
- O Knight no hero **vira marca d'água no fundo** em mobile (`opacity: 0.18`), liberando espaço pro texto.

## Pontos de melhora

- O **grid de Encantos** com `auto-fill, minmax(220px, 1fr)` em telas de ~720-900px fica com **3-4 colunas espremidas**. Forçar **2 colunas** nessa faixa daria mais respiro.
- O `letter-spacing: 0.4em` do kicker pode estourar largura em 360px se o texto for longo. Reduzir em telas pequenas.
- A `gallery__item` com `aspect-ratio: 4/3` em telas verticais pequenas pode ficar pequena demais. Aceitável.
- O **canvas de Soul** roda em mobile também — verificar se mata bateria. O código tem `visibilitychange` (pausa quando aba some), mas não tem detecção de mobile/baixa potência. Aceitável pra escopo do projeto.
- O **hero em mobile** com `min-height: 80vh` está OK, mas o Knight de fundo (`opacity 0.18`) pode brigar com legibilidade do texto. Subir contraste do texto sobre ele.

## Propostas concretas

1. Adicionar breakpoint intermediário para `.charms`: em telas 700-920px, forçar `grid-template-columns: repeat(2, 1fr)`.
2. Reduzir `--fs-xs` letter-spacing pra `0.3em` em < 480px.
3. Adicionar `text-shadow` discreto no `hero__title` em mobile para melhor leitura sobre o Knight semi-transparente.
4. Verificar que o `tap target` dos chips de filtro não esteja abaixo de 44px de altura.

## Veredito

**Aprovo.** Mobile já funciona em 360px. Os ajustes são lapidação, não correção.
