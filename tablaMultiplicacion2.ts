/* Diseñar un algoritmo que muestre por pantalla la tabla de multiplicación del número ingresado por el usuario
 Para definir hasta qué número desea que muestre la tabla de multiplicación, el usuario también deberá ingresar 
 dicho valor*/

import * as rls from "readline-sync";

let numero: number = rls.questionInt("Ingrese un numero: ");
let numFinal : number = rls.questionInt("Ingrese hasta que numero desea que se muestre la tabla: ");
let porCuanto : number = 1;
let result : number = 0;

while (porCuanto <= numFinal) { //Se ejecuta X veces mientras VC <= maximo
    result = numero * porCuanto;
    porCuanto ++; //Se incrementa en 1 en cada ciclo, esto hay que hacer extra por se ciclo WHILE
    console.log(result); //Adentro porque si esta afuera imprime 1 solo resultado (el ultimo)
    //Si quiero poner en xonsole.log numero, "x", porCuanto, "=", result no funciona bien el contador no se por que
} 

