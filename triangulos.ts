/* Realice un programa que devuelva el area del triangulo usando los siguientes pares de base-altura:
    (1,2) (2,4) (3,6) (4,8) (5,10) (6,12) (7,14).
    Implemente un metodo llamado calcularAreaTriangulo que reciba dos numeros por parametro (uno llamado base
        y otro altura) */

import * as rls from "readline-sync";

function calcularAreaTriangulo (base : number, altura : number): number {
    let resultado : number = (base * altura) / 2;
    return resultado; // o podria poner solo return (base*altura)/2 y me ahorro una linea
}

console.log("El area del triangulo es: ", calcularAreaTriangulo(1,2));
console.log("El area del triangulo es: ", calcularAreaTriangulo(2,4));
console.log("El area del triangulo es: ", calcularAreaTriangulo(3,6));
console.log("El area del triangulo es: ", calcularAreaTriangulo(4,8));
console.log("El area del triangulo es: ", calcularAreaTriangulo(5,10));
console.log("El area del triangulo es: ", calcularAreaTriangulo(6,12));
console.log("El area del triangulo es: ", calcularAreaTriangulo(7,14));

//NO SE DONDE PONER UN WHILE: agustin dijo que nos fijaramos que hay un patron en los numeros que pide (del 1 al 7 y del 2 al 14)