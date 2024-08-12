// Função: length
// Descrição: Retorna o comprimento da string.
const str = "Hello, World!";
const length = str.length; // 13
console.log("Comprimento da string:", length);

// Função: charAt()
// Descrição: Retorna o caractere na posição especificada.
const charAtExample = str.charAt(0); // 'H'
console.log(charAtExample);

// Função: charCodeAt()
// Descrição: Retorna o código Unicode do caractere na posição especificada.
const charCodeAtExample = str.charCodeAt(0); // 72
console.log(charCodeAtExample);

// Função: concat()
// Descrição: Concatena (une) duas ou mais strings.
const str1 = "Hello";
const str2 = "World";
const concatenated = str1.concat(", ", str2, "!"); // 'Hello, World!'
console.log(concatenated);

// Função: includes()
// Descrição: Verifica se uma string contém outra string, retornando true ou false.
const includesExample = str.includes("World"); // true
console.log(includesExample);

// Função: indexOf()
// Descrição: Retorna a posição da primeira ocorrência de uma substring dentro de uma string.
const indexOfExample = str.indexOf("World"); // 7
console.log(indexOfExample);

// Função: lastIndexOf()
// Descrição: Retorna a posição da última ocorrência de uma substring dentro de uma string.
const lastIndexOfExample = str.lastIndexOf("o"); // 8
console.log(lastIndexOfExample);

// Função: padStart()
// Descrição: Preenche a string original com um determinado caractere até atingir o comprimento especificado, adicionando caracteres no início.
const padStartExample = str1.padStart(10, '*'); // '*****Hello'
console.log(padStartExample);

// Função: padEnd()
// Descrição: Preenche a string original com um determinado caractere até atingir o comprimento especificado, adicionando caracteres no final.
const padEndExample = str1.padEnd(10, '*'); // 'Hello*****'
console.log(padEndExample);

// Função: repeat()
// Descrição: Retorna uma nova string com um número especificado de cópias da string original.
const repeatExample = str1.repeat(3); // 'HelloHelloHello'
console.log(repeatExample);

// Função: replace()
// Descrição: Substitui uma substring por outra dentro de uma string.
const replaceExample = str.replace("World", "Everyone"); // 'Hello, Everyone!'
console.log(replaceExample);

// Função: replaceAll()
// Descrição: Substitui todas as ocorrências de uma substring por outra dentro de uma string.
const replaceAllExample = str.replaceAll("l", "x"); // 'Hexxo, Worxd!'
console.log(replaceAllExample);

// Função: slice()
// Descrição: Extrai uma parte da string e retorna como uma nova string, sem modificar a original.
const sliceExample = str.slice(7, 12); // 'World'
console.log(sliceExample);

// Função: split()
// Descrição: Divide uma string em um array de substrings, usando um delimitador.
const splitExample = str.split(", "); // ['Hello', 'World!']
console.log(splitExample);

// Função: startsWith()
// Descrição: Verifica se a string começa com a substring especificada.
const startsWithExample = str.startsWith("Hello"); // true
console.log(startsWithExample);

// Função: endsWith()
// Descrição: Verifica se a string termina com a substring especificada.
const endsWithExample = str.endsWith("!"); // true
console.log(endsWithExample);

// Função: substring()
// Descrição: Extrai os caracteres entre dois índices especificados e retorna como uma nova string.
const substringExample = str.substring(7, 12); // 'World'
console.log(substringExample);

// Função: toLowerCase()
// Descrição: Converte todos os caracteres da string para minúsculas.
const toLowerCaseExample = str.toLowerCase(); // 'hello, world!'
console.log(toLowerCaseExample);

// Função: toUpperCase()
// Descrição: Converte todos os caracteres da string para maiúsculas.
const toUpperCaseExample = str.toUpperCase(); // 'HELLO, WORLD!'
console.log(toUpperCaseExample);

// Função: trim()
// Descrição: Remove espaços em branco do início e do fim da string.
const trimExample = "  Hello, World!  ".trim(); // 'Hello, World!'
console.log(trimExample);

// Função: trimStart() (ou trimLeft())
// Descrição: Remove espaços em branco do início da string.
const trimStartExample = "  Hello, World!  ".trimStart(); // 'Hello, World!  '
console.log(trimStartExample);

// Função: trimEnd() (ou trimRight())
// Descrição: Remove espaços em branco do fim da string.
const trimEndExample = "  Hello, World!  ".trimEnd(); // '  Hello, World!'
console.log(trimEndExample);

// Função: valueOf()
// Descrição: Retorna o valor primitivo de um objeto String.
const valueOfExample = str.valueOf(); // 'Hello, World!'
console.log(valueOfExample);

// Função: match()
// Descrição: Retorna as correspondências de uma string com uma expressão regular.
const matchExample = str.match(/o/g); // ['o', 'o']
console.log(matchExample);

// Função: search()
// Descrição: Pesquisa uma string para encontrar uma correspondência com uma expressão regular e retorna a posição da correspondência.
const searchExample = str.search("World"); // 7
console.log(searchExample);

// Função: toString()
// Descrição: Retorna uma string representando o objeto.
const toStringExample = str.toString(); // 'Hello, World!'
console.log(toStringExample);

// Função: localeCompare()
// Descrição: Compara duas strings em uma ordem específica de acordo com a localidade (linguagem e convenções culturais).
const localeCompareExample = "a".localeCompare("b"); // -1 (indica que 'a' vem antes de 'b')
console.log(localeCompareExample);

// Função: fromCharCode()
// Descrição: Retorna uma string criada a partir de uma sequência de valores Unicode.
const fromCharCodeExample = String.fromCharCode(72, 101, 108, 108, 111); // 'Hello'
console.log(fromCharCodeExample);

// Função: raw()
// Descrição: Permite criar strings cruas (escapadas) de template strings.
const rawExample = String.raw`C:\temp\node`; // 'C:\temp\node'
console.log(rawExample);
