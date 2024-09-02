/*
Escreva uma função chamada findUniqueCharacters que recebe uma string e
retorna um array contendo todos os caracteres únicos dessa string, na ordem em
que aparecem. Por exemplo:
*/

function findUniqueCharacters(content){
    let resposta = [];
    for (let i=0; i<content.length;i++){
        let contador = 0;
        for (let j=0;j<content.length;j++){
            if (content[i] === content[j]){
                contador++;
            }
        }
        
        if (contador > 1){
            if (!resposta.includes(content[i]))
                resposta.push(content[i]);
        }
    }
    return resposta;
}

resposta = findUniqueCharacters("abracadabra"); // retorna ["c", "d"]
console.log(resposta);