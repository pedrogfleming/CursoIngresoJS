/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()

{
/*	let nombre;
//Obtengo por ID de la caja de html el value para poder mostrarlo
	nombre = document.getElementById("txtIdNombre").value;

	alert(nombre);

	nombre = document.getElementById("txtIdNombre").value= ""
/*

//Ejercicios alternativos

/* 1) Ingresar descripción (por prompt) y precio de un producto (por id).
El progrma deberá mostrar por alert la descricpión del producto  junto al precio aumentado en un 30%. Pueden utilizar el html del ejercicio 4 para resolverlo.
*/

//Declaro las variables

let descripcion;
let precioProducto;
let montoAumento;
let precioFinal;

//Usuario ingresa descripción del producto

descripcion = prompt("Ingrese la descripción del producto");

//Usuario ingresa precio del producto por ID

precioProducto = document.getElementById("txtIdNombre").value;

//Parseo el precio del producto

precioProducto = parseFloat(precioProducto);

//Calculo el 30% del producto

montoAumento = precioProducto*0.3;

//calculo el precio final del producto con el aumento

precioFinal = precioProducto+montoAumento;

//Le muestro al usuario la descricpión del producto  junto al precio aumentado en un 30%

alert("El producto es "+descripcion+" y el precio final con aumento del 30% es de "+precioFinal+" pesos");


}



/*
Pedir al usuario los siguientes datos:
nombreDelAlumno: por  id.value
edadDelAlumno: por prompt
Mostrar por alert el mensaje "Ud  se llama ... y tiene ... años"

PUEDEN UTILIZAR EL HTML DEL EJERCICIO 3
*/

/*function mostrar()
{
	let nombreDelAlumno;
    let edadDelAlumno;
    
	nombreDelAlumno = document.getElementById("txtIdNombre").value;
    edadDelAlumno = prompt ("Ingrese su edad");



	
    	alert("Usted se llama " + nombreDelAlumno + " y tiene " + edadDelAlumno + " años");
}
*/

