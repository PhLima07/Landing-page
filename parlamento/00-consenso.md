# 00 · Consenso do Parlamento

> *"Em todos os reinos, em todas as eras — a concordância é rara. Mas aqui, ela foi alcançada."*

Este documento consolida **apenas as propostas que receberam concordância de TODOS os 9 membros do parlamento** (Hornet, Quirrel, Bardoon, Cornifer, Cloth, Myla, Salubra, The Pale King e Grimm).

---

## Mudanças aprovadas por unanimidade

### A. Hero (a primeira impressão)

1. **Imagem real do Knight** (já implementada — `assets/knight.jpg` substituiu `knight.svg`).
2. **Moldura dourada + glow** ao redor da imagem, tratamento de "pôster pendurado em Dirtmouth".
3. **Composição assimétrica em desktop** — texto à esquerda, Knight à direita, em vez de tudo centralizado.
4. **Hero subtitle reescrito** (mais curto e direto):
   > *"Aprendiz de código, errante de Hallownest. Construindo a própria forja."*
5. **`fetchpriority="high"`** na imagem do hero (LCP candidate).
6. **`text-shadow` discreto** no `hero__title` em mobile para legibilidade sobre o Knight semi-transparente.

### B. Conteúdo e narrativa

7. **Frase pessoal acima do vídeo:** *"O sonho que me empurrou pra cá."*
8. **Legenda discreta** sob "Geo coletado": `moedas de Hallownest, em ano`.
9. **Atribuição ao jogo** no rodapé usando `assets/hk-logo.png` (link discreto para a Team Cherry).

### C. Acessibilidade e contraste

10. **Tema claro:** subir contraste de `--text-mute` para `#5e5b48` (e revisar `--text-soft`).
11. **`aria-live="polite"`** no `.copy-btn__feedback` para anunciar "Copiado!" em leitores de tela.
12. **`role="presentation"`** no `#soul-canvas` (já tem `aria-hidden`, somar role).
13. **`aria-label`** na `.dream-hint` (em vez de só `title`).
14. **`◇`** ao lado da `dream-hint` como pista visual sutil.

### D. Layout e responsividade

15. **`scroll-margin-top: clamp(80px, 12vh, 110px)`** em `section[id]` para o sticky header não cobrir títulos.
16. **`.charms`** com **2 colunas forçadas** na faixa 700–920px (respiro intermediário).
17. **Letter-spacing do `section__kicker`** reduzido para `0.3em` em < 480px.

### E. Micro-interações e polidez

18. **`scroll-behavior: smooth`** no `html`, com fallback respeitando `prefers-reduced-motion`.
19. **Barra de progresso de leitura** (2px, dourada) fixa no topo da página — tematizada como gauge de Geo/Soul.
20. **Hover nos chips de filtro:** `translateY(-1px)` para feedback tátil.

### F. Performance

21. **`decoding="async"`** em todas as imagens da galeria.
22. **`fetchpriority="low"`** nas imagens da galeria (são lazy + below-the-fold).

### G. Segurança e padrões

23. **`sandbox="allow-scripts allow-same-origin allow-presentation"`** no iframe do YouTube.
24. **`og:image`** substituído por `assets/knight.jpg` (mais expressivo no compartilhamento).

---

## Mudanças propostas mas NÃO aprovadas por unanimidade

Estas ficaram fora porque pelo menos um membro hesitou ou questionou prioridade:

- **Cursor customizado (Nail tip)** — Cloth alertou que em mobile pode confundir; Bardoon levantou risco de bloquear acessibilidade.
- **Otimizar `memory-2.jpg`** com mozjpeg — Pale King apontou que o escopo do projeto não exige re-compressão; mantido como está.
- **Mover foco programaticamente para o Dream Overlay** — Bardoon reconheceu que para um easter egg lúdico, o custo cognitivo de implementar foco-trap completo não compensa.
- **Trimar pesos da fonte JetBrains Mono** — Myla aprovou, mas Hornet pediu para manter os pesos disponíveis caso a tipografia mono ganhe mais espaço futuramente.
- **Screenshot no README** — Pale King marcou como recomendado mas não-bloqueante; deixado para o Pedro decidir manualmente.

---

## Decisão final

**Todos os 9 membros assinaram o consenso acima.**

O Cavaleiro do Frontend de Pedro Henrique pode agora descer ao próximo nível.

> — Parlamento de Hallownest, sessão única.
