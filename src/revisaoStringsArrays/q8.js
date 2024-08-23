/**Questão 8: Escreva uma função chamada compressString que recebe uma string e retorna
uma versão comprimida da string onde cada sequência de caracteres iguais é substituída
pelo caractere seguido pelo número de ocorrências. Se a versão comprimida não for menor
que a string original, retorne a string original. Por exemplo:
compressString("aaabbcccc"); // retorna "a3b2c4"
compressString("abc"); // retorna "abc" */


function compressString(contentString){
    let letters = [];
    for (let i = 0; i< contentString.length; i++){
        if (letters.includes(contentString[i]) === false){
            letters.push(contentString[i]);
        }
    }

    let result = "";
    for (let i = 0; i< letters.length; i++){
        let count = 0;
        for (let j = 0; j < contentString.length; j ++){
            if (letters[i] === contentString[j]){
                count++;    
            }
        }
        result = result + `${letters[i]}${count}`;
    }
    if (result.length > contentString.length){
        return contentString;
    }else{
        return result;
    }
}

console.log(compressString("aaabbcc"));

function compressStringJulio(objeto){
    if (objeto.length === 0)
        return null;
    let primeiro = objeto[0]
    let ocorrencia = 1
    let vazio = ''
    for(x=1; x<objeto.length+1; x++){
        if(primeiro===objeto[x]){
            ocorrencia += 1
        }else if(primeiro!==objeto[x]){
            vazio = vazio+primeiro+String(ocorrencia)
            primeiro = objeto[x]
            ocorrencia = 1
        }
    }
    vazio = vazio.replace('1','')
    if(vazio.length < objeto.length){
        return vazio
    }else{
        return objeto
    }
}
console.log(compressStringJulio('aaabbccc'))
console.log(compressStringJulio('abc'))