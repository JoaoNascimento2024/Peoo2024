/*
Crie uma função chamada filterArrayByStringLength que recebe um array de strings
e um número inteiro n como argumentos e retorna um novo array contendo apenas
as strings que possuem um comprimento maior que n. Por exemplo:
filterArrayByStringLength(["short", "medium", "lengthy"], 5);
//retorna ["medium", "lengthy"]
*/

function filterArrayByStringLength(arrayString, n){
    const novaString = [];
    for (i = 0; i < arrayString.length; i++){
        if (arrayString[i].length > n){
            novaString.push(string);
        }
    }
    return novaString;
}
console.log(filterArrayByStringLength(["short", "medium", "lengthy"], 5));
console.log(filterArrayByStringLength(["short", "medium", "lengthy"], 6));