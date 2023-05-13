/* Calcular las calificaciones de un grupo de alumnos, donde la nota final de cada alumno se calcula según el siguiente
 criterio:
    • la parte práctica vale el 10%
    • la parte de problemas vale el 50%
    • la parte teórica el 40%
Se debe ingresar el nombre del alumno y sus tres notas, se escribirá el resultado y se volverá a pedir los datos del 
siguiente alumno hasta que el nombre sea una cadena vacía
Las notas deben estar entre 0 y 10 (si no lo están, no imprimirá las notas, mostrará un mensaje de error y continuará 
con otro alumno)*/

import * as rls from "readline-sync"

let alumno : string = rls.question ("Ingrese el nombre del alumno: ");
let practica : number = rls.questionInt ("Ingrese nota de practica: ");
let problemas : number = rls.questionInt ("Ingrese nota de problemas: ");
let teorica: number = rls.questionInt ("Ingrese nota de teorica: ");
let promedio: number = practica * 0.1 + problemas * 0.5 + teorica * 0.40;

while (alumno!=""){
    alumno=rls.question ("Ingrese el nombre del alumno: ");
    promedio;
    console.log (promedio);
    
    
   
} console.log("FIN");