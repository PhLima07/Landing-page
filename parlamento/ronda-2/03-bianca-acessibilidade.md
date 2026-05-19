# 03 · Bianca Lopes — Especialista em Acessibilidade Digital

**Background:** 7 anos. Certificação IAAP (CPACC). Trabalhou em projetos com Itaú e Magazine Luiza, ambos com auditoria a11y obrigatória.

---

## Avaliação WCAG 2.1 AA

Auditei contra WCAG 2.1 nível AA, que é o piso mínimo legal no Brasil (LBI 13.146/2015) e a régua de mercado.

## O que está conforme

- **1.1.1 Conteúdo Não Textual** (Imagens com alt): conforme.
- **1.3.1 Informação e Relações** (HTML semântico): conforme.
- **1.4.3 Contraste Mínimo** (tema escuro): texto principal acima de 12:1 — excelente.
- **2.1.1 Teclado**: navegação por tab funciona. Foco visível com `:focus-visible`.
- **2.4.1 Skip Links**: presente.
- **2.4.4 Finalidade do Link**: links bem rotulados.
- **3.1.1 Idioma da Página**: `lang="pt-BR"` correto.
- **4.1.2 Nome, Função, Valor**: ARIA aplicado nos componentes interativos.

## Não conformidades remanescentes

1. **1.4.3 Tema claro:** `--text-mute` em `#5e5b48` sobre `#e6dfc6` rende aproximadamente **4.6:1**. Passa AA por uma unha. Subir um pouco mais é prudente.
2. **2.4.6 Cabeçalhos e Rótulos:** os títulos *"Encantos Equipados"*, *"Memórias de Hallownest"*, *"Falar com o Mensageiro"* não descrevem o conteúdo de forma direta. WCAG pede **clareza descritiva**. Quem usa leitor de tela e não conhece HK simplesmente **não entende a estrutura da página**.
3. **3.3.2 Rótulos ou Instruções:** o easter egg do Konami não tem instrução acessível. A `.dream-hint` no rodapé tem `aria-label` agora — bom. Mas a sequência de teclas é difícil de executar com switch device ou teclado adaptado. Não é bloqueio, mas vale uma alternativa (botão escondido, comando de voz, etc.).
4. **2.4.3 Ordem de Foco:** o `#scroll-progress` decorativo aparece antes do `.skip-link` no DOM. Inverter para `.skip-link` ser o primeiro foco real.

## Recomendações priorizadas

1. **Crítico:** Renomear h2 das seções para termos diretos (alinhado com Camila e Rafael). Isso resolve 2.4.6 e tem maior impacto WCAG do que qualquer outra mudança.
2. **Importante:** Subir `--text-mute` no tema claro para garantir contraste folgado.
3. **Nice-to-have:** Reordenar DOM para skip-link ser o primeiro `<body>` child interativo.

## Voto: APROVADO

A renomeação não é só de copy — é requisito de acessibilidade. Sem ela, marco a página com não-conformidade 2.4.6.
