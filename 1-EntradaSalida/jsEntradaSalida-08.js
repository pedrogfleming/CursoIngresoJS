/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{	

	//Reservo espacio en memoria creando las varables
	
	let num1;
	let num2;
	let resultado;
	
	//Cargo los valores con los datos de entrada y los parseo para que se pueden operarar entre sí los valores
	
	num1 = parseInt (document.getElementById("txtIdNumeroDividendo").value);
	num2 = parseInt (document.getElementById("txtIdNumeroDivisor").value);
	
	//Sacó el módulo de  los valores ingresados
	
	
	resultado = num1 % num2;
	
	alert("El resto es " + resultado);
	
	}