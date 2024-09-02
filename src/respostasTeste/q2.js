// Escreva uma função chamada reverseStringArray que recebe um array de strings
// como argumento e retorna um novo array onde cada string está invertida. Por
// exemplo:
// reverseStringArray(["hello", "world"]); // retorna ["olleh", "dlrow"]

const reverseStringArray = (array) => {
    let novoarray = [];
    for(let i = 0; i<array.length; i++){
        //novoarray.push(array[i].split("").reverse().join(""));
        let auxiliar = "";
        for (let j=array[i].length - 1;j >= 0; j--){
            auxiliar = auxiliar + array[i][j];
        }
        novoarray.push(auxiliar);
    }
    return novoarray;
}

console.log(reverseStringArray(["hello", "world"]))