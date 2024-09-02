/**
 * Crie uma função chamada arrayToString que recebe um array de strings e um
delimitador como argumentos e retorna uma única string com os elementos do
array concatenados, separados pelo delimitador fornecido. Por exemplo:

arrayToString(["red", "green", "blue"], "-"); // retorna "red-green-blue"

 */

function arrayToString (stringArray){
    return stringArray.join("-");
}
console.log(arrayToString(["red", "green", "blue"]))