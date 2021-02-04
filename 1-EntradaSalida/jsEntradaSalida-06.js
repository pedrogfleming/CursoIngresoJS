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

//Cargo los valores con los datos de entrada
//si no pongo el value, me va a tirara error html.input,objet porque tomaria todo el objetvo y no solo el valor como busco

num1 = document.getElementById("txtIdNumeroUno").value;
num2 = document.getElementById("txtIdNumeroDos").value;

//parseo

num1 = parseInt (num1);
num2 = parseInt (num2);


//Sumo los valores ingresados

resultado = num1 + num2;

alert("La suma es " + resultado);

}