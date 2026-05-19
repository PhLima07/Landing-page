# 01 · Hornet — Cadeira de Design Visual

> *"Cada linha tem que ter intenção. Não há espaço para hesitação no traço."*

**Papel no parlamento:** hierarquia visual, tipografia, paleta, composição, ritmo.

---

## Pontos legais

- A **Cinzel** no título e a **EB Garamond** no corpo formam um par tipográfico fiel a Hallownest. Não soa genérico.
- A paleta de tinta noturna (`#0a0d14`) com **ouro de Charm** (`#c9a96e`) e **azul de Soul** (`#6ab7d4`) tem identidade.
- O **ornamento** entre kicker e título (linha → ponto luminoso → linha) é um detalhe pequeno que vende muita atmosfera.
- O **medalhão dos Encantos** com notch destacado no canto é o tipo de detalhe que mostra atenção autoral — não é só "card com ícone".

## Pontos de melhora

- O **Knight em SVG no hero é fraco**. Não compete com a tipografia em peso visual. Resolvido com a substituição pela arte oficial — mas precisa **moldura/glow** pra parar de parecer "imagem solta no canto".
- A **composição do hero** está toda centralizada (texto centro, Knight canto). Ganharia força com **assimetria intencional**: texto à esquerda, arte à direita, em vez de competirem pelo centro.
- O **kicker dourado** (`section__kicker`) está bom, mas o `letter-spacing: 0.4em` exagera em mobile (estoura). Reduzir para `0.3em` em telas pequenas.
- A **leitura no tema claro** precisa de uma passada — `--text-mute` sobre `--bg` provavelmente não bate 4.5:1.

## Propostas concretas

1. Hero: imagem com **moldura dourada + brilho** + composição assimétrica em desktop.
2. **Contraste do tema claro:** aumentar `--text-mute` e `--text-soft` para garantir WCAG AA.
3. **Barra de progresso de leitura** no topo (1-2px de altura, dourada) — visualmente alinhada com o gauge de Geo do jogo.
4. Reduzir `letter-spacing` do kicker em telas < 480px.

## Veredito

**Aprovo** o conjunto, **com condição** de que a imagem do hero ganhe tratamento de moldura e a composição assimétrica seja respeitada no desktop.
