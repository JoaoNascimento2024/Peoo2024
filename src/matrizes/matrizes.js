
//import {imprimirMatriz} from "./util.js";
import * as matrizes from "./util.js";

//Para se declarar uma matriz, utilize o conceito de array de arrays
let matrizA = [[2,3,6],[5,9,3],[1,2,4]];

matrizes.imprimirMatriz(matrizA);

let matrizB = [[41,5,2],[36,4,9],[2,8,3]];

matrizes.imprimirMatriz(matrizB);

//Soma de matrizes
matrizes.imprimirMatriz(matrizes.somarMatrizes(matrizA,matrizB));

