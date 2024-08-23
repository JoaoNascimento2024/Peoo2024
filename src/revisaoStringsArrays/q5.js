function findDuplicate(array) {
    const arrayNova = [] 
    for (let i = 0; i < array.length; i++) {
        numero = array[i] ;
        if (arrayNova.includes(numero)) {
            return numero; 
        } else {
            arrayNova.push(numero) ;
        }
    }
    return null;
}

console.log(findDuplicate([1,2,3,4,2]))
console.log(findDuplicate([1,2,3,4,5]))