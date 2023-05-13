/* REALICE UN PROGRAMA QUE DEVUELVA LA POTENCIA DE UN NUMERO.
LA BASE Y EL EXPONENTE DEBEN SER INGRESADOS POR TECLADO.
SOLO DEBEN ADMITIRSE EXPONENTES MAYORES O IGUALES A CERO.
RECUERDE QUE EL RESULTADO DE UN NUMERO ELEVADO A LA 0 ES 1.
SEPARE LA LOGICA PARA CALCULAR LA POTENCIA UTILIZANDO METODOS. */

import * as rls from "readline-sync";

let base = rls.questionInt("Ingrese el valor de la base: ");
let exp = rls.questionInt("Ingrese el valor del exponente: ");

function esPotencia(base: number, exp: number): number {
    if (exp == 0) {
        return 1;
    } else {
        return base ** exp;
    }
   
   
}

console.log("El resultado de la potencia es: ", result); 
