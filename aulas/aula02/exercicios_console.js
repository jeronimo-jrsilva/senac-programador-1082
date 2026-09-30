// =====================================================================
// 🎓 SENAC CEARÁ · PROGRAMADOR DE SISTEMAS (FIC)
// UC1: Desenvolvimento de Sistemas · Aula 02: Codespaces, Console & Variáveis
// Docente: Jeronimo Silva
// =====================================================================
//
// INSTRUÇÕES DE EXECUÇÃO NO GITHUB CODESPACES:
// 1. Abra o terminal integrado com: Ctrl + '
// 2. Para rodar este arquivo: node exercicios_console.js
// 3. Ou use o modo automático: node --watch exercicios_console.js
// =====================================================================

// ---------------------------------------------------------------------
// EXERCÍCIO 1: Primeiro Contato & Template Literals
// ---------------------------------------------------------------------
// Instruções:
// A) Crie uma constante chamada "meuNome" com o seu primeiro nome.
// B) Crie uma constante chamada "minhaTurma" com o valor "Programador de Sistemas".
// C) Crie uma constante chamada "unidadeSenac" com o valor "Senac Centro".
// D) Use Template Literals (crase `` e ${}) para exibir uma mensagem formatada
//    exatamente assim:
//    "Olá! Eu sou o [nome], aluno de [turma] no [unidade]."

console.log("=".repeat(50));
console.log("EXERCÍCIO 1: Apresentação com Template Literals");
console.log("=".repeat(50));

// Escreva seu código do Exercício 1 abaixo:




// ---------------------------------------------------------------------
// EXERCÍCIO 2: Criando Bordas e Banners com repeat()
// ---------------------------------------------------------------------
// Instruções:
// A) Use "-".repeat(50) para criar divisores limpos.
// B) Crie um banner de boas-vindas centralizado entre duas linhas de "=".
// C) Crie uma linha de 30 asteriscos "*" usando o método repeat().

console.log("\n" + "=".repeat(50));
console.log("EXERCÍCIO 2: Bordas com repeat()");
console.log("=".repeat(50));

// Escreva seu código do Exercício 2 abaixo:




// ---------------------------------------------------------------------
// EXERCÍCIO 3: Alinhando o Recibo com padEnd() e padStart()
// ---------------------------------------------------------------------
// Instruções:
// Crie constantes para 3 produtos de informática e seus respectivos preços (em texto):
// Exemplo:
// const prod1 = "Pendrive 64GB";      const preco1 = "R$ 35,00";
// const prod2 = "Headset USB";         const preco2 = "R$ 120,00";
// const prod3 = "Mousepad Gamer";      const preco3 = "R$ 45,00";
//
// Regra de Alinhamento:
// O nome do produto deve ocupar 30 caracteres, alinhado à esquerda e preenchido com pontos: .padEnd(30, ".")
// O preço deve ocupar 12 caracteres, alinhado à direita: .padStart(12, " ")
//
// Imprima os 3 produtos perfeitamente alinhados, com cabeçalho e rodapé!

console.log("\n" + "=".repeat(50));
console.log("EXERCÍCIO 3: Recibo Alinhado (padEnd e padStart)");
console.log("=".repeat(50));

// Escreva seu código do Exercício 3 abaixo:




// ---------------------------------------------------------------------
// EXERCÍCIO 4: Caixas de Memória (const vs let) e typeof
// ---------------------------------------------------------------------
// Instruções:
// A) Crie uma constante "cidade" com "Fortaleza" (string).
// B) Crie uma variável "temperatura" com 28.5 (number).
// C) Crie uma constante "chovendo" com false (boolean).
// D) Exiba no console o valor e o tipo de cada variável usando o operador "typeof".
//    Ex: console.log(`cidade: ${cidade} | Tipo: ${typeof cidade}`);
// E) Reatribua a variável "temperatura" para 31.0 e exiba o novo valor.
// F) (Opcional - Teste do Erro): Tente reatribuir a constante "cidade" para outra cidade,
//    rode o arquivo, veja o erro no console e depois comente a linha para corrigir!

console.log("\n" + "=".repeat(50));
console.log("EXERCÍCIO 4: Variáveis, Tipos e typeof");
console.log("=".repeat(50));

// Escreva seu código do Exercício 4 abaixo:




// ---------------------------------------------------------------------
// EXERCÍCIO 5 (BÔNUS): Captura de Dados Interativa com @inquirer/prompts
// ---------------------------------------------------------------------
// NOTA: Para rodar este exercício interativo, você precisa ter executado
// os comandos no terminal do Codespaces:
// 1) npm init -y
// 2) npm pkg set type="module"
// 3) npm install @inquirer/prompts
//
// Descomente o código abaixo para testar a entrada pelo teclado:

/*
import { input } from '@inquirer/prompts';

console.log("\n" + "=".repeat(50));
console.log("EXERCÍCIO 5: Sistema de Crachá Interativo");
console.log("=".repeat(50));

const nomeUsuario = await input({ message: "Digite seu nome: " });
const cargoUsuario = await input({ message: "Digite seu cargo/função: " });

console.log("\n+----------------------------------------+");
console.log("|             CRACHÁ OFICIAL             |");
console.log("+----------------------------------------+");
console.log(`| NOME:  ${nomeUsuario.padEnd(31, " ")}|`);
console.log(`| CARGO: ${cargoUsuario.padEnd(31, " ")}|`);
console.log("+----------------------------------------+");
*/
