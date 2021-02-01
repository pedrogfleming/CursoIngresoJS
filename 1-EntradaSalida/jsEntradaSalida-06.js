/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{



//Reservo espacio en memoria creando las varables

let num1;
let num2;
let resultado;

//Cargo los valores con los datos de entrada y los parseo para que se pueden operarar entre sí los valores

num1 = parseInt (document.getElementById("txtIdNumeroUno").value);
num2 = parseInt (document.getElementById("txtIdNumeroDos").value);

//Sumo los valores ingresados


resultado = num1 + num2;

alert("La suma es " + resultado);

}