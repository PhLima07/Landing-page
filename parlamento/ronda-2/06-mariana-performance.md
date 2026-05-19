# 06 · Mariana Pires — Performance Engineer / SRE

**Background:** 8 anos. Trabalha com Core Web Vitals e otimização de assets em e-commerce.

---

## Métricas estimadas (sem build, sem CDN)

Estimativa de Lighthouse (mobile, 4G):

| Métrica | Estimativa | Limiar bom |
|---|---|---|
| FCP | ~1.2s | < 1.8s ✓ |
| LCP | ~2.0s | < 2.5s ✓ |
| TBT | < 50ms | < 200ms ✓ |
| CLS | 0 | < 0.1 ✓ |
| Speed Index | ~1.8s | < 3.4s ✓ |

Lighthouse Performance estimado: **92-96**. Bom resultado para uma landing sem build.

## Análise de assets

- HTML: 19KB → ✓
- CSS: 27KB → ✓ (poderia ser minificado pra ~18KB, mas não exigido)
- JS: 15KB → ✓
- knight.jpg: 130KB → atende
- 3x memory.jpg: 310KB combinados → **memory-2.jpg (187KB) é o pesado** — mas como é lazy + below-fold, não afeta LCP
- hk-logo.png: 84KB → footer, lazy
- Google Fonts: ~70KB (3 famílias, vários pesos) → maior custo de network

**Maior oportunidade:** trimar pesos de fonte. JetBrains Mono está com 400 e 600, mas só uso visível é 400. CSS importa ambos.

## Pontos fortes

- `loading="lazy"` aplicado corretamente.
- `decoding="async"` agora presente nas memórias.
- `fetchpriority="high"` no Knight (LCP candidate).
- `preconnect` para fonts.gstatic.
- Canvas pausa em `visibilitychange` — economia de CPU.
- `iframe` do YouTube com `loading="lazy"` — não baixa até visível.

## Issues remanescentes

1. **Google Fonts URL pesa mais que precisa.** Trimar pesos.
2. **Canvas em mobile:** roda mesmo em devices de toque. Em telas pequenas, **110 partículas é exagero**. Cortar para ~40-50 em `pointer: coarse`.
3. **`hk-logo.png` é 84KB pra um logo que aparece em 110x68px.** Poderia ser SVG ou re-otimizado. Não bloqueia, mas é gordura.
4. **Não há `Cache-Control` configurado**, mas isso é responsabilidade do servidor (GitHub Pages cuida).

## Recomendações

1. Trimar Google Fonts para os pesos realmente usados (Cinzel 600, EB Garamond 400/500/italic, JetBrains Mono 400 apenas).
2. Reduzir contagem de partículas em `pointer: coarse`.
3. Opcional: substituir `hk-logo.png` por SVG ou imagem mais leve.

## Voto: APROVADO

Performance está acima do esperado. As otimizações são marginais. Concordo com as mudanças de copy propostas pelos outros — não impactam performance.
