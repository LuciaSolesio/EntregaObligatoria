/* Cree un metodo esMultiplo con 2 parametros que devuelva el valor logico verdadero o falso segun si el primer numero
que se indique como parametro es multiplo del segundo.
Recuerde que un numero es multiplo de otro si al dividirlo su resto es cero.
Recuerde que el oeprador MOD permite saber si el resto de una division es cero. */


import * as rls from "readline-sync";

let num1 : number = rls.questionInt("Ingrese un dividendo: ");
let num2 : number = rls.questionInt("Ingrese un divisor: ");

function esMultiplo(num1: number, num2: number): boolean {
    if (num1 % num2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(esMultiplo(num1, num2));