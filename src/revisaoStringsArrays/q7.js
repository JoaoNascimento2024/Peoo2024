
function groupByFirstLetter(arrayStrings){
    let firstLetter = [];
    for (let word of arrayStrings){
        let letter = word[0];
        if (firstLetter.includes(letter) === false){
            firstLetter.push(letter);
        }
    }

    let object = {};
    for (let letter of firstLetter){
        object[letter] = [];
        for (let word of arrayStrings){
            if (letter === word[0]){
                object[letter].push(word);
            }
        }
    }

    return object;
}

let resultado = groupByFirstLetter(["apple", "banana", "avocado", "blueberry", "cherry"]);
console.log(resultado);
console.log(resultado.a);
console.log(resultado.b);
console.log(resultado.c);