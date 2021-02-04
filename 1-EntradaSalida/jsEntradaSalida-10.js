
/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

	//Reservo espacio en memoria creando las variables
	
	let sueldoIngresado;
	let resultadoFinal;
	let descuentoMonto;
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

	descuentoMonto = sueldoIngresado * descuentoPorcentaje / 100;
	resultadoFinal = sueldoIngresado - descuentoMonto;
	 
	
	//muestro el resultado final en la caja "Resultado"
	document.getElementById("txtIdResultado").value = resultadoFinal;


	
		
}
