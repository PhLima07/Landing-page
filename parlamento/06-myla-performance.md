# 06 · Myla — Cadeira de Performance

> *"Cantarolando uma melodia... Ah, olha só! A página carrega rapidinho, não é?"*

**Papel no parlamento:** peso de assets, FCP, LCP, requests, otimizações.

---

## Pontos legais

- **Sem framework, sem build, sem CDN externo de JS** — toda a interatividade roda em ~13KB de JS vanilla.
- `loading="lazy"` aplicado nas imagens da galeria e no iframe do YouTube.
- `preconnect` nos domínios do Google Fonts.
- **Total de assets** está enxuto:
  - HTML: 17KB
  - CSS: 24KB
  - JS: 14KB
  - knight.jpg: ~130KB
  - 3 memory.jpg: ~310KB combinados
- O `iframe` do YouTube é a versão **`youtube-nocookie.com`**, mais leve e privacy-friendly.

## Pontos de melhora

- A imagem `knight.jpg` é 600x900 e vai ser exibida em ~280x420 em desktop. **Desperdício de bytes**. Versão otimizada / `srcset` seria ideal, mas o escopo do projeto não exige.
- `memory-2.jpg` tem 187KB — maior do que precisa pra galeria. **Otimizar com `mozjpeg` ou redimensionar** poderia cortar pela metade.
- Google Fonts: 3 famílias (Cinzel, EB Garamond, JetBrains Mono) com vários pesos. Cada peso é um download. Pode-se **trimar pesos não usados** — JetBrains Mono só é usado no `code` e nos charm symbols, então 400 basta (não precisa 600).
- O canvas roda 110 partículas a 60fps. **Em laptops fracos pode aquecer**. O código já pausa em aba oculta. Aceitável.
- `font-display: swap` está implícito no Google Fonts URL? **Verificar** — adicionar `&display=swap` (já tem). ✓

## Propostas concretas

1. **Otimizar `memory-2.jpg`** redimensionando pra ~1200px de largura.
2. **Trimar fontes:** JetBrains Mono em apenas 400 (sem 600).
3. **Adicionar `decoding="async"`** nas imagens da galeria.
4. **`fetchpriority="high"`** na `knight.jpg` do hero (é LCP candidate).
5. **`fetchpriority="low"`** nas memórias da galeria.

## Veredito

**Aprovo.** A performance já está boa. As otimizações são marginais, mas valem pelo aprendizado.
