// Questão 1: Como você pode inverter uma string em JavaScript?
// Resposta:
const originalStr = "JavaScript";
const reversedStr = originalStr.split("").reverse().join(""); // 'tpircSavaJ'

// Questão 2: Como você pode contar quantas vezes uma substring aparece em uma string?
// Resposta:
const text = "The rain in Spain stays mainly in the plain.";
const substring = "in";
const countOccurrences = text.split(substring).length - 1; // 4

// Questão 3: Como você pode remover todas as ocorrências de uma determinada substring de uma string?
// Resposta:
const sentence = "This is a test. This test is only a test.";
const removedSubstring = sentence.split("test").join(""); // 'This is a . This  is only a .'

// Questão 4: Como você pode verificar se uma string é um palíndromo (lê-se da mesma forma de trás para frente)?
// Resposta:
const palindromeStr = "madam";
const isPalindrome = palindromeStr === palindromeStr.split("").reverse().join(""); // true

// Questão 5: Como você pode extrair todos os números de uma string e somá-los?
// Resposta:
const stringWithNumbers = "The price is 30 dollars and 20 cents.";
const sumOfNumbers = stringWithNumbers.match(/\d+/g).map(Number).reduce((a, b) => a + b, 0); // 50

// Questão 6: Como você pode encontrar a substring mais longa em uma string que não contém caracteres repetidos?
// Resposta:
function longestUniqueSubstring(str) {
    let seen = new Map();
    let start = 0, maxLength = 0, maxStart = 0;

    for (let end = 0; end < str.length; end++) {
        const char = str[end];
        if (seen.has(char) && seen.get(char) >= start) {
            start = seen.get(char) + 1;
        }
        seen.set(char, end);

        if (end - start + 1 > maxLength) {
            maxLength = end - start + 1;
            maxStart = start;
        }
    }
    return str.substring(maxStart, maxStart + maxLength);
}

const uniqueSubstring = longestUniqueSubstring("abcabcbb"); // 'abc'

// Questão 7: Como você pode implementar uma função que comprima uma string usando a contagem de caracteres repetidos consecutivos (ex: 'aabcccccaaa' vira 'a2b1c5a3')?
// Resposta:
function compressString(str) {
    let compressed = '';
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressed += str[i] + count;
            count = 1;
        }
    }
    return compressed.length < str.length ? compressed : str;
}

const compressedStr = compressString("aabcccccaaa"); // 'a2b1c5a3'

// Questão 8: Como você pode gerar todas as permutações possíveis de uma string?
// Resposta:
function permuteString(str) {
    if (str.length <= 1) return [str];

    let permutations = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const remainingChars = str.slice(0, i) + str.slice(i + 1);
        for (const subPermutation of permuteString(remainingChars)) {
            permutations.push(char + subPermutation);
        }
    }
    return permutations;
}

const permutations = permuteString("abc"); // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

// Questão 9: Como você pode validar se uma string é um número de cartão de crédito usando o Algoritmo de Luhn?
// Resposta:
function validateCreditCardNumber(number) {
    const reversedDigits = number.replace(/\D/g, '').split('').reverse().map(Number);
    const checksum = reversedDigits.reduce((sum, digit, index) => {
        if (index % 2 !== 0) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }
        return sum + digit;
    }, 0);
    return checksum % 10 === 0;
}

const isValidCard = validateCreditCardNumber("4532015112830366"); // true

// Questão 10: Como você pode encontrar a subsequência mais longa que é comum em duas strings?
// Resposta:
function longestCommonSubsequence(str1, str2) {
    const dp = Array(str1.length + 1).fill(null).map(() => Array(str2.length + 1).fill(''));
    
    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + str1[i - 1];
            } else {
                dp[i][j] = dp[i - 1][j].length > dp[i][j - 1].length ? dp[i - 1][j] : dp[i][j - 1];
            }
        }
    }
    
    return dp[str1.length][str2.length];
}

const lcs = longestCommonSubsequence("ABCBDAB", "BDCAB"); // 'BCAB'
