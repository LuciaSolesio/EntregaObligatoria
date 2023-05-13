import * as rls from "readline-sync";

let num1: number = rls.questionInt ("De que numero desea saber la tabla?: ");
let num2: number = rls.questionInt ("Hasta que numero?: ");
let result : number = 0;

for (let i : number = 1; i <= num2; i ++) { //la variable de control se modifica ya aca dentro a dif del while quese hace abajo
    result = num1 * i;
    console.log(num1 , "x" , i , "=" , result);
}
