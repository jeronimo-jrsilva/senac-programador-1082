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
    --senac-blue: #0284c7;
    --senac-orange: #ea580c;
  }

  section {
    background-color: var(--bg-light);
    color: var(--text-dark);
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 25px;
    padding: 50px 70px;
    letter-spacing: -0.3px;
    line-height: 1.45;
  }

  /* Cabeçalhos */
  h1 {
    font-size: 50px;
    font-weight: 800;
    color: var(--text-dark);
    letter-spacing: -1.5px;
    line-height: 1.15;
    margin-bottom: 18px;
  }

  h2 {
    font-size: 38px;
    font-weight: 800;
    color: var(--text-dark);
    letter-spacing: -1px;
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 14px;
  }

  /* Tag de Tópico / Módulo */
  .tag {
    font-size: 13px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--amber);
    margin-bottom: 10px;
    display: block;
  }

  /* Blocos de Código (Dark Card) */
  pre {
    background-color: var(--code-bg) !important;
    color: #f8fafc !important;
    border-radius: 12px;
    padding: 18px 24px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.05);
    margin: 12px 0;
  }

  pre code {
    font-family: 'JetBrains Mono', monospace !important;
    font-size: 20px;
    line-height: 1.45;
    background: transparent !important;
    padding: 0 !important;
    color: #f8fafc !important;
  }

  /* Realce de Sintaxe */
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
    margin-bottom: 16px;
  }

  li {
    margin-bottom: 8px;
  }

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
    font-size: 54px;
    margin-bottom: 14px;
  }

  section.cover .tag {
    color: #facc15;
  }

  section.cover .subtitle {
    color: #94a3b8;
    font-size: 24px;
    margin-bottom: 26px;
  }

  section.cover .meta-footer {
    color: #64748b;
    font-size: 19px;
    margin-top: 26px;
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
    font-size: 40px;
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
    font-size: 22px;
    font-weight: 500;
    line-height: 1.5;
  }

  section.activity .challenge {
    margin-top: 18px;
    font-size: 20px;
    background: rgba(0, 0, 0, 0.06);
    padding: 12px 18px;
    border-radius: 8px;
    border-left: 4px solid #111827;
  }

  /* 3. GRIDS & CARDS */
  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
    margin-top: 14px;
  }

  .grid-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-top: 14px;
  }

  .card {
    background: var(--card-bg);
    border-radius: 12px;
    padding: 16px 20px;
    border: 1px solid rgba(0, 0, 0, 0.06);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  }

  .card-title {
    font-weight: 800;
    font-size: 20px;
    color: #111827;
    margin-bottom: 6px;
  }

  .card-text {
    font-size: 16px;
    color: #4b5563;
    line-height: 1.4;
  }

  .callouts-row {
    display: flex;
    gap: 20px;
    margin-top: 16px;
  }

  .callout-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 18px;
    color: #374151;
  }

  .callout-bar {
    width: 4px;
    height: 32px;
    background-color: var(--amber);
    border-radius: 2px;
    flex-shrink: 0;
  }

  .pill-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 16px 0 20px;
  }

  .pill {
    background: #181a24;
    color: #f8fafc;
    font-family: 'JetBrains Mono', monospace;
    font-size: 18px;
    padding: 4px 14px;
    border-radius: 9999px;
    font-weight: 600;
  }
---

<!-- _class: cover -->

<span class="tag">AULA 02 · UC1 DESENVOLVIMENTO DE SISTEMAS</span>

# Da Nuvem ao Código
### GitHub Codespaces, Console Turbo & Variáveis

<p class="subtitle">Criando seu primeiro repositório, configurando o ambiente na nuvem e dominando a saída e armazenamento de dados em JavaScript.</p>

<p class="meta-footer">Docente: Jeronimo Silva · Senac Centro · Tarde (2026)</p>

---

<span class="tag">ROTEIRO PEDAGÓGICO</span>

## O Que Faremos Hoje

<div class="grid-2">
  <div class="card">
    <div class="card-title">1. Do GitHub ao Codespaces</div>
    <div class="card-text">Criar o primeiro repositório e subir um computador completo na nuvem em 1 clique.</div>
  </div>
  <div class="card">
    <div class="card-title">2. Terminal & Node.js</div>
    <div class="card-text">Entender o terminal integrado, o interpretador Node e a execução de arquivos <code>.js</code>.</div>
  </div>
  <div class="card">
    <div class="card-title">3. console.log Turbo</div>
    <div class="card-text">Interpolação de texto e alinhamento profissional com <code>repeat</code>, <code>padStart</code> e <code>padEnd</code>.</div>
  </div>
  <div class="card">
    <div class="card-title">4. Gavetas de Memória</div>
    <div class="card-text">Variáveis e constantes: <code>const</code> vs <code>let</code>, tipos primitivos e o operador <code>typeof</code>.</div>
  </div>
</div>

<p style="font-size: 19px; color: var(--muted); margin-top: 14px;">
<strong>Bônus de Interatividade:</strong> Instalação do módulo <code>@inquirer/prompts</code> para capturar respostas pelo teclado.
</p>

---

<span class="tag">CHECKLIST DE CONCEITOS</span>

## Termos e Ferramentas da Aula

| Conceito | O que significa na prática? |
| :--- | :--- |
| **GitHub Codespaces** | Nosso computador Linux completo na nuvem, com VS Code e Node prontos. |
| **Node.js** | O motor que lê e executa nosso código JavaScript fora do navegador. |
| **`console.log()`** | O comando que imprime dados e mensagens na tela preta do terminal. |
| **Template Literal** | Texto entre crases (<code>&#96;&#96;</code>) que permite embutir variáveis via <code>${...}</code>. |
| **`repeat()`** | Método de texto que replica caracteres várias vezes (bordas e divisórias). |
| **`padStart / End`** | Métodos para alinhar textos à direita ou esquerda (recibos e tabelas). |
| **`const` / `let`** | Caixas na memória: <code>const</code> é fixa (padrão) e <code>let</code> pode mudar. |
| **`typeof`** | Operador que pergunta à máquina qual é o tipo de dado de uma variável. |

---

<span class="tag">BLOCO 1 · AMBIENTE NA NUVEM</span>

## Passo 1: Criando o Primeiro Repositório

Ontem você criou sua conta no GitHub. Agora vamos criar sua pasta oficial de estudos:

1. Acesse **[github.com](https://github.com)** e faça login na sua conta.
2. No canto superior direito, clique no ícone **`+`** ➔ **New repository**.
3. **Repository name:** digite `senac-programador-sistemas` *(ou `programador-de-sistemas`)*.
4. Marque a opção **Public** (Público).
5. Marque a caixinha: **Add a README file** *(fundamental!)*.
6. Clique no botão verde: **Create repository**.

<div class="callout-item" style="background: rgba(2, 132, 199, 0.08); padding: 12px 18px; border-radius: 10px; margin-top: 14px;">
  <div class="callout-bar" style="background-color: var(--senac-blue); height: 34px;"></div>
  <div style="font-size: 18px; color: #111827;">
    💡 <strong>Dica:</strong> Este repositório será o seu <strong>caderno e portfólio oficial</strong> durante todo o curso! Ele acompanhará você nas aulas de lógica, banco de dados e testes.
  </div>
</div>

---

<span class="tag">BLOCO 1 · AMBIENTE NA NUVEM</span>

## Passo 2: Criando o GitHub Codespaces

Não precisamos instalar nada na máquina do laboratório. Vamos ligar uma máquina na nuvem:

<div class="grid-2">
  <div class="card">
    <div class="card-title">Como Iniciar</div>
    <div class="card-text">
      1. Dentro do repositório, clique no botão verde <strong><code>&lt;&gt; Code</code></strong>.<br>
      2. Clique na aba <strong>Codespaces</strong>.<br>
      3. Clique em <strong>Create codespace on main</strong>.<br>
      4. Aguarde ~30 segundos enquanto a nuvem prepara o seu VS Code completo no navegador.
    </div>
  </div>
  <div class="card">
    <div class="card-title">Por que usar Codespaces?</div>
    <div class="card-text">
      • <strong>Zero configuração:</strong> Node.js e Git já vêm instalados.<br>
      • <strong>Ambiente blindado:</strong> não depende do Windows do laboratório.<br>
      • <strong>Portabilidade:</strong> continue programando em casa exatamente do ponto onde parou.
    </div>
  </div>
</div>

---

<span class="tag">BLOCO 1 · AMBIENTE NA NUVEM</span>

## Conhecendo o Codespaces & Testando o Node

Quando a interface abrir no navegador, observe as 3 áreas fundamentais:

```text
+-----------------------+------------------------------------------+
| ARQUIVOS (Explorador) | EDITOR DE CÓDIGO (Onde você digita)     |
| [README.md]           |                                          |
|                       |                                          |
+-----------------------+------------------------------------------+
| TERMINAL INTEGRADO    | $ node -v                                |
|                       | v20.x.x (Node instalado e pronto!)       |
+-----------------------+------------------------------------------+
```

1. Se o terminal não estiver visível, abra com o atalho: **`Ctrl + '`** (ou menu *Terminal ➔ New Terminal*).
2. Digite o comando de teste: `node -v` e aperte `Enter`.

---

<span class="tag">BLOCO 2 · PRIMEIRO CÓDIGO</span>

## Criando seu Arquivo `aula02.js`

1. Na barra lateral esquerda (Explorer), clique no ícone **New File** (Novo Arquivo).
2. Nomeie o arquivo como: **`aula02.js`** (sempre com a extensão `.js`).
3. Digite a sua primeira instrução:

```javascript
console.log("Olá, mundo! Meu primeiro código no Codespaces!");
```

4. No terminal, execute o programa chamando o Node:

```bash
node aula02.js
```

<div class="callout-item" style="background: rgba(0, 0, 0, 0.04); padding: 10px 14px; border-radius: 8px; margin-top: 10px;">
  <div class="callout-bar" style="background-color: var(--amber); height: 28px;"></div>
  <div style="font-size: 17px; color: #374151;">
    ⚡ <strong>Dica de Produtividade:</strong> O Node possui o modo <code>--watch</code>, que reexecuta o script toda vez que você salva: <code>node --watch aula02.js</code>
  </div>
</div>

---

<span class="tag">BLOCO 2 · SAÍDA DE DADOS</span>

## O Poder do `console.log()`

O `console.log()` aceita múltiplos valores separados por vírgula e respeita seus formatos:

```javascript
// Imprimindo vários dados juntos:
console.log("Instrutor:", "Jeronimo", "Ano:", 2026);

// Fazendo contas diretamente na saída:
console.log("Resultado da soma 10 + 25 =", 10 + 25);
```

### Template Literals (Interpolação com Crase)
A forma profissional e elegante do JavaScript moderno de juntar texto e dados:

```javascript
const turma = "Programador de Sistemas";
const alunos = 9;

console.log(`Turma: ${turma} | Alunos presentes: ${alunos}`);
```

---

<span class="tag">BLOCO 2 · FORMATAÇÃO VISUAL</span>

## Criando Bordas com `repeat()`

Em vez de digitar traços manualmente, usamos o método `.repeat(quantidade)`:

```javascript
// Cria uma linha divisória perfeita de 40 caracteres:
console.log("=".repeat(40));
console.log("       SISTEMA SENAC DE COMPRAS       ");
console.log("=".repeat(40));

// Divisor pontilhado:
console.log("-".repeat(40));
```

**Resultado no Terminal:**
```text
========================================
       SISTEMA SENAC DE COMPRAS       
========================================
----------------------------------------
```

---

<span class="tag">BLOCO 2 · FORMATAÇÃO VISUAL</span>

## Alinhamento com `padEnd()` e `padStart()`

Como fazer colunas alinhadas perfeitamente como em um cupom fiscal?

<div class="grid-2">
  <div class="card">
    <div class="card-title">texto.padEnd(tamanho, " ")</div>
    <div class="card-text">
      Alinha o texto à <strong>esquerda</strong> e preenche o restante com espaços ou caracteres até atingir a largura.<br>
      <em>Ideal para nomes de itens e colunas.</em>
    </div>
  </div>
  <div class="card">
    <div class="card-title">texto.padStart(tamanho, " ")</div>
    <div class="card-text">
      Alinha o texto à <strong>direita</strong> empurrando com preenchimento no início.<br>
      <em>Ideal para preços, quantidades e totais.</em>
    </div>
  </div>
</div>

```javascript
const item = "Café Expresso";
const preco = "R$ 6,50";

// O item terá 25 caracteres (preenchido com pontos) e o preço terá 10 caracteres:
console.log(item.padEnd(25, ".") + preco.padStart(10, " "));
// Resultado: Café Expresso............   R$ 6,50
```

---

<!-- _class: activity -->

<span class="tag">ATIVIDADE 1 · PRÁTICA EM BANCADA</span>

## Mini-Desafio: O Cupom Fiscal no Terminal

Crie um arquivo chamado **`recibo.js`** e use `repeat`, `padStart` e `padEnd` para desenhar o seguinte recibo:

<pre><code>========================================
         MERCADINHO SENAC LTDA         
========================================
ITEM                         VALOR      
----------------------------------------
1. Teclado Mecânico........   R$ 180,00
2. Mouse Sem Fio...........    R$ 75,00
3. Cabo HDMI 2.0...........    R$ 25,00
----------------------------------------
TOTAL GERAL................   R$ 280,00
========================================</code></pre>

<p class="challenge"><strong>Dica:</strong> Padronize a largura total em 40 caracteres. Use <code>padEnd(27, ".")</code> para a descrição e <code>padStart(13, " ")</code> para o preço!</p>

---

<span class="tag">BLOCO 3 · GAVETAS DE MEMÓRIA</span>

## O Que é uma Variável?

Na aula de ontem vimos que o computador processa dados na memória RAM.
Uma **variável** é uma **caixa etiquetada** nessa memória:

```text
Memória RAM:
+-------------------+      1. Nome da Caixa: rotulo que identifica a gaveta.
| [nomeAluno]       |      2. Conteúdo: o valor guardado lá dentro.
|  "Lucas"          |      3. Tipo: o formato do dado (texto, número, etc).
+-------------------+
```

Em JavaScript moderno, declaramos nossas caixas de duas formas:
- **`const`** *(Constante)*: O valor é gravado e **NUNCA PODE MUDAR**.
- **`let`** *(Variável)*: O valor pode ser **alterado/reatribuído** ao longo do programa.

---

<span class="tag">BLOCO 3 · GAVETAS DE MEMÓRIA</span>

## A Regra de Ouro: `const` por Padrão!

<div class="callout-item" style="background: rgba(180, 120, 24, 0.08); padding: 12px 18px; border-radius: 10px; margin: 10px 0 14px;">
  <div class="callout-bar" style="background-color: var(--amber); height: 34px;"></div>
  <div style="font-size: 18px; color: #111827;">
    ⭐ <strong>Regra Prática:</strong> <strong>Use sempre <code>const</code>!</strong> Só use <code>let</code> quando você tiver certeza absoluta de que aquele valor precisará mudar (como contadores ou acumuladores).
  </div>
</div>

```javascript
// Constante: dados fixos e seguros
const pi = 3.14159;
const cpf = "123.456.789-00";
// cpf = "999.999.999-99"; // ERRO! TypeError: Assignment to constant variable.

// Let: valor dinâmico
let tentativas = 0;
tentativas = tentativas + 1; // OK! Agora vale 1.
```

*Por que isso importa?* Usar `const` evita que você ou outro programador sobrescreva dados acidentalmente no meio do sistema!

---

<span class="tag">BLOCO 3 · GAVETAS DE MEMÓRIA</span>

## Os Três Tipos Primitivos Fundamentais

```javascript
// 1. STRING (Texto delimitado por aspas simples, duplas ou crase)
const aluno = "Natanael";
const cidade = 'Fortaleza';

// 2. NUMBER (Números inteiros e decimais - SEM aspas!)
const idade = 20;
const preco = 49.90; // Em programação usamos PONTO (.) e não vírgula!

// 3. BOOLEAN (Verdadeiro ou Falso - a chave liga/desliga da lógica)
const cursoAtivo = true;
const temPendencia = false;
```

<div class="callout-item" style="background: rgba(0, 0, 0, 0.04); padding: 8px 14px; border-radius: 8px; margin-top: 8px;">
  <div class="callout-bar" style="background-color: var(--amber); height: 26px;"></div>
  <div style="font-size: 17px; color: #374151;">
    ⚠️ <strong>Atenção:</strong> <code>"20"</code> com aspas é texto (<code>string</code>). <code>20</code> sem aspas é número (<code>number</code>).
  </div>
</div>

---

<span class="tag">BLOCO 3 · GAVETAS DE MEMÓRIA</span>

## Inspecionando Tipos com `typeof`

Quando você estiver em dúvida sobre qual dado está dentro da caixa, pergunte ao JavaScript usando o operador **`typeof`**:

```javascript
const matricula = "573";
const salario = 2500.50;
const aprovado = true;

console.log(typeof matricula); // "string"
console.log(typeof salario);   // "number"
console.log(typeof aprovado);  // "boolean"
```

<div class="callout-item" style="background: rgba(0, 0, 0, 0.04); padding: 8px 14px; border-radius: 8px; margin-top: 8px;">
  <div class="callout-bar" style="background-color: var(--senac-orange); height: 26px;"></div>
  <div style="font-size: 17px; color: #374151;">
    🕵️ <strong>O Teste do Trapaceiro:</strong> <code>typeof "100"</code> retorna <code>string</code>! Se somarmos <code>"100" + 50</code>, o resultado vira texto colado: <code>"10050"</code>.
  </div>
</div>

---

<!-- _class: activity -->

<span class="tag">ATIVIDADE 2 · DIAGNÓSTICO EM DUPLAS</span>

## Caça aos Nomes e Tipos

Analise as declarações abaixo e diga se o JavaScript vai aceitar ou dar **ERRO**:

<div class="pill-container">
  <span class="pill">const 1nome = "Gabriel";</span>
  <span class="pill">const nome-aluno = "Caio";</span>
  <span class="pill">let preco = 12.50;</span>
  <span class="pill">const let = 10;</span>
  <span class="pill">let total_pontos = 100;</span>
  <span class="pill">const valorFinal = 50;</span>
</div>

1. Quais dessas declarações geram erro de sintaxe imediatamente?
2. Por que `const let = 10;` não funciona? *(Palavra reservada)*.
3. Se fizermos `valorFinal = 70;`, o que acontece ao rodar com `node`?

---

<span class="tag">BLOCO 4 · BÔNUS INTERATIVO</span>

## O Próximo Nível: Perguntando ao Usuário

Até agora nossos scripts apenas exibem dados estáticos. E se quisermos que o programa **faça perguntas** no terminal?

Para isso usamos uma biblioteca externa chamada **`@inquirer/prompts`**.

```text
Nosso Programa JS  ==== Pergunta ====>  Usuário no Teclado
Nosso Programa JS  <=== Resposta =====  Usuário digita e dá Enter
```

Vamos aprender agora como inicializar um projeto Node no Codespaces e instalar pacotes do ecossistema NPM!

---

<span class="tag">BLOCO 4 · BÔNUS INTERATIVO</span>

## Instalando o Inquirer no Codespaces

Abra o terminal integrado (`Ctrl + '`) e rode os 3 comandos abaixo:

```bash
# 1. Cria o arquivo de configuração do projeto (package.json):
npm init -y

# 2. Habilita o JavaScript moderno com módulos (import / await):
npm pkg set type="module"

# 3. Baixa e instala a biblioteca de perguntas interativas:
npm install @inquirer/prompts
```

<div class="callout-item" style="background: rgba(0, 0, 0, 0.04); padding: 10px 14px; border-radius: 8px; margin-top: 10px;">
  <div class="callout-bar" style="background-color: var(--senac-blue); height: 28px;"></div>
  <div style="font-size: 17px; color: #374151;">
    📦 <strong>O que aconteceu?</strong> A pasta <code>node_modules</code> e o arquivo <code>package.json</code> foram criados com o Inquirer pronto para uso!
  </div>
</div>

---

<span class="tag">BLOCO 4 · BÔNUS INTERATIVO</span>

## Nosso Primeiro Script Interativo (`app_interativo.js`)

Crie o arquivo `app_interativo.js` e veja como a captura de texto simples funciona:

```javascript
import { input } from '@inquirer/prompts';

console.log("=".repeat(40));
console.log("      SISTEMA DE CADASTRO SENAC        ");
console.log("=".repeat(40));

// O comando "await input" aguarda a digitação do usuário:
const nome = await input({ message: "Digite seu nome completo:", required: true });
const curso = await input({ message: "Qual curso você está fazendo?" });

console.log("\n" + "-".repeat(40));
console.log(`Sucesso! Bem-vindo(a), ${nome}!`);
console.log(`Matriculado com sucesso em: ${curso}.`);
console.log("-".repeat(40));
```

Execute com: `node app_interativo.js` e responda no terminal!

---

<span class="tag">BLOCO 4 · ARSENAL DO INQUIRER (1/6)</span>

## 1. `input()` · Entrada de Texto

Usado para capturar qualquer informação digitada livremente pelo usuário:

```javascript
import { input } from '@inquirer/prompts';

const nome = await input({ 
  message: 'Digite seu nome completo:',
  required: true // Impede o usuário de deixar em branco e dar Enter!
});

console.log(`Olá, ${nome}! Seja bem-vindo(a) ao Senac.`);
```

<div class="callout-item" style="background: rgba(2, 132, 199, 0.08); padding: 10px 14px; border-radius: 8px; margin-top: 10px;">
  <div class="callout-bar" style="background-color: var(--senac-blue); height: 28px;"></div>
  <div style="font-size: 17px; color: #111827;">
    📌 <strong>Retorno:</strong> Devolve sempre uma <code>string</code> (texto). Se digitar números aqui, eles continuam como texto!
  </div>
</div>

---

<span class="tag">BLOCO 4 · ARSENAL DO INQUIRER (2/6)</span>

## 2. `number()` · Entrada Numérica Real

Evita ter que converter strings com `Number()`. Já entrega o tipo numérico pronto:

```javascript
import { number } from '@inquirer/prompts';

const idade = await number({ 
  message: 'Qual é a sua idade?',
  min: 0,
  max: 120,
  step: 1 // Use step: 'any' quando quiser aceitar números com ponto decimal
});

console.log(`Idade registrada: ${idade} | Tipo de dado: ${typeof idade}`);
```

<div class="callout-item" style="background: rgba(180, 120, 24, 0.08); padding: 10px 14px; border-radius: 8px; margin-top: 10px;">
  <div class="callout-bar" style="background-color: var(--amber); height: 28px;"></div>
  <div style="font-size: 17px; color: #374151;">
    ⭐ <strong>Vantagem:</strong> O próprio terminal já recusa se o aluno tentar digitar letras ou valores fora do <code>min/max</code>!
  </div>
</div>

---

<span class="tag">BLOCO 4 · ARSENAL DO INQUIRER (3/6)</span>

## 3. `confirm()` · Pergunta Booleana (Sim / Não)

Ideal para confirmações diretas e decisões de fluxo:

```javascript
import { confirm } from '@inquirer/prompts';

const confirmarMatricula = await confirm({
  message: 'Deseja confirmar sua inscrição na turma?',
  default: true // Se o usuário der apenas Enter, assume Sim
});

console.log(`Resposta: ${confirmarMatricula} | Tipo: ${typeof confirmarMatricula}`);
```

<div class="callout-item" style="background: rgba(0, 0, 0, 0.04); padding: 10px 14px; border-radius: 8px; margin-top: 10px;">
  <div class="callout-bar" style="background-color: var(--amber); height: 28px;"></div>
  <div style="font-size: 17px; color: #374151;">
    💡 <strong>Como responder no teclado:</strong> Digite <code>y</code> (yes) ou <code>s</code> (sim) para <strong>true</strong>, ou <code>n</code> (no) para <strong>false</strong>.
  </div>
</div>

---

<span class="tag">BLOCO 4 · ARSENAL DO INQUIRER (4/6)</span>

## 4. `select()` · Menu de Opções com Setas

Cria menus interativos profissionais para o terminal:

```javascript
import { select } from '@inquirer/prompts';

const turno = await select({
  message: 'Selecione o seu turno de estudo:',
  choices: [
    { name: 'Manhã (08h às 12h)', value: 'M' },
    { name: 'Tarde (13h às 17h)', value: 'T' },
    { name: 'Noite (18h às 22h)', value: 'N' }
  ]
});

console.log(`Turno selecionado: ${turno}`);
```

<div class="callout-item" style="background: rgba(2, 132, 199, 0.08); padding: 10px 14px; border-radius: 8px; margin-top: 10px;">
  <div class="callout-bar" style="background-color: var(--senac-blue); height: 28px;"></div>
  <div style="font-size: 17px; color: #111827;">
    🎮 O aluno navega com as setas <code>↑</code> e <code>↓</code> do teclado e confirma com <code>Enter</code>. O programa recebe o <code>value</code>!
  </div>
</div>

---

<span class="tag">BLOCO 4 · ARSENAL DO INQUIRER (5/6)</span>

## 5. `checkbox()` · Seleção Múltipla

Permite que o usuário marque uma ou mais opções da lista:

```javascript
import { checkbox } from '@inquirer/prompts';

const modulos = await checkbox({
  message: 'Quais competências você deseja desenvolver?',
  choices: [
    { name: 'Lógica e Algoritmos com JavaScript', value: 'logica', checked: true },
    { name: 'Banco de Dados Relacional (SQLite)', value: 'sql' },
    { name: 'Interfaces Desktop com Electron', value: 'electron' }
  ]
});

console.log('Módulos selecionados:', modulos);
// Retorna uma lista (Array): [ 'logica', 'sql' ]
```

<div class="callout-item" style="background: rgba(0, 0, 0, 0.04); padding: 10px 14px; border-radius: 8px; margin-top: 10px;">
  <div class="callout-bar" style="background-color: var(--amber); height: 28px;"></div>
  <div style="font-size: 17px; color: #374151;">
    ⌨️ <strong>Controle no Teclado:</strong> Aperte <strong>Espaço</strong> para marcar/desmarcar e aperte <strong>Enter</strong> para confirmar.
  </div>
</div>

---

<span class="tag">BLOCO 4 · ARSENAL DO INQUIRER (6/6)</span>

## 6. `password()` · Entrada Oculta para Senhas

Fundamental para evitar que senhas e credenciais apareçam no monitor ou telão:

```javascript
import { password } from '@inquirer/prompts';

const senha = await password({
  message: 'Crie uma senha de acesso ao sistema:',
  mask: '*' // Substitui cada caractere digitado por um asterisco
});

console.log("Senha armazenada com sucesso na memória!");
```

<div class="callout-item" style="background: rgba(234, 88, 12, 0.08); padding: 10px 14px; border-radius: 8px; margin-top: 10px;">
  <div class="callout-bar" style="background-color: var(--senac-orange); height: 28px;"></div>
  <div style="font-size: 17px; color: #111827;">
    🔒 <strong>Segurança:</strong> O texto real fica guardado na variável, mas nenhum colega sentado ao lado consegue ler o que foi digitado!
  </div>
</div>

---

<span class="tag">BLOCO 5 · OPERADORES ARITMÉTICOS</span>

## Fazendo a Máquina Calcular: Os 6 Operadores

JavaScript possui operadores matemáticos nativos para processamento numérico:

| Operador | Operação | Exemplo em Código | Resultado |
| :---: | :--- | :--- | :---: |
| **`+`** | Adição | `10 + 5` | `15` |
| **`-`** | Subtração | `20 - 8` | `12` |
| **`*`** | Multiplicação | `7 * 6` | `42` |
| **`/`** | Divisão | `25 / 2` | `12.5` |
| **`%`** | Módulo *(Resto da Divisão)* | `10 % 3` | `1` *(resto!)* |
| **`**`** | Exponenciação *(Potência)* | `2 ** 3` | `8` *(2³)* |

<div class="callout-item" style="background: rgba(180, 120, 24, 0.08); padding: 10px 14px; border-radius: 8px; margin-top: 10px;">
  <div class="callout-bar" style="background-color: var(--amber); height: 28px;"></div>
  <div style="font-size: 17px; color: #374151;">
    💡 <strong>O Truque do Módulo:</strong> <code>numero % 2 === 0</code> verifica se o número é <strong>PAR</strong>! Se sobrar <code>1</code>, ele é <strong>ÍMPAR</strong>.
  </div>
</div>

---

<span class="tag">BLOCO 5 · CONVERSÕES DE TIPO</span>

## A Armadilha Histórica da Soma vs Concatenação

O que acontece quando juntamos texto e número?

```javascript
// O sinal de '+' é sobrecarregado: ele SOMA números, mas CONCATENA textos!
console.log("20" + 5);  // "205"  -> ERRO COMUM! Juntou os textos!
console.log("20" - 5);  // 15     -> O JS converte automaticamente na subtração!
console.log("10" * 3);  // 30     -> Converte na multiplicação!
```

### Como Garantir Números Seguros:
1. Usando **`number()`** do Inquirer: já devolve o tipo `number` garantido.
2. Usando **`Number(texto)`**: converte strings numéricas de forma estrita:

```javascript
const textoIdade = "25";
const idadeReal = Number(textoIdade); // Agora é o número 25!
console.log(idadeReal + 5); // 30 (Soma matemática correta)
```

---

<span class="tag">BLOCO 6 · OPERADORES RELACIONAIS</span>

## Comparando Valores: Verdadeiro ou Falso?

Operadores relacionais fazem perguntas à máquina e **sempre devolvem um booleano** (`true` ou `false`):

| Operador | Significado | Exemplo | Retorno |
| :---: | :--- | :--- | :---: |
| **`===`** | **Estritamente Igual** *(valor E tipo)* | `10 === 10` | `true` |
| **`!==`** | **Estritamente Diferente** | `10 !== "10"` | `true` *(tipos diferentes!)* |
| **`>`** | Maior que | `18 > 16` | `true` |
| **`<`** | Menor que | `25 < 10` | `false` |
| **`>=`** | Maior ou Igual a | `18 >= 18` | `true` |
| **`<=`** | Menor ou Igual a | `7 <= 5` | `false` |

<div class="callout-item" style="background: rgba(234, 88, 12, 0.08); padding: 10px 14px; border-radius: 8px; margin-top: 10px;">
  <div class="callout-bar" style="background-color: var(--senac-orange); height: 28px;"></div>
  <div style="font-size: 17px; color: #374151;">
    🚫 <strong>Regra de Ouro Senac:</strong> <strong>NUNCA use <code>==</code> ou <code>!=</code></strong>. Eles tentam adivinhar tipos e criam bugs ocultos. Use sempre a igualdade estrita <strong><code>===</code></strong> e <strong><code>!==</code></strong>!
  </div>
</div>

---

<span class="tag">BLOCO 7 · OPERADORES LÓGICOS</span>

## Combinando Condições: E, OU e NÃO

No mundo real, decisões dependem de várias condições simultâneas:

<div class="grid-3">
  <div class="card">
    <div class="card-title">&& (E / AND)</div>
    <div class="card-text">
      <strong>Todas</strong> as condições devem ser verdadeiras.<br>
      <code>(idade >= 18 && temCnh)</code>
    </div>
  </div>
  <div class="card">
    <div class="card-title">|| (OU / OR)</div>
    <div class="card-text">
      <strong>Pelo menos uma</strong> condição deve ser verdadeira.<br>
      <code>(temIngresso || nomeNaLista)</code>
    </div>
  </div>
  <div class="card">
    <div class="card-title">! (NÃO / NOT)</div>
    <div class="card-text">
      <strong>Inverte</strong> o valor lógico.<br>
      <code>!chovendo</code> vira <code>true</code> se estava falso.
    </div>
  </div>
</div>

```javascript
const idade = 19;
const temIngresso = true;
const acompanhado = false;

// Regra: Pode entrar se tiver ingresso E (for maior de idade OU estiver acompanhado)
const podeEntrar = temIngresso && (idade >= 18 || acompanhado);
console.log(`Acesso liberado? ${podeEntrar}`); // true
```

---

<!-- _class: activity -->

<span class="tag">ATIVIDADE PRÁTICA · BANCADA</span>

## Mini-Desafio: Simulador de Matrícula Senac

Crie um arquivo chamado **`simulador_matricula.js`**:

1. Peça o **nome do aluno** via `input`.
2. Peça a **idade** via `number` (com `min: 0, max: 120`).
3. Pergunte se possui o **ensino fundamental completo** via `confirm`.
4. Calcule a regra de elegibilidade do curso Programador de Sistemas:
   - **Regra:** Idade mínima de 16 anos **E** escolaridade completa.
5. Imprima no terminal o resumo com o resultado da expressão lógica:

```text
========================================
       VALIDADOR DE MATRÍCULA SENAC     
========================================
Candidato(a): Marcus Vinicius
Idade informada: 17 anos
Escolaridade confirmada? true
----------------------------------------
Elegível para o curso? true
========================================
```

---

<span class="tag">SÍNTESE & ENCERRAMENTO</span>

## O Que Conquistamos na Aula 02?

<div class="grid-3">
  <div class="card">
    <div class="card-title">1. Entrada & Saída</div>
    <div class="card-text">Formatação com <code>repeat</code>, <code>padEnd</code> e captura tipada com <code>@inquirer/prompts</code>.</div>
  </div>
  <div class="card">
    <div class="card-title">2. Memória & Tipos</div>
    <div class="card-text">Declarações seguras com <code>const</code>, inspeção com <code>typeof</code> e conversão com <code>Number()</code>.</div>
  </div>
  <div class="card">
    <div class="card-title">3. Lógica Computacional</div>
    <div class="card-text">Operações aritméticas (<code>+ - * / %</code>), relacionais (<code>=== !== &gt; &lt;</code>) e lógicas (<code>&amp;&amp; || !</code>).</div>
  </div>
 </div>

---

<!-- _class: cover -->

<span class="tag">PRÓXIMA AULA · AULA 03</span>

# Estruturas de Decisão
### Ensinando o Computador a Escolher Caminhos

<p class="subtitle">Bifurcações na execução com if, else, else if, o poder do switch...case e o atalho do operador ternário.</p>

<p class="meta-footer">Excelente prática e nos vemos na Aula 03! 🚀</p>

