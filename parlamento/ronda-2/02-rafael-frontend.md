# 02 · Rafael Moura — Engenheiro Frontend Senior

**Background:** 12 anos. Passou por iFood e atualmente lead frontend na Loft. Mentor de juniores.

---

## Avaliação técnica

Para um projeto sem framework e sem build, o código está **acima da média**. Não é só "funciona" — é arquitetado.

## Pontos fortes

- **Módulos IIFE com `init()` em cada um.** É o padrão certo pra esse tamanho de projeto.
- CSS com seções comentadas. Em projeto desse porte, é o que separa código legível de spaghetti.
- Uso correto de `IntersectionObserver` em vez de `scroll` listener. Senior move.
- `clamp()` para tipografia responsiva. Evita 15 media queries.
- Fallback do `execCommand` no copy: cuidado com browsers velhos.
- `prefers-reduced-motion` respeitado.

## Issues técnicos que ainda estão lá

1. **Falta `<noscript>` fallback.** Se o usuário tiver JS desabilitado, o tema fica num só estado e a barra de progresso não aparece (OK), mas o **botão de copiar e-mail vira inerte sem indicação**. Adicionar `<noscript>` instruindo a copiar manualmente.
2. **Canvas roda mesmo em mobile.** Boa prática: detectar `(pointer: coarse)` e baixar contagem de partículas em ~50%.
3. **Botão de tema sem `aria-pressed` no estado inicial.** O JS adiciona quando aplica, mas se o JS atrasar, o leitor de tela pega sem.
4. **`<dfn>` ou `<abbr>` poderia envolver "IbTech"** com `title="Liga de Tecnologia do IBMEC"` — bom semantic upgrade.
5. **O `iframe` do YouTube tem `sandbox` agora**, mas o atributo `allow` ainda inclui `clipboard-write` — desnecessário, remover.

## Sobre a copy / tom (não é minha cadeira, mas...)

Concordo com a Camila. O CSS está profissional, mas os títulos das seções estão "fanfic". **O código merece copy à altura.**

## Recomendações concretas

1. `<noscript>` global com mensagem mínima ("Para a melhor experiência, ative JavaScript. Meu e-mail: pedrophslima@gmail.com").
2. Reduzir partículas em `pointer: coarse` (touch devices).
3. `aria-pressed="false"` inicial no toggle de tema (HTML).
4. Remover `clipboard-write` do `allow` do iframe.
5. **Apoio a normalização dos títulos de seção.**

## Voto: APROVADO

Sob a condição das 4 melhorias técnicas e do alinhamento de copy.
