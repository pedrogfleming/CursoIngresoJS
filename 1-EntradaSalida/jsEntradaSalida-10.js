/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

	//Reservo espacio en memoria creando las varables
	
	let sueldoingresado;
	let resultadofinal;
	let porcentaje;
	let descuento = 25;
	//Cargo el valor con los datos de entrada y lo parseo para que se pueda operarar 
	
	sueldoingresado = parseInt (document.getElementById("txtIdImporte").value);
	
	resultadofinal = parseInt (document.getElementById("txtIdResultado").value);

	porcentaje = parseInt
	
	//Realizo las operaciónes , primero saco el porcentaje y después se lo resto

	porcentaje = sueldoingresado * descuento / 100;
	resultadofinal = sueldoingresado - porcentaje;
	
	
	//muestro el resultado final en la caja "Resultado"
	document.getElementById("txtIdResultado").value = resultadofinal;

	}
