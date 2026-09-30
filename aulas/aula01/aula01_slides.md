---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

  /* ==========================================================
     ESTILO TARIK PONCIANO (SENAC SIGNATURE)
     ========================================================== */
  :root {
    --bg-light: #f6f4ef;
    --text-dark: #111827;
    --muted: #6b7280;
    --amber: #b47818;
    --code-bg: #181a24;
    --card-bg: #ffffff;
    --yellow-activity: #f6cf46;
  }

  section {
    background-color: var(--bg-light);
    color: var(--text-dark);
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 26px;
    padding: 55px 75px;
    letter-spacing: -0.3px;
    line-height: 1.45;
  }

  /* Cabeçalhos */
  h1 {
    font-size: 52px;
    font-weight: 800;
    color: var(--text-dark);
    letter-spacing: -1.5px;
    line-height: 1.15;
    margin-bottom: 18px;
  }

  h2 {
    font-size: 42px;
    font-weight: 800;
    color: var(--text-dark);
    letter-spacing: -1px;
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: 22px;
  }

  p {
    margin-bottom: 16px;
  }

  /* Tag de Tópico / Módulo */
  .tag {
    font-size: 13px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--amber);
    margin-bottom: 12px;
    display: block;
  }

  /* Blocos de Código (Dark Card) */
  pre {
    background-color: var(--code-bg) !important;
    color: #f8fafc !important;
    border-radius: 14px;
    padding: 22px 28px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.05);
  }

  pre code {
    font-family: 'JetBrains Mono', monospace !important;
    font-size: 22px;
    line-height: 1.5;
    background: transparent !important;
    padding: 0 !important;
    color: #f8fafc !important;
  }

  /* Realce de Sintaxe Específico (Highlight.js) */
  .hljs-keyword, .hljs-selector-tag { color: #f43f5e !important; font-weight: 600; }
  .hljs-built_in, .hljs-title.class_ { color: #38bdf8 !important; }
  .hljs-string { color: #34d399 !important; }
  .hljs-number, .hljs-literal { color: #fbbf24 !important; }
  .hljs-comment { color: #64748b !important; font-style: italic; }
  .hljs-function, .hljs-title.function_ { color: #fbbf24 !important; font-weight: 600; }
  .hljs-variable, .hljs-variable.language_, .hljs-attr { color: #38bdf8 !important; font-weight: 600; }
  .hljs-operator, .hljs-punctuation { color: #94a3b8 !important; }

  /* Código Inline */
  section:not(.activity) :not(pre) > code {
    background: #e9e6dc;
    color: #0f172a;
    padding: 2px 8px;
    border-radius: 6px;
    font-size: 0.9em;
    font-family: 'JetBrains Mono', monospace;
  }

  /* Listas */
  ol, ul {
    margin-left: 28px;
    margin-bottom: 20px;
  }

  li {
    margin-bottom: 10px;
  }

  /* ==========================================================
     CLASSES DE SLIDES ESPECÍFICAS
     ========================================================== */

  /* 1. SLIDE DE CAPA */
  section.cover {
    background-color: #161922;
    color: #f8fafc;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  section.cover h1 {
    color: #ffffff;
    font-size: 58px;
    margin-bottom: 14px;
  }

  section.cover .tag {
    color: #facc15;
  }

  section.cover .subtitle {
    color: #94a3b8;
    font-size: 24px;
    margin-bottom: 30px;
  }

  section.cover .meta-footer {
    color: #64748b;
    font-size: 19px;
    margin-top: 30px;
    font-weight: 500;
  }

  section.cover::after {
    display: none !important;
  }

  section::after {
    font-family: 'JetBrains Mono', monospace;
    font-size: 16px;
    color: #9ca3af !important;
  }

  /* 2. SLIDE DE ATIVIDADE (AMARELO TARIK) */
  section.activity {
    background-color: var(--yellow-activity) !important;
    color: #111827 !important;
  }

  section.activity::after {
    color: #78350f !important;
  }

  section.activity .tag {
    color: #78350f !important;
    font-weight: 800;
  }

  section.activity h2 {
    color: #111827 !important;
    font-size: 42px;
  }

  section.activity :not(pre) > code {
    background: rgba(0, 0, 0, 0.12) !important;
    color: #111827 !important;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 6px;
    font-family: 'JetBrains Mono', monospace;
  }

  section.activity ol, section.activity ul {
    font-size: 23px;
    font-weight: 500;
    line-height: 1.5;
  }

  section.activity .challenge {
    margin-top: 20px;
    font-size: 20px;
  }

  /* 3. CARDS & GRIDS */
  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 15px;
  }

  .card-uc {
    background: #ffffff;
    border-radius: 12px;
    padding: 16px 18px;
    border-left: 5px solid;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
    font-size: 19px;
  }

  .card-uc strong {
    display: block;
    font-size: 18px;
    margin-bottom: 4px;
  }

  .uc1-card { border-color: #0284c7; }
  .uc1-card strong { color: #0284c7; }

  .uc2-card { border-color: #059669; }
  .uc2-card strong { color: #059669; }

  .uc3-card { border-color: #d97706; }
  .uc3-card strong { color: #d97706; }

  .uc4-card { border-color: #ea580c; }
  .uc4-card strong { color: #ea580c; }

  /* 4. CALLOUTS */
  .callouts-row {
    display: flex;
    gap: 24px;
    margin-top: 24px;
  }

  .callout-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 19px;
    color: #374151;
  }

  .callout-bar {
    width: 4px;
    height: 34px;
    background-color: var(--amber);
    border-radius: 2px;
    flex-shrink: 0;
  }
---

<!-- _class: cover -->

<span class="tag">01 · FUNDAMENTAÇÃO</span>

# Introdução à Lógica & Algoritmos

<p class="subtitle">O ponto de partida da programação: pensamento estruturado, decomposição e resolução de problemas.</p>

```javascript
console.log("Olá, mundo! Iniciando a jornada dev.");
```

<p class="meta-footer">Programador de Sistemas · Senac Ceará</p>

---

<span class="tag">CONEXÃO DOCENTE</span>

## Quem é o Professor?

- **Jeronimo Silva** (Contato: 85 9 9129-2744)
- Trajetória multidisciplinar: Física, Engenharia, Idiomas e Tecnologia da Informação.
- Graduando em Análise e Desenvolvimento de Sistemas (Faculdade Senac).
- Foco: Autonomia prática, raciocínio lógico e preparação profissional contínua.

---

<span class="tag">HORIZONTE TECNOLÓGICO</span>

## Por que JavaScript + Ecossistema Desktop?

- **Tecnologia das Gigantes:** A base de softwares de classe mundial como VS Code, Discord, Spotify e WhatsApp.
- **Linguagem Mais Utilizada:** Líder global de adoção há mais de uma década (*Stack Overflow Survey*).
- **Versatilidade Real:** A mesma linguagem opera no Navegador (Front-end), no Servidor (Node.js) e no Desktop (Electron).
- **Multiplataforma:** Um único código roda de forma nativa no Windows, Linux e macOS.

---

<span class="tag">INTEGRAÇÃO</span>

## Quem são vocês?

Vamos quebrar o gelo e alinhar nossos objetivos:

- Qual o seu nome e sua área de interesse?
- Já teve algum contato anterior com código ou tecnologia?
- Qual o seu principal objetivo ao concluir esta formação?

---

<span class="tag">ALINHAMENTO PEDAGÓGICO</span>

## Nosso Acordo de Laboratório

- **Compromisso e Frequência:** O aprendizado em programação é cumulativo e prático. Cada aula constrói a base da seguinte.
- **Espírito de Pesquisa:** Erros de sintaxe são normais. Aprender a ler mensagens de erro faz parte do ofício.
- **Ambiente Colaborativo:** Tirar dúvidas em sala e apoiar os colegas fortalece o aprendizado coletivo.

---

<span class="tag">VISÃO GERAL · 200 HORAS</span>

## Trilha de Formação Técnica

<div class="grid-2">
  <div class="card-uc uc1-card">
    <strong>UC1 • Sistemas de Informação (72h)</strong>
    Lógica algorítmica, variáveis, controle de fluxo e CLI com Node.js
  </div>
  <div class="card-uc uc2-card">
    <strong>UC2 • Banco de Dados (72h)</strong>
    Modelagem relacional (MER/DER), linguagem SQL e persistência
  </div>
  <div class="card-uc uc3-card">
    <strong>UC3 • Testes e Manutenção (36h)</strong>
    Qualidade de código, depuração, boas práticas e Git/GitHub
  </div>
  <div class="card-uc uc4-card">
    <strong>UC4 • Projeto Integrador (20h)</strong>
    Aplicação Desktop completa ponta a ponta (Electron + Banco)
  </div>
</div>

---

<span class="tag">FORMAÇÃO TÉCNICA · 72H</span>

## UC1: Desenvolvimento de Sistemas

*O cérebro lógico e algorítmico do desenvolvedor:*

- **Fundamentos:** Algoritmos, variáveis, tipos de dados e controle de fluxo (`if/else`, loops).
- **Modularização:** Funções puras e rotinas reutilizáveis.
- **Ferramental:** **Node.js** + JavaScript moderno + **@inquirer/prompts**.
- **Entrega Prática:** Criação de sistemas interativos em linha de comando (CLI).

---

<span class="tag">FORMAÇÃO TÉCNICA · 72H</span>

## UC2: Banco de Dados

*Onde as informações ganham persistência, estrutura e segurança:*

- **Modelagem:** Entidades, atributos e relacionamentos (MER e DER).
- **Linguagem SQL:** Comandos fundamentais (`SELECT`, `INSERT`, `UPDATE`, `DELETE`, `JOIN`).
- **Integridade de Dados:** Chaves primárias, estrangeiras e normalização.
- **Entrega Prática:** Banco de dados relacional integrado à aplicação.

---

<span class="tag">FORMAÇÃO TÉCNICA · 36H</span>

## UC3: Testes & Manutenção

*A garantia de estabilidade, previsibilidade e colaboração:*

- **Prevenção de Falhas:** Encontrar e corrigir comportamentos inesperados.
- **Código Limpo:** Refatoração, legibilidade e manutenibilidade.
- **Controle de Versão:** Fluxos profissionais com **Git e GitHub**.
- **Entrega Prática:** Software testado, documentado e versionado profissionalmente.

---

<span class="tag">FORMAÇÃO TÉCNICA · 20H</span>

## UC4: Projeto Integrador

*A consolidação prática de toda a formação:*

- **Problema Real:** Solução desenhada para resolver um gargalo real do mercado.
- **Stack Completa:** Interface Desktop (**Electron**) + Regras de Negócio (**Node.js**) + Dados (**SQL**).
- **Portfólio:** Código público no GitHub e aplicação funcional para demonstração.

---

<span class="tag">MERCADO & CARREIRA</span>

## O Profissional de Sistemas

- **Mais que digitadores de código:** Nossa missão central é resolver problemas práticos de forma automatizada e lógica.
- **Atitude Autônoma:** Capacidade de buscar documentações, testar hipóteses e depurar problemas.
- As linguagens e ferramentas evoluem com o tempo; sua capacidade de **raciocinar logicamente** permanece.

---

<!-- _class: activity -->

<span class="tag">DINÂMICA PRÁTICA · MAPEAR O MUNDO REAL</span>

## Tour Técnico: Identificando Gargalos

<p style="font-size: 21px; margin-bottom: 20px;">
Vamos circular pelas instalações da unidade Senac Centro (Biblioteca, Cantina, Recepção):
</p>

<div class="grid-cards-3" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 20px;">
  <div class="card" style="background: rgba(255,255,255,0.92); padding: 18px 20px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
    <div style="font-weight: 800; color: #b45309; font-size: 19px; margin-bottom: 8px;">1. Observe a Rotina</div>
    <div style="font-size: 16px; color: #1f2937; line-height: 1.45;">Como as pessoas interagem com os serviços? Onde elas aguardam atendimento?</div>
  </div>
  <div class="card" style="background: rgba(255,255,255,0.92); padding: 18px 20px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
    <div style="font-weight: 800; color: #b45309; font-size: 19px; margin-bottom: 8px;">2. Mapeie Gargalos</div>
    <div style="font-size: 16px; color: #1f2937; line-height: 1.45;">Onde há filas demoradas, atrasos ou retrabalho manual com fichas e papéis?</div>
  </div>
  <div class="card" style="background: rgba(255,255,255,0.92); padding: 18px 20px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
    <div style="font-weight: 800; color: #b45309; font-size: 19px; margin-bottom: 8px;">3. Pense como Dev</div>
    <div style="font-size: 16px; color: #1f2937; line-height: 1.45;">Que tipo de software, tela ou automação resolveria essa dor de forma definitiva?</div>
  </div>
</div>

<p class="challenge" style="background: rgba(255,255,255,0.88); padding: 14px 20px; border-radius: 10px; border-left: 5px solid #b45309; font-size: 19px; margin-top: 10px;">
<strong>Objetivo:</strong> Mapear problemas reais do mundo real que inspirarão nossos projetos durante o curso!
</p>

---

<span class="tag">CONCEITOS ESSENCIAIS</span>

## O que é um Algoritmo?

<div class="split" style="display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 28px; align-items: start;">
  <div>
    <p>É uma <strong>sequência finita, ordenada e não ambígua</strong> de passos para resolver um problema ou executar uma tarefa.</p>
    <ul>
      <li><strong>Início e Fim:</strong> Um algoritmo sempre possui término previsível.</li>
      <li><strong>Não Ambíguo:</strong> Cada instrução tem sentido único e claro.</li>
      <li><strong>Ordenado:</strong> A sequência exata das etapas altera o resultado final.</li>
    </ul>
    <p style="font-size: 18.5px; color: var(--muted); margin-top: 14px;">
      O computador executa exatamente o que você programa, nunca o que você supõe.
    </p>
  </div>
  <div>
    <div class="card" style="background: #ffffff; border-radius: 14px; padding: 20px 22px; box-shadow: 0 4px 14px rgba(0,0,0,0.05); border: 1px solid rgba(0,0,0,0.06);">
      <div style="font-size: 19px; font-weight: 800; color: var(--amber); margin-bottom: 12px;">O Tripé da Computação</div>
      <p style="font-size: 16.5px; margin-bottom: 8px; line-height: 1.4;">📥 <strong>Entrada:</strong> Dados fornecidos pelo usuário ou sensores.</p>
      <p style="font-size: 16.5px; margin-bottom: 8px; line-height: 1.4;">⚙️ <strong>Processamento:</strong> Regras lógicas, decisões e cálculos.</p>
      <p style="font-size: 16.5px; margin-bottom: 0; line-height: 1.4;">📤 <strong>Saída:</strong> Informação apresentada na tela ou gravada no banco.</p>
    </div>
  </div>
</div>

---

<span class="tag">EXEMPLO COTIDIANO</span>

## Algoritmos Fora do Computador

```text
# Algoritmo: Trocar Lâmpada Queimada
1. Posicionar escada embaixo do bocal
2. Desligar o interruptor de energia
3. Subir com segurança na escada
4. Desenroscar a lâmpada danificada
5. Enroscar a nova lâmpada até fixar
6. Descer, ligar o interruptor e testar
```

<div class="callouts-row">
  <div class="callout-item">
    <div class="callout-bar"></div>
    <div><strong>Sequência Lógica:</strong> Se você ligar a energia antes de enroscar, haverá choque elétrico.</div>
  </div>
  <div class="callout-item">
    <div class="callout-bar"></div>
    <div><strong>Precisão:</strong> Cada instrução depende rigorosamente do sucesso da etapa anterior.</div>
  </div>
</div>

---

<span class="tag">METODOLOGIA</span>

## Os 4 Pilares do Pensamento Computacional

<div class="grid-cards" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin: 24px 0 20px;">
  <div class="card" style="background: #ffffff; border-radius: 12px; padding: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.04); border-top: 4px solid var(--amber);">
    <div style="font-size: 19px; font-weight: 800; color: var(--text-dark); margin-bottom: 8px;">1. Decomposição</div>
    <div style="font-size: 16px; color: var(--muted); line-height: 1.45;">Quebrar um problema complexo em partes menores e gerenciáveis.</div>
  </div>
  <div class="card" style="background: #ffffff; border-radius: 12px; padding: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.04); border-top: 4px solid #0284c7;">
    <div style="font-size: 19px; font-weight: 800; color: var(--text-dark); margin-bottom: 8px;">2. Padrões</div>
    <div style="font-size: 16px; color: var(--muted); line-height: 1.45;">Identificar repetições ou semelhanças com problemas já conhecidos.</div>
  </div>
  <div class="card" style="background: #ffffff; border-radius: 12px; padding: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.04); border-top: 4px solid #059669;">
    <div style="font-size: 19px; font-weight: 800; color: var(--text-dark); margin-bottom: 8px;">3. Abstração</div>
    <div style="font-size: 16px; color: var(--muted); line-height: 1.45;">Focar no que é relevante e ignorar os detalhes secundários.</div>
  </div>
  <div class="card" style="background: #ffffff; border-radius: 12px; padding: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.04); border-top: 4px solid #d97706;">
    <div style="font-size: 19px; font-weight: 800; color: var(--text-dark); margin-bottom: 8px;">4. Algoritmo</div>
    <div style="font-size: 16px; color: var(--muted); line-height: 1.45;">Construir o passo a passo exato e ordenado para resolver a tarefa.</div>
  </div>
</div>

<p style="font-size: 20px; color: var(--muted); margin-top: 14px;">
Essa é a linguagem universal de todo profissional de tecnologia.
</p>

---

<!-- _class: activity -->

<span class="tag">DINÂMICA EM GRUPO · LÓGICA ESTRITA</span>

## O Algoritmo do Robô Humano

<ol style="font-size: 22px; line-height: 1.55; margin-bottom: 22px;">
  <li>Em duplas ou trios, escolham uma tarefa cotidiana simples no laboratório (ex: <em>pegar a caneta no estojo e escrever o nome no quadro</em>).</li>
  <li>Escrevam no caderno o <strong>passo a passo literal</strong> para executar a tarefa.</li>
  <li>Um colega de outro grupo atuará como o <strong>robô</strong> e seguirá <strong>estritamente</strong> as instruções escritas.</li>
</ol>


---

<span class="tag">CONFIGURAÇÃO DE AMBIENTE</span>

## Próximo Passo: Setup na Nuvem & GitHub

<p style="font-size: 22px; margin-bottom: 22px;">
Hoje deixaremos o nosso ambiente profissional 100% configurado para a jornada:
</p>

<div class="grid-2">
  <div class="card" style="background: #ffffff; border-radius: 14px; padding: 22px 24px; box-shadow: 0 4px 14px rgba(0,0,0,0.05); border-left: 6px solid var(--amber);">
    <div style="font-size: 20px; font-weight: 800; color: var(--amber); margin-bottom: 8px;">1. Criar Conta no GitHub</div>
    <div style="font-size: 17px; color: #374151; line-height: 1.45;">
      O passaporte e portfólio universal do programador. Todos os projetos que desenvolveremos viverão aqui.
    </div>
  </div>
  <div class="card" style="background: #ffffff; border-radius: 14px; padding: 22px 24px; box-shadow: 0 4px 14px rgba(0,0,0,0.05); border-left: 6px solid #0284c7;">
    <div style="font-size: 20px; font-weight: 800; color: #0284c7; margin-bottom: 8px;">2. Ativar o GitHub Codespaces</div>
    <div style="font-size: 17px; color: #374151; line-height: 1.45;">
      VS Code profissional executando direto na nuvem. Sem tempo perdido com instalações locais!
    </div>
  </div>
</div>

<p style="font-size: 21px; font-weight: 700; color: #111827; margin-top: 30px;">
🚀 <strong>Amanhã à tarde:</strong> Nossas primeiras linhas de código JavaScript e Node.js no terminal!
</p>
