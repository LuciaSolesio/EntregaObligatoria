/* Tipos de Números en Arreglo (con Métodos)
• Almacene en un arreglo de dimensión N números (la cantidad es ingresada por el usuario)
• Muestre cuántos números son positivos, cuántos son negativos y cuántos ceros hay. */

import * as rls from "readline-sync";

//1. Creo las variables:
let dimension : number = rls.questionInt("Ingrese la dimension deseada: ");
let positivos : number = 0;
let negativos : number = 0;
let cantCeros : number = 0;
let numsArr: number [] = new Array(dimension); 

//2. Creo funcion para ingresar numeros al arreglo:

function cargarArr(arr: number[]) { //Void xq hace una tarea, no tiene que retornar nada. Si no pongo nada es lo mismo.
    for (let i : number = 0; i < arr.length; i++) {
        arr[i] = rls. questionInt("Ingrese un numero: ");
    }
}


//3. Funcion para evaluar los numeros
function tiposNum (arr:number[]) {
    for (let i : number = 0; i < dimension; i++) {
        arr[i] = rls.questionInt("Ingrese un numero: ");
        if (arr[i] > positivos && arr[i] != 0){
            positivos = positivos + 1;
        } if (arr[i] < negativos && arr[i] != 0) {
            negativos = negativos + 1;
        } if (arr[i] == 0) {
            cantCeros = cantCeros + 1;
        }
    } console.log(`Los positivos son: ${positivos}, los negativos son: ${negativos} y los ceros son: ${cantCeros}`);
}

console.log(tiposNum(numsArr));

//Al final en la consola, me muestra "undifined", no se si es por el void o que hice..
