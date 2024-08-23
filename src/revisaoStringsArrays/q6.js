/**Questão 6: Crie uma função chamada concatenateArrays que recebe dois arrays de strings
e retorna um novo array onde cada elemento é a concatenação das strings que estão nas
mesmas posições nos arrays de entrada. Se os arrays tiverem tamanhos diferentes, o
restante das strings deve ser adicionado ao final do array resultante. Por exemplo:
concatenateArrays(["a", "b", "c"], ["1", "2", "3", "4"]);
// retorna ["a1", "b2", "c3", "4"] */

function concatenateArrays(firstArray, secondArray){
    let concatenatedArray = []

    if (secondArray.length < firstArray.length)
        return undefined;

    let index = 0
    for(; index < firstArray.length; index++){
        let concatenated = firstArray[index] + secondArray[index];
        concatenatedArray.push(concatenated)
    }

    if (secondArray.length > firstArray.length){
        concatenatedArray.push(secondArray.slice(index));
    }

    return concatenatedArray;
};

console.log(concatenateArrays(["a", "b", "c"], ["1", "2", "3", "4"]));