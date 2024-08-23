/*function replaceWord(strOrigin, strReplace, strSubstitute){

}*/

/////////
//Duas declarações iguais
/////////

const replaceWord = (strOrigin, strReplace, strSubstitute) => {
    return strOrigin.replaceAll(strReplace,strSubstitute);
} 

let resultado = replaceWord("The quick brown fox jumps over the lazy dog", "fox", "cat");

console.log(resultado);