function countWords(str){
    //retira espaços no início e no final da string
    str = str.trim();

    if (str.length === 0)
        return 0;

    let contEspacos = 0;
    for (let caractere of str){
        if (caractere === " "){
            contEspacos = contEspacos + 1;
        }
    }

    return contEspacos + 1;

}

function countWordsII(str){
    //Split separa uma string a partir de uma string passada (argumento)
    //O retorno de split é um array
    //Todo array tem um comprimento (length)
    return str.split(" ").length;
}

console.log(countWords("IFRN é a melhor escola de Parnamirim"));
console.log(countWordsII("IFRN é a melhor escola de Parnamirim"));