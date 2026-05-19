# Pedro Henrique Sousa Lima

Cartão de visita pessoal feito como primeiro projeto público da minha trajetória. Sou estudante de **Engenharia de Software** no **Ibmec BH** e este projeto é o **Desafio 01** proposto pela **Liga IbTech** — a liga de tecnologia da faculdade. Visual inspirado no jogo **Hollow Knight**.

## Sobre

Página única, em HTML, CSS e JavaScript puros — sem frameworks, sem build, sem atalhos. A ideia é simples: quando alguém perguntar o que eu faço, eu mando o link.

A identidade visual é inspirada em Hollow Knight: paleta de tinta noturna, fonte serifada (Cinzel), partículas luminosas flutuando ao fundo, habilidades estilizadas como medalhões circulares e um *easter egg* escondido pra quem conhece o jogo.

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
    ├── favicon.svg     # ícone (máscara estilizada)
    ├── knight.jpg      # imagem do hero (também serve como og:image)
    ├── hk-logo.png     # logo do jogo (atribuição no rodapé)
    ├── memory-1.jpg    # galeria — troque pela sua foto
    ├── memory-2.jpg    # galeria — troque pela sua foto
    └── memory-3.jpg    # galeria — troque pela sua foto
```

## Funcionalidades

### Interações JavaScript

- **Toggle de tema claro/escuro** — alterna `data-theme` no `<html>`, persiste em `localStorage` e respeita `prefers-color-scheme` na primeira visita.
- **Botão de copiar e-mail** — usa Clipboard API com fallback, dá feedback visual por ~2 segundos.
- **Animação de entrada** — seções fazem fade-in conforme entram na viewport via `IntersectionObserver`.
- **Filtro de habilidades** — filtra os cards por categoria (Frontend / Ferramentas / Paixões).
- **Menu mobile** — abre/fecha no hambúrguer, fecha com Esc e ao clicar fora.
- **Contador animado** — anima o número do ano de nascimento quando entra na viewport.

### Toques criativos (autorais)

- **Partículas em canvas** ao fundo que reagem ao cursor, criando uma atmosfera abstrata.
- **Cards de habilidade** estilizados como medalhões circulares com símbolo central e custo numérico, inspirados nos Charms do jogo.
- **Easter egg escondido** — o Konami Code (↑ ↑ ↓ ↓ ← → ← → B A) ativa uma overlay temática como homenagem ao jogo.
- **Tipografia & paleta** — Cinzel para títulos, EB Garamond para corpo e tons de tinta/parchment.

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

Liga IbTech · Ibmec BH · 2026.1
