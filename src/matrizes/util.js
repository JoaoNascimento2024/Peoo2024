
export function imprimirMatriz(matriz){
    for (let i=0;i<matriz.length;i++){
        let auxiliar = "";
        for (let j=0;j<matriz[i].length;j++){
            auxiliar = auxiliar + `${matriz[i][j]}\t`;
        }
        console.log(auxiliar);
    }
    console.log("---------------------");
}

export function somarMatrizes(matrizA, matrizB){
    if (matrizA.length !== matrizB.length){
        throw new Exception("Matrizes de tamanho diferente.");
    }

    let matrizC = [];
    for (let i=0;i<matrizA.length;i++){
        if (matrizA[i].length !== matrizB[i].length){
            throw new Exception("Matrizes de tamanho diferente.");   
        }
        let auxiliar = [];
        for (let j=0;j<matrizA[i].length;j++){
            auxiliar.push(matrizA[i][j] + matrizB[i][j]);
        }
        matrizC.push(auxiliar);
    }
    return matrizC;
}

export function multiplicarMatrizes(matrizA, matrizB){

}