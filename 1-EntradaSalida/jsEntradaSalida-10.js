
/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
/*
	//Reservo espacio en memoria creando las variables
	
	let sueldoIngresado;
	let resultadoFinal;
	let descuentoMonto;
	//Agrego por si en un futuro es necesario ampliar el programa para que el usuario modifique el porcentage de descuento
	let descuentoPorcentaje = 25;

	//Cargo el valor con los datos de entrada y lo parseo para que se pueda operarar 
	
	sueldoIngresado = document.getElementById("txtIdImporte").value;	
	resultadoFinal = document.getElementById("txtIdResultado").value;

	//Parseo

	descuentoMonto = parseInt(descuentoMonto);
	sueldoIngresado = parseInt(sueldoIngresado);
	resultadoFinal = parseInt (resultadoFinal);


	/*1era alternativa
	descuentoMonto = sueldoIngresado*25/100;*/
	/*2da alternativa
	descuentoMonto = sueldoIngresado *0.25;*/
	/*3era alterantiva
	resultadoFinal = sueldoIngresado - (sueldoIngresado * 0.25);*/
	

	//Realizo las operaciónes , primero saco el porcentaje y después se lo resto
	/*
	descuentoMonto = sueldoIngresado * descuentoPorcentaje / 100;
	resultadoFinal = sueldoIngresado - descuentoMonto;
	 
	
	//muestro el resultado final en la caja "Resultado"
	document.getElementById("txtIdResultado").value = resultadoFinal;


	*/

	//EJERCICIO ALTERNATIVO

	/*Se debe pedir el nombre del producto, el importe y tambien se debe pedir el porcentage de descuento al usuario
	mostrart el mensaje " usted compro un xxxxxx con xx% de descuento, el precio final es xxxx"
	*/

	//Creo las variables

	let nombreProducto;
	let importeProducto;
	let porcentajeDescuento;
	let porcentajeMonto;
	let precioFinal;

	//Usuario ingresa el nombre del producto por ID


	nombreProducto = prompt("Ingrese el nombre del producto");

	//Usuario ingresa el importe del producto y se parse el valor ingresado

	importeProducto = document.getElementById("txtIdImporte").value;
	importeProducto = parseFloat(importeProducto);

	//Usuario ingresa porcentaje a descontar

	
	porcentajeDescuento = prompt("Ingrese el porcentaje de descuento a aplicar al producto")
	porcentajeDescuento = parseFloat(porcentajeDescuento);

	//Calculo el monto del porcentaje a descontar y después se lo resto al precio final del producto

	porcentajeMonto = importeProducto*porcentajeDescuento/100;
	precioFinal = importeProducto-porcentajeMonto;

	//Le muestro al usuario el resultado de las operaciones por alert

	//alert("usted compro "+nombreProducto+" con "+porcentajeDescuento+ "% de descuento. El precio final es de "+precioFinal+" pesos");
	
	//Le muestro al usuario el resultado de las operaciones por ID
	
	document.getElementById("txtIdResultado").value = "usted compro "+nombreProducto+" con "+porcentajeDescuento+ "% de descuento. El precio final es de "+precioFinal+" pesos";
}
