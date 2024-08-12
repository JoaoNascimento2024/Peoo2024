//Inicialização de arrays
let arraySimples = []; //Array vazio
let arrayInicizalizado = [1,2,3,4]; //Array com 4 

//Como acessar elementos de um array - Via indexação de 0 até N - 1
console.log(arrayInicizalizado[0]);

//Comprimento de um array - Utilize a propriedade length
let comprimento = arraySimples.length;
console.log(comprimento);

//Mais inicializações
let arrayObjeto = new Array(); //Declara um array 
let arrayComEspacos = new Array(45,65,65,98); //Declara array inicializado
console.log(arrayComEspacos.length);
console.log(arrayComEspacos[0]);

//Iniciliazado com um valor específico
let vetor = new Array(100);
vetor[0] = 0;
vetor[1] = 0;
//...
vetor[99] = 0;
for (let i=0;i<vetor.length;i++){
    vetor[i] = 0;
}

//Alternativa para inicialização
//Cria um vetor de 100 elementos inicializados com ZERO
let vetorIni = new Array(100).fill(0);

//Arrays em javascript podem conter qualquer tipo de elemento
const vetorDeObjetos = [null,undefined,{},[],2,"string", new Array(100)];

/////////////////////////////////////////////////////
//Métodos
/////////////////////////////////////////////////////

//Método para concatenação
let array1 = [1,2,3];
let array2 = [4,5,6];
let array3 = array1.concat(array2);
console.log(array3); //[1,2,3,4,5,6] 


//Verifica se cada elemento de um array passa num teste
array1 = [2,4,6,8,10,9];
resultado = array1.every(elemento => elemento % 2 === 0);
console.log(resultado);

//Revisão de funções
function testaPares(elemento){
    return elemento % 2 == 0;
}

//Arraw function com abreviações
let funcao = elemento => elemento % 2 == 0;

//Testa se pelo menos um passa no teste
resultado = array1.some(elemento => elemento % 2 !== 0);
console.log(resultado);

//Aplicação de filtros -- Retorna um vetor de números ímpares
console.log(array1.filter(e => e % 2 !== 0));

//Realizar mapeamento, ou seja, transformar elementos do array
console.log(array1.map(e => e * 2));