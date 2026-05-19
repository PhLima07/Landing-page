# Consenso Final do Parlamento — Versão Definitiva

> Este documento consolida apenas as mudanças aprovadas pelos **9 membros da Ronda 2** (Camila, Rafael, Bianca, Júlia, Felipe, Mariana, Luísa, Gustavo e Daniel).
>
> A diretiva central é: **manter 100% da identidade visual de Hollow Knight, reduzir a referência nominal ao jogo no copy.**

---

## Princípio orientador

> *"O visual já comunica Hollow Knight a quem reconhece. O texto não precisa repetir."* — Camila Andrade

A página deve **parecer Hollow Knight** mas **ler como um portfólio profissional** com Hollow Knight como ingrediente, não como vocabulário primário.

---

## Mudanças aprovadas por unanimidade

### A. Renomear títulos e kickers de seção

Críticos para acessibilidade (Bianca, WCAG 2.4.6), clareza pra recruiter (Júlia), profissionalismo (Camila, Rafael, Luísa) e teste de autoria (Felipe).

| Local | Antes | Depois |
|---|---|---|
| Kicker hero | `IbTech · Trilha Frontend · 2026.1` | mantido |
| Kicker seção 1 | `Capítulo I` | `01` |
| h2 seção 1 | `Sobre o Errante` | `Sobre` (com `Sobre o Errante` como subtítulo decorativo) |
| Kicker seção 2 | `Capítulo II` | `02` |
| h2 seção 2 | `Encantos Equipados` | `Habilidades` (sub: `Encantos`) |
| Kicker seção 3 | `Capítulo III` | `03` |
| h2 seção 3 | `Memórias de Hallownest` | `Galeria` (sub: `Memórias de Hallownest`) |
| Kicker seção 4 | `Capítulo IV` | `04` |
| h2 seção 4 | `Um Sonho que Volta` | `Inspiração` (sub: `Um sonho que volta`) |
| Kicker seção 5 | `Capítulo Final` | `05` |
| h2 seção 5 | `Falar com o Mensageiro` | `Contato` (sub: `Falar com o Mensageiro`) |

### B. CTAs do hero

| Antes | Depois |
|---|---|
| `Descer ao Reino` | `Conhecer mais` |
| `Falar com o Mensageiro` | `Ir ao contato` |

### C. Estatística "Geo coletado"

`Geo coletado: 2007` (com legenda longa) → simplesmente `Ano de nascimento: 2007`.

A animação do contador permanece. O ícone ◇ próximo ao número também.

### D. Hero — linha de estado atual

Adicionar uma linha curta, factual, abaixo do subtitle:

> *Atualmente cursando a trilha Frontend pela IbTech 2026.1 · Primeiro projeto público.*

Isso resolve o ponto repetido por Júlia, Luísa, Gustavo e Daniel: a página não comunica o que o Pedro está fazendo / buscando agora.

### E. Bio — fechamento forward-looking

Ajustar o quarto parágrafo da Sobre para incluir uma frase de próximos passos. Algo como:

> *Hoje trilho o Frontend pela IbTech, ainda no início. Próximos passos: aprofundar JavaScript, construir projetos próprios e, em breve, contribuir em código aberto.*

### F. Descrições de Encantos — dialar a poesia

Manter o conceito de charm/medalhão (visual), mas tornar 2-3 descrições mais funcionais:

| Habilidade | Atual | Depois |
|---|---|---|
| HTML5 | "O esqueleto. Semântica, acessibilidade e Open Graph — a base de todo grimório." | "Estrutura semântica, acessibilidade e Open Graph. A base de toda página." |
| CSS3 | "A pele e o ritmo. Variáveis, Flexbox, Grid e temas que mudam com um sopro." | "Variáveis, Flexbox, Grid, dois temas e responsividade de 360px a 1920px." |
| JavaScript | "A alma. Interações, observadores e pequenos feitiços que dão vida à página." | "Interações, DOM e APIs do navegador. Vanilla, sem frameworks." |
| Git & GitHub | "O diário do Errante. Cada commit, uma página gravada para os que vierem depois." | "Versionamento, branches, commits limpos. Diário público do meu progresso." |

As outras descrições (VS Code, Futebol, PC Gaming, Computação) podem ficar como estão — já equilibradas.

### G. Mini-bloco "Em construção"

Adicionar, ao fim da seção Galeria OU como bloco próprio entre Inspiração e Contato, uma nota curta:

> **Em construção** — Próximos projetos chegando. Esta é a primeira página da história.

Comunica continuidade (Daniel, Gustavo, Felipe).

### H. Refinamentos técnicos

1. **`<noscript>`** com instruções básicas (e-mail visível, aviso sobre JS).
2. **`aria-pressed="false"`** inicial no botão de tema.
3. **Remover `clipboard-write`** do `allow` do iframe do YouTube (não é usado).
4. **Reduzir partículas em `pointer: coarse`** para ~50 (de 110).
5. **Trimar pesos das fontes** (JetBrains Mono apenas 400).
6. **Subir `--text-mute` no tema claro** mais uma vez para folga de contraste.

---

## Mudanças propostas mas rejeitadas

Estas não tiveram unanimidade:

- **Remover totalmente "errante de Hallownest" do subtitle do hero.** Camila e Luísa argumentaram que **uma** referência no subtitle é parte da identidade, e remover seria overcorreção. Mantida.
- **Substituir `hk-logo.png` por SVG.** Mariana sugeriu por performance, mas Felipe ponderou que o tempo de implementação não compensa o ganho (84KB lazy-loaded). Mantida como está.
- **Acrescentar `<abbr>` em "IbTech".** Rafael propôs, mas Bianca alertou que pode poluir leitura pra leitores de tela. Rejeitada.
- **Foco-trap no Dream Overlay.** Bianca admitiu que para easter egg lúdico, o custo > o ganho.

---

## Decisão

**Assinada por:** Camila Andrade · Rafael Moura · Bianca Lopes · Júlia Tavares · Felipe Castro · Mariana Pires · Luísa Coelho · Gustavo Almeida · Daniel Oliveira.

Esta é a **versão definitiva** do Cartão de Visita de Pedro Henrique Sousa Lima — IbTech Frontend 2026.1.

Pode entregar.
