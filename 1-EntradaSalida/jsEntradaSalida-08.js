/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{	

	//Reservo espacio en memoria creando las varables
	
	let dividendo;
	let divisor;
	let resultado;
	
	//Cargo los valores con los datos de entrada 
	
	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	divisor = document.getElementById("txtIdNumeroDivisor").value;
	
	//Parseo las variables

	dividendo = parseInt (dividendo);
	divisor = parseInt (divisor);
	

	//Sacó el módulo de  los valores ingresados
	 
	
	resultado = dividendo % divisor;
	
	alert("El resto es " + resultado);
	
	}