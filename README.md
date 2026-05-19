# Pedro Henrique Sousa Lima — O Cavaleiro do Frontend

Cartão de visita pessoal feito como **Projeto 01** da Trilha Frontend da **IbTech 2026.1**, com inspiração visual no jogo **Hollow Knight**.

## Sobre

Página única, em HTML, CSS e JavaScript puros — sem frameworks, sem build, sem atalhos. A ideia é simples: quando alguém perguntar o que eu faço, eu mando o link.

A identidade é toda Hallownest: paleta de tinta noturna, fonte serifada ornada (Cinzel), partículas de *Soul* flutuando ao fundo, habilidades estilizadas como **Encantos (Charms)** com custo de Notches, e um *easter egg* escondido para quem conhece o jogo.

## Tecnologias

- HTML5 semântico (semântica completa, Open Graph, acessibilidade)
- CSS3 (Custom Properties, Flexbox, Grid, responsivo de 360px a 1920px, dois temas)
- JavaScript (vanilla) — sem bibliotecas externas
- Google Fonts: Cinzel, EB Garamond, JetBrains Mono

## Como rodar

Basta abrir o arquivo `index.html` no navegador. Nada para instalar, nada para compilar.

```bash
# opcional: servidor local pra evitar peculiaridades de file://
python3 -m http.server 8000
# acesse http://localhost:8000
```

## Estrutura

```
.
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── favicon.svg     # máscara do Cavaleiro
    ├── knight.svg      # silhueta do Cavaleiro (hero)
    ├── memory-1.jpg    # galeria — troque pela sua foto
    ├── memory-2.jpg    # galeria — troque pela sua foto
    ├── memory-3.jpg    # galeria — troque pela sua foto
    └── og-image.jpg    # imagem do Open Graph
```

## Funcionalidades

### Interações JavaScript

- **Toggle de tema claro/escuro** — alterna `data-theme` no `<html>`, persiste em `localStorage` e respeita `prefers-color-scheme` na primeira visita.
- **Botão de copiar e-mail** — usa Clipboard API com fallback, dá feedback visual por ~2 segundos.
- **Animação de entrada** — seções fazem fade-in conforme entram na viewport via `IntersectionObserver`.
- **Filtro de Encantos** — filtra as habilidades por categoria (Frontend / Ferramentas / Paixões).
- **Menu mobile** — abre/fecha no hambúrguer, fecha com Esc e ao clicar fora.
- **Contador animado** — anima a contagem de "Geo" quando entra na viewport.

### Toques criativos (autorais)

- **Partículas de Soul** desenhadas em `<canvas>` ao fundo, que reagem ao cursor.
- **Encantos (Charms)** — habilidades estilizadas como medalhões com símbolo central e custo em Notches, fiéis ao visual do jogo.
- **Easter egg do Dream Nail** — digite o Konami Code (↑ ↑ ↓ ↓ ← → ← → B A) em qualquer ponto da página e o reino entra em estado onírico, revelando uma essência.
- **Tipografia & paleta** — Cinzel para títulos, EB Garamond para corpo e tons de tinta/parchment fiéis a Hallownest.

## Acessibilidade

- Hierarquia de títulos respeitada (um `h1` por página, sem pular níveis).
- `alt` descritivo em todas as imagens.
- Estados de foco visíveis (`:focus-visible`).
- Suporte a `prefers-reduced-motion` (animações suaves desligadas).
- Skip link para o conteúdo principal.
- Links externos com `rel="noopener noreferrer"` e `target="_blank"`.

## Contato

- LinkedIn: <https://www.linkedin.com/in/pedro-henrique-sousa-lima-a506573b4/>
- GitHub: <https://github.com/PhLima07>
- E-mail: <pedrophslima@gmail.com>
- Telefone: (31) 99832-6612

---

> "Não em soluços, mas em chamas brilhantes."

IbTech · Ligas Tech IBMEC BH · 2026.1
