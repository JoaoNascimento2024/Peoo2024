/*
Crie uma função chamada mergeAndSortArrays que recebe dois arrays de strings
como argumentos. A função deve combinar os dois arrays, remover quaisquer
duplicatas e retornar o array resultante com as strings ordenadas em ordem
alfabética. Por exemplo:
mergeAndSortArrays(["apple", "banana", "cherry"], ["banana", "date", "apple"]);
// retorna ["apple", "banana", "cherry", "date"]
*/

function mergeAndSortArrays(array1, array2){
    let finalArray = []
    string1 = array1.join(" ");
    string2 = array2.join(" ");

    concatenated = string1.concat(" ", string2);
    arrayString = concatenated.split(" ").sort();
    
    for(element of arrayString){
        if(!finalArray.includes(element)){
            finalArray.push(element);
        }
    }

    return finalArray
}
console.log(mergeAndSortArrays(["apple", "banana", "cherry"], ["banana", "date", "apple"]))