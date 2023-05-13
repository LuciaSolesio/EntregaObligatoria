/*Leer valores hasta que se introduzca un cero (0)
 El usuario puede introducir valores positivos y negativos
 Encontrar el máximo de los elementos que se introdujeron
 Analizar cómo cambia el programa para hallar el mínimo*/


import * as rls from "readline-sync";

let num : number = rls.questionInt("Ingrese un numero: ");
let i = 0; //variable que se modifica en el condicional, mientras que sea menor o igual a num. Es el maximo


while ( num != 0) { //Cuando el numero sea 0 el ciclo while se corta xq no cumple la condicion y pasa al console.log de afuera
   if (i <= num) {
    i = num;
    } 
    num = rls.questionInt("Ingrese un numero: "); //Si aca pongo console.log(num) para que repregunte, esta mal,  me tira el numero que puse infinitamente
}
console.log("El numero maximo es: ", + i); //Sale el numero mas grande por el condicional if de la linea 14