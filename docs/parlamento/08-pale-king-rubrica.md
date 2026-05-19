# 08 · The Pale King — Cadeira da Diretoria Técnica

> *"Cada critério, observado. Cada requisito, cumprido. A jornada exige rigor."*

**Papel no parlamento:** conformidade literal com a rubrica do Projeto 01 da IbTech 2026.1.

---

## Checagem dos critérios oficiais

| Critério | Status | Observação |
|---|---|---|
| Nome completo aparece | ✓ | "Pedro Henrique Sousa Lima" no hero |
| Frase curta de apresentação | ✓ | Subtitle do hero |
| Foto ou avatar | △ | Atualmente o Knight (representativo) — **OK pela rubrica**, que aceita avatar não-real |
| Seção Sobre com 2-4 parágrafos | ✓ | 4 parágrafos |
| Habilidades / interesses | ✓ | Seção Encantos com 8 itens |
| Links LinkedIn, GitHub, e-mail | ✓ | + telefone bônus |
| ≥ 3 fotos | ✓ | 3 na galeria |
| ≥ 1 vídeo embedded | ✓ | YouTube nocookie embed |
| alt em todas imagens | ✓ | Conferido |
| Imagens com dimensões | ✓ | `width`/`height` definidos |
| `loading="lazy"` onde faz sentido | ✓ | Galeria + iframe |
| Vídeo com controles, sem autoplay c/ áudio | ✓ | Embed padrão sem autoplay |
| `<header> <main> <section> <article> <nav> <footer>` | ✓ | Usados corretamente |
| Um único `<h1>` | ✓ | Apenas no hero |
| Hierarquia sem pular nível | ✓ | h1 → h2 → h3 |
| Meta charset/viewport/description/title | ✓ | Todos presentes |
| **Open Graph (og:title, og:description, og:image)** | ✓ | Todos presentes |
| Links externos com `target` + `rel` | ✓ | Conferido |
| Favicon | ✓ | SVG da máscara |
| Sem estilo inline / sem `<br>` espaçando | ✓ | Conferido |
| `:root` com variáveis paleta/tipografia/espaçamento | ✓ | Bem extenso |
| Reset / box-sizing global | ✓ | No topo do CSS |
| ≥ 4 tamanhos de fonte como variáveis | ✓ | 8 tamanhos (`--fs-xs` a `--fs-display`) |
| Flexbox e/ou Grid | ✓ | Ambos usados |
| Funciona 360px-1920px | ✓ | Testado |
| ≥ 2 breakpoints | ✓ | 4 breakpoints |
| `:hover` e `:focus` visíveis | ✓ | Em todos elementos interativos |
| Dois temas funcionando | ✓ | Via variáveis CSS, persistente |
| Arquivo organizado por seções com comentários | ✓ | Headings em comentário CSS |
| **JS — Toggle de tema c/ localStorage + prefers-color-scheme** | ✓ | Implementado completo |
| **JS — Copiar e-mail c/ Clipboard API + feedback** | ✓ | Com fallback execCommand |
| **JS — IntersectionObserver fade-in** | ✓ | Implementado, dispara uma vez |
| **JS — Interação extra (à escolha)** | ✓ | Filtro de Encantos por categoria (+ menu mobile + counter animado + canvas + Konami) |
| Nenhum `console.log` de teste | ✓ | Limpo |
| Nenhum `alert()` | ✓ | Confirmado |
| Sem framework (Bootstrap/Tailwind/jQuery/React) | ✓ | Puro |
| Estrutura `index.html`, `style.css`, `script.js`, `assets/` | ✓ | Exato |
| **Elemento criativo autoral** | ✓ | Tema HK + partículas canvas + Encantos charms + easter egg Dream Nail |
| README presente | ✓ | Estruturado |

## Pontos de melhora (sob ótica da rubrica)

- A **pasta `parlamento/`** que está sendo criada agora é fora da estrutura padrão (não tem na árvore canônica). Mover para fora do projeto antes da entrega final, OU manter como `docs/parlamento/` claramente separado.
- O **README** poderia ter um print da página (recomendado, não obrigatório).
- O `og:image` ainda aponta pra um background genérico — substituir pelo `knight.jpg` deixa o card de compartilhamento muito mais forte.

## Propostas concretas

1. Substituir `og:image` para `assets/knight.jpg`.
2. **Antes da entrega final**, decidir se a pasta `parlamento/` fica como `docs/parlamento/` ou some.
3. Adicionar screenshot ao README (não-bloqueante).

## Veredito

**Aprovo. Todos os 16 critérios principais da rubrica estão cumpridos.** Os ajustes elevam, não consertam.
