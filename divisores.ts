/* Implemente un metodo llamado cantidadDeDivisores que reciba un numero entero y devuelva la cantidad de divisores. 
Por ejemplo para el numero 16  sus divisores son 1, 2, 4, 8, 16, por lo cual la respuesta deberia ser 5.
Re-utilice el metodo esMultiplo implementado para el ejercicio anterior.
*/

import * as rls from "readline-sync";

let dividendo : number = rls.questionInt("Ingrese un dividendo: ");
let divisor : number = 0;
let cantDiv : number = 0;

function esMultiplo(divisor: number, dividendo: number): boolean {
    if (divisor % dividendo == 0) {
        return true;
    } else {
        return false;
    }
}

function cantidadDeDivisores (divisor: number, dividendo:number): number {
    for (divisor = 1; divisor <= dividendo; divisor ++) {
    if (esMultiplo(dividendo,divisor) == true) {
        cantDiv++;
    } 
} return cantDiv;
}
console.log(`La cantidad de divisores de ${dividendo} es: `, cantidadDeDivisores(divisor, dividendo));
