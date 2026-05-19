# 03 · Bardoon — Cadeira de Acessibilidade

> *"Hum. Pondere com cuidado. Cada visitante precisa chegar aonde quer."*

**Papel no parlamento:** WCAG, leitores de tela, contraste, teclado, foco, ARIA.

---

## Pontos legais

- **`:focus-visible` global** definido com outline em `--soul-glow` e `outline-offset`. Foco visível, não removido.
- **Skip link** presente (`Pular para o conteúdo`) — pouca gente lembra disso.
- `aria-label` no botão de tema, hambúrguer, copiar e-mail.
- `alt` descritivos nas imagens da galeria (não é "imagem").
- Suporte explícito a **`prefers-reduced-motion`**: as animações de `reveal`, particles e float são desligadas.
- Links externos com `target="_blank"` **e** `rel="noopener noreferrer"`.

## Pontos de melhora

- O **tema claro** precisa ser auditado: `--text-mute` (`#7a7660`) sobre `--bg` (`#e6dfc6`) chega perto do limite de contraste 4.5:1, mas precisa subir um pouco pra garantir.
- A `.dream-hint` no rodapé tem `cursor: help` e `title` — bom — mas leitores de tela ignoram `title` consistentemente. Adicionar `aria-label`.
- O **hint do Konami** está num `<span aria-hidden>` no rodapé — pode ficar, mas o `title` deveria ser também acessível por foco. Tornar `<button>` ou `<span tabindex="0">` seria exagero. Aceitável como está.
- O `#dream-overlay` quando aberto não move foco pra dentro dele — pequena armadilha de acessibilidade. Pra um easter egg, é aceitável, mas adicionar `tabindex="-1"` + foco programático seria o ideal.
- O `<canvas>` tem `aria-hidden`, ótimo. Falta `role="presentation"`.
- O **botão "Copiar"** não anuncia "copiado" pra leitores de tela. Adicionar `aria-live="polite"` no feedback.

## Propostas concretas

1. **Tema claro:** aumentar contraste de `--text-mute` (de `#7a7660` para algo como `#5e5b48`) e `--text-soft` (de `#4a4836` ok, manter ou escurecer levemente).
2. `aria-live="polite"` no `.copy-btn__feedback` para anunciar "Copiado!".
3. `aria-label` na `.dream-hint` (em vez de só `title`).
4. Adicionar `lang="pt-BR"` (já tem, conferido — manter).
5. Mover foco para `#dream-overlay` quando ativo, e devolver no fechamento.

## Veredito

**Aprovo, com as 3 primeiras condições obrigatórias.** O resto é refino e melhora boas práticas.
