# 09 · Grimm — Cadeira da Polidez e Micro-interações

> *"A nightmare reignited. Hahaha! O detalhe... o detalhe é tudo, meu caro."*

**Papel no parlamento:** micro-interações, timing de animação, transições, feedback tátil-visual.

---

## Pontos legais

- Os **hovers dos charms** sobem 6px com glow dourado — **timing certo** (280ms) e easing certo (`cubic-bezier(.4,.0,.2,1)`).
- O **toggle de tema** com `rotate(20deg)` no hover do botão é um toque pequeno e satisfatório.
- A **animação `floatY`** do Knight no hero (8s ease-in-out) é **lenta o suficiente** para ser hipnótica, não distrativa.
- A `dreamPulse` na overlay do easter egg é **2.6s** — tempo perfeito de fôlego do sonho.
- A `bob` do scroll hint pulsa em **2.4s** — convida sem incomodar.
- O **estado `is-copied`** do botão de e-mail tem transição opacity suave.

## Pontos de melhora

- O **botão "Falar com o Mensageiro"** (ghost) ganha border azul no hover, mas **não eleva** (sem `translateY`). Ficou ímpar comparado com o primário. **Aplicar `translateY(-2px)`** também (já tem ✓ — confirmado).
- Os links do nav têm underline animado no hover, mas em mobile (menu hambúrguer) **o underline some** porque a regra `::after { display: none }` em mobile. Aceitável.
- O **botão de copiar** quando muda para "Copiado!" troca via `opacity` de uma camada — bom, **mas o tamanho do botão pode "saltar"** se "Falhou" for maior que "Copiar". Garantir `min-width` (✓ já tem `min-width: 110px`).
- A **transição entre temas** muda `color` em 520ms, mas elementos com `border-color` mudam mais rápido. **Sincronizar** todos para 520ms.
- O **scroll suave** para âncoras: não está habilitado. Adicionar `scroll-behavior: smooth` no `html`.
- A **`gallery__item:hover`** faz scale + filter saturação. Pode ser mais cinematográfico com **delay sutil entre os dois efeitos** — mas é refino.

## Propostas concretas

1. `html { scroll-behavior: smooth; }` com fallback para `prefers-reduced-motion`.
2. Sincronizar transições de tema: o `body` já transita `background-color` e `color` em 520ms. Replicar nas bordas dos componentes.
3. Adicionar **scroll progress bar** dourada de 2px no topo (sincronizada com a posição da página).
4. Hover nos **chips de filtro**: micro-elevação `translateY(-1px)`.

## Veredito

**Aprovo.** A camada de micro-interações já é o **diferencial** da página. Os ajustes amplificam o que já está bom.
