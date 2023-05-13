/*Leer valores del usuario hasta que introduzca un 0
    • El usuario puede introducir valores numéricos, tanto
    positivos como negativos
    • Contar la cantidad de valores introducidos que sean
    mayores a 0 y el porcentaje de positivos respecto del total*/


import * as rls from "readline-sync";

let numIngresado, negativos, positivos : number;
numIngresado = -1;
negativos = 0;
positivos = 0;
let cantidad : number = 0;
let porcentaje : number = 0;

while (numIngresado != 0) {
    numIngresado = rls.questionInt("Ingrese un numero: ");
    if (numIngresado > positivos && numIngresado != 0) {
        positivos = positivos + 1;
    } if (numIngresado < negativos && numIngresado != 0) {
        negativos = negativos + 1;
    } if (numIngresado == 0) {
        cantidad = negativos + positivos;
        porcentaje = (positivos * 100) / cantidad;
        
    }

} console.log(positivos, "son mayores a 0 y el", porcentaje, "% son positivos");
