# Guia de Estudo — Cartão de Visita Pessoal

> Este guia explica **cada parte** do projeto, com o **porquê** de cada decisão.
> Leia antes da avaliação. O objetivo é que você consiga abrir qualquer arquivo,
> apontar pra qualquer trecho e explicar com suas palavras.

---

## 1. Visão geral — como a página é montada

A página é feita com **3 arquivos** que têm papéis separados:

| Arquivo | Papel | Analogia |
|---|---|---|
| `index.html` | **Estrutura** — o conteúdo e a organização | O esqueleto |
| `style.css` | **Aparência** — cores, fontes, espaçamento, layout | A pele e a roupa |
| `script.js` | **Comportamento** — interações, cliques, animações | Os músculos |

**Por que separar?** Porque cada arquivo tem uma responsabilidade. Se eu quiser
mudar uma cor, vou no CSS. Se quiser mudar um texto, vou no HTML. Se quiser mudar
o que acontece num clique, vou no JS. Isso se chama **separação de
responsabilidades** e deixa o código fácil de manter.

O HTML "chama" os outros dois:
- No `<head>`: `<link rel="stylesheet" href="style.css">` carrega o CSS.
- Antes de fechar o `<body>`: `<script src="script.js" defer></script>` carrega o JS.

**O `defer`** faz o navegador baixar o JS sem travar a renderização da página, e
só executar depois que o HTML inteiro foi lido. Sem `defer`, o script poderia
rodar antes dos elementos existirem e dar erro.

---

## 2. index.html — a estrutura

### 2.1 O `<head>` — informações que o usuário não vê

O `<head>` tem dados sobre a página, não o conteúdo dela:

- `<meta charset="UTF-8">` — define a codificação de caracteres. É o que faz
  acentos (á, ç, ã) aparecerem certo.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` —
  diz pro celular renderizar a página na largura real da tela. Sem isso, o
  site fica minúsculo no mobile.
- `<meta name="description">` — o resumo que aparece no Google.
- `<meta property="og:...">` — as **Open Graph tags**. São o que faz o link
  ficar bonito (com título, descrição e imagem) quando você compartilha no
  WhatsApp, LinkedIn, etc.
- `<title>` — o texto da aba do navegador.
- `<link rel="icon" ...>` — o favicon, o ícone da aba.
- Os `<link>` de fonte — carregam Cinzel, EB Garamond e JetBrains Mono do
  Google Fonts. O `preconnect` antes deles abre a conexão com o servidor das
  fontes mais cedo, deixando o carregamento mais rápido.

### 2.2 As tags semânticas — o `<body>`

"Semântica" quer dizer que a tag **descreve o que o conteúdo é**, não só
"uma caixa". Comparado: `<div>` é uma caixa genérica; `<header>` diz "isto
é um cabeçalho".

| Tag | O que representa | Onde uso |
|---|---|---|
| `<header>` | Cabeçalho do site | Topo: logo, navegação, botão de tema |
| `<nav>` | Bloco de navegação | O menu de links |
| `<main>` | Conteúdo principal | Tudo entre o header e o footer |
| `<section>` | Um bloco temático | Sobre, Habilidades, Galeria, etc. |
| `<article>` | Conteúdo independente | (uso pontual) |
| `<aside>` | Conteúdo complementar | O card de stats, o bloco "Em construção" |
| `<footer>` | Rodapé | Créditos e atribuição |
| `<figure>` / `<figcaption>` | Imagem + legenda | Itens da galeria |

**Por que isso importa?** Dois motivos:
1. **Acessibilidade** — leitores de tela (usados por pessoas cegas) usam essas
   tags pra navegar. "Pular pro `<main>`", "listar as `<section>`".
2. **SEO** — o Google entende melhor a estrutura da página.

### 2.3 Hierarquia de títulos

Existe **um único `<h1>`** na página (o nome "Pedro Henrique Sousa Lima").
Cada seção tem um `<h2>`. Subtítulos dentro de seção seriam `<h3>`.

**Regra:** nunca pular nível (não ir de `<h1>` direto pra `<h3>`). É como o
sumário de um livro — capítulo, depois subcapítulo, na ordem.

### 2.4 Imagens

Toda `<img>` tem:
- `alt="..."` — texto que descreve a imagem. Se a imagem não carregar, ou se
  a pessoa usa leitor de tela, esse texto é lido. Imagem decorativa leva
  `alt=""` (vazio, de propósito).
- `width` e `height` — as dimensões. Isso reserva o espaço da imagem **antes**
  dela carregar, evitando que o texto "pule" enquanto a página monta (isso se
  chama *layout shift*).
- `loading="lazy"` — nas imagens da galeria. Faz o navegador só baixar a imagem
  quando ela está perto de aparecer na tela. Economiza dados.
- `loading="eager"` + `fetchpriority="high"` — na imagem do hero, porque ela
  aparece logo de cara e deve carregar com prioridade.

### 2.5 Links externos

Todo link que sai do site tem:
```html
<a href="..." target="_blank" rel="noopener noreferrer">
```
- `target="_blank"` — abre em nova aba.
- `rel="noopener noreferrer"` — segurança. Sem isso, a página aberta poderia,
  via JavaScript, manipular a sua página original. É uma falha conhecida.

---

## 3. style.css — a aparência

### 3.1 O reset (no topo do arquivo)

```css
*, *::before, *::after { box-sizing: border-box; }
* { margin: 0; }
```

Cada navegador tem estilos padrão diferentes. O **reset** zera essas diferenças
pra todos começarem iguais.

O `box-sizing: border-box` é o mais importante: faz com que `width` e `height`
incluam o padding e a borda. Sem isso, dar `width: 100px` + `padding: 20px`
resultaria num elemento de 140px — confuso. Com `border-box`, 100px é 100px.

### 3.2 Variáveis CSS (`:root`)

No topo do CSS tem o bloco `:root { ... }` com dezenas de **variáveis**:

```css
:root, [data-theme="dark"] {
  --bg: #0a0d14;        /* cor de fundo */
  --text: #e8e3d0;      /* cor do texto */
  --gold: #c9a96e;      /* dourado dos detalhes */
  /* ...e muitas outras */
}
```

Uma variável é um valor com nome. Depois eu uso assim: `color: var(--text);`.

**Por que usar variáveis?**
1. **Consistência** — a mesma cor exata em todo lugar.
2. **Manutenção** — pra mudar o dourado do site inteiro, mudo **uma linha**.
3. **Temas** — é o truque que faz o tema claro/escuro funcionar (ver abaixo).

Tem variáveis pra **paleta** (cores), **tipografia** (`--fs-xs` até
`--fs-display`, 8 tamanhos de fonte) e **espaçamento** (`--sp-1` até `--sp-10`).

### 3.3 Como o tema claro/escuro funciona

Existem dois conjuntos de variáveis:

```css
:root, [data-theme="dark"] { --bg: #0a0d14;  --text: #e8e3d0; }
[data-theme="light"]       { --bg: #e6dfc6;  --text: #1a1f2a; }
```

O `<html>` tem um atributo `data-theme`. Quando ele é `"dark"`, valem as cores
escuras; quando é `"light"`, as claras.

**O segredo:** todo o resto do CSS usa `var(--bg)`, `var(--text)`, etc. — nunca
cores fixas. Então, quando o JavaScript troca o `data-theme`, **todas** as cores
mudam de uma vez, sem precisar mexer em cada elemento. Trocar 1 atributo
repinta o site inteiro.

### 3.4 Layout — Flexbox e Grid

São as duas formas modernas de posicionar elementos:

- **Flexbox** (`display: flex`) — organiza coisas **numa linha** (ou coluna).
  Uso no header (logo de um lado, menu do outro) e nos botões.
- **Grid** (`display: grid`) — organiza coisas **numa grade** (linhas e
  colunas). Uso na galeria, nos cards de habilidade, no card de stats.

Exemplo dos cards de habilidade:
```css
.charms {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: var(--sp-5);
}
```
Isso diz: "crie quantas colunas couberem, cada uma com no mínimo 220px de
largura, com espaço de `--sp-5` entre elas". A grade se ajusta sozinha ao
tamanho da tela.

### 3.5 Responsividade — media queries

A página funciona de **360px** (celular pequeno) até **1920px** (monitor
grande). Isso é feito com **media queries**:

```css
@media (max-width: 680px) {
  /* estilos que só valem quando a tela tem 680px ou menos */
}
```

Tenho breakpoints em 880px, 680px, 480px e 380px. Em cada um, ajusto o layout:
no mobile o menu vira hambúrguer, os botões viram largura cheia, a imagem do
hero muda de posição, etc.

Também uso `clamp()` em vários tamanhos:
```css
font-size: clamp(3.25rem, 9vw, 7rem);
```
Isso diz: "o tamanho é 9% da largura da tela, mas nunca menor que 3.25rem nem
maior que 7rem". A fonte escala suave sem eu precisar de mil media queries.

### 3.6 Unidades — rem, %, vw, px

- `rem` — relativa ao tamanho de fonte base. Uso em tipografia e espaçamento.
  Se o usuário aumenta a fonte do navegador, tudo escala junto.
- `%` e `fr` — pra layout (larguras flexíveis).
- `vw` / `vh` — porcentagem da largura/altura da janela.
- `px` — só em detalhes finos (bordas, sombras).

### 3.7 Estados :hover e :focus

- `:hover` — quando o mouse passa por cima. Uso pra dar feedback (botão muda
  de cor, card sobe um pouco).
- `:focus-visible` — quando o elemento está selecionado pelo teclado (tab).
  Mostro um contorno (`outline`). **Nunca** removo o foco sem substituir —
  isso quebraria a navegação por teclado, que é acessibilidade.

Tudo isso tem `transition`, que faz a mudança ser suave em vez de brusca.

---

## 4. script.js — o comportamento

### 4.1 A estrutura geral

O arquivo inteiro está dentro de uma **IIFE** (Immediately Invoked Function
Expression):
```js
(() => {
  "use strict";
  /* ...todo o código... */
})();
```

É uma função que se executa sozinha. **Por quê?** Pra não "vazar" variáveis pro
escopo global da página. Tudo que defino fica isolado aqui dentro.

O `"use strict"` ativa o **modo estrito** do JavaScript, que transforma erros
silenciosos em erros visíveis — ajuda a pegar bugs.

Tem dois atalhos no topo:
```js
const $  = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));
```
`$` acha **um** elemento; `$$` acha **vários** e devolve como lista. É só pra
escrever menos.

O código é dividido em **módulos** — cada um cuida de uma funcionalidade e tem
uma função `init()`. No fim, a função `boot()` chama todos os `init()`:
```js
const boot = () => {
  Theme.init();
  CopyEmail.init();
  /* ...etc... */
};
```
E `boot()` roda quando o HTML termina de carregar (evento `DOMContentLoaded`).

### 4.2 Módulo Theme — tema claro/escuro

O que faz:
1. Na primeira visita, lê a preferência do sistema operacional do usuário com
   `window.matchMedia("(prefers-color-scheme: light)")`. Se a pessoa usa o PC
   no modo claro, o site abre claro.
2. Quando o usuário clica no botão de tema, troca o atributo `data-theme` do
   `<html>` (lembra: isso repinta o site todo via variáveis CSS).
3. Salva a escolha no **`localStorage`** — uma "memória" do navegador que
   persiste mesmo depois de fechar a aba. Na próxima visita, respeita a
   escolha salva.

Ordem de prioridade: escolha salva > preferência do sistema.

### 4.3 Módulo CopyEmail — copiar e-mail

Quando clica no botão "Copiar":
1. Usa a **Clipboard API** (`navigator.clipboard.writeText`) pra copiar o
   e-mail pra área de transferência.
2. Se o navegador for antigo e não tiver essa API, usa um **fallback** com
   `document.execCommand("copy")` (método antigo).
3. Mostra um feedback visual ("Copiado!") por 2 segundos e volta ao normal.

O `async/await` aparece aqui porque copiar é uma operação que "pode demorar" —
o `await` espera ela terminar antes de mostrar o feedback.

### 4.4 Módulo Reveal — animação de entrada

As seções aparecem com um *fade-in* suave conforme você rola a página.

A peça-chave é o **`IntersectionObserver`**. É uma ferramenta do navegador que
"observa" elementos e avisa quando eles entram na área visível da tela.

**Por que não usar o evento de scroll direto?** Porque o scroll dispara
centenas de vezes por segundo — checar tudo ali trava a página. O
`IntersectionObserver` é otimizado pelo próprio navegador: ele só avisa quando
algo realmente entra na tela. É a forma correta.

Quando uma seção entra, eu adiciono a classe `is-visible` (que o CSS anima), e
depois uso `unobserve` pra parar de observar aquele elemento — a animação
dispara **uma vez só**.

### 4.5 Módulo CharmFilter — filtro de habilidades

Os cards de habilidade têm um atributo `data-category` ("frontend",
"ferramentas", "paixoes"). Os botões de filtro no topo têm `data-filter`.

Quando clico num filtro, o código percorre todos os cards e esconde
(`is-hidden`) os que não batem com a categoria escolhida. O filtro "Todos"
mostra tudo.

Também atualizo o atributo `aria-selected` dos botões — isso conta pra
acessibilidade, avisa o leitor de tela qual filtro está ativo.

### 4.6 Módulo SoulParticles — partículas no fundo

Desenha as partículas luminosas que flutuam no fundo, usando um `<canvas>` —
um elemento de HTML que serve pra desenhar com JavaScript.

Como funciona:
1. Cria uma lista de partículas, cada uma com posição, velocidade e brilho.
2. Numa função `tick()`, limpa o canvas e redesenha todas as partículas nas
   posições novas. O `requestAnimationFrame` chama o `tick()` ~60 vezes por
   segundo, criando a animação.
3. As partículas sobem devagar e reagem ao cursor (têm uma leve atração).
4. **Otimizações:** se o usuário tem `prefers-reduced-motion` ligado (pra quem
   sente enjoo com animação), o módulo nem liga. Em celulares, reduz o número
   de partículas. Quando a aba fica em segundo plano, pausa pra economizar.

### 4.7 Módulo DreamNail — o easter egg

O "easter egg" escondido. Ativa com o **Código Konami**:
↑ ↑ ↓ ↓ ← → ← → B A.

Como funciona — uma **máquina de estado**:
- Tem uma variável `idx` que marca em que ponto da sequência você está.
- Cada tecla apertada: se for a próxima esperada, `idx` avança. Se errar,
  `idx` volta a zero (recomeça).
- Quando `idx` chega ao fim da sequência, abre o overlay.

**No celular** não tem teclado de setas, então traduzi:
- **Swipes** (arrastar o dedo) viram as setas: arrastar pra cima = ↑, etc.
- Depois de 8 swipes, **2 toques** rápidos equivalem ao B e ao A.

Tem um indicador discreto no canto que aparece depois de 3 acertos, mostrando
o progresso com bolinhas (●●●○○○○○○○).

### 4.8 Módulos menores

- **MobileNav** — controla o menu hambúrguer no celular: abre/fecha no clique,
  fecha ao apertar Esc ou clicar fora.
- **GeoCounter** — anima o número do ano de nascimento (conta de 0 a 2007)
  quando ele entra na tela. Usa `IntersectionObserver` (igual o Reveal) pra
  saber a hora de começar.
- **ScrollProgress** — a barrinha dourada no topo, que enche conforme você
  rola a página. Calcula: quanto já rolei ÷ quanto dá pra rolar no total.
- **FooterYear** — coloca o ano atual no rodapé automaticamente, com
  `new Date().getFullYear()`. Assim o copyright nunca fica desatualizado.

---

## 5. Decisões — o "por quê" das escolhas

O avaliador pode perguntar "por que você usou X?". Respostas:

- **Por que sem framework (sem React, Bootstrap)?** Porque o objetivo do
  projeto é aprender HTML, CSS e JavaScript de verdade. Framework seria um
  atalho que esconde o fundamento.
- **Por que `clamp()` na tipografia?** Pra fonte escalar suave entre mobile e
  desktop sem precisar de várias media queries só pra tamanho de texto.
- **Por que variáveis CSS?** Consistência e, principalmente, pra fazer o tema
  claro/escuro funcionar trocando um atributo só.
- **Por que `IntersectionObserver` e não evento de scroll?** Performance — o
  observer é otimizado pelo navegador; o scroll dispara demais e trava.
- **Por que 3 fontes do Google?** Cinzel é a de título (decorativa, dá a
  identidade), EB Garamond é a de corpo (serifada, fácil de ler em parágrafo),
  JetBrains Mono é monoespaçada (uso nos símbolos dos cards e em trechos de
  código).
- **Por que `defer` no script?** Pra não travar a renderização da página e
  garantir que o HTML existe antes do JS rodar.

---

## 6. Como fazer uma alteração ao vivo

O avaliador pode pedir uma mudança na hora. Onde mexer:

| Pedido | Onde | O que fazer |
|---|---|---|
| "Muda essa cor" | `style.css`, bloco `:root` | Trocar o valor da variável (ex.: `--gold`) |
| "Muda esse texto" | `index.html` | Achar o texto e editar |
| "Muda a cor só no tema escuro" | `style.css`, bloco `[data-theme="dark"]` ou `:root` | Editar a variável lá |
| "Aumenta esse espaçamento" | `style.css` | Trocar o `gap`, `margin` ou `padding`, de preferência usando uma variável `--sp-*` |
| "Adiciona um item de habilidade" | `index.html` | Copiar um bloco `<li class="charm">` e editar |

**Dica:** abra o DevTools (tecla F12), aba "Elements". Você consegue clicar em
qualquer elemento e ver/testar o CSS dele ali mesmo, ao vivo.

---

## 7. Resumo de uma frase por arquivo

- **index.html** — define a estrutura e o conteúdo, com tags semânticas pra
  cada parte ter significado.
- **style.css** — define a aparência usando variáveis pra cor/fonte/espaço,
  Flexbox e Grid pro layout, e media queries pra responsividade.
- **script.js** — define o comportamento em módulos isolados, cada um com uma
  responsabilidade, todos iniciados pela função `boot()`.

Se você entendeu este guia, consegue explicar o projeto pra qualquer pessoa.
