/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{	


	/*
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
	

	*/

	//EJERCICIO ALTERNATIVO

	/* Ingresar dos numeros por ID

	Mostrar por console.log:
	a) La suma de los dos numeros
	b) El promedio de los numeros
	c) El modulo de los numeros (el primero en modulo del segundo)
	*/

	//Declaro las variables

	let numeroUno;
	let numeroDos;
	let sumaTotal;
	let promedioTotal;
	let modulo;


	//Usuario ingresa los dos numeros por ID y los parseo

	numeroUno = document.getElementById("txtIdNumeroDividendo").value;
	numeroUno = parseFloat (numeroUno);
	numeroDos = document.getElementById("txtIdNumeroDivisor").value;
	numeroDos = parseFloat (numeroDos);

	//Hago la suma de los dos numeros

	sumaTotal = numeroUno+numeroDos;

	//Hago el promedio de los dos numeros

	promedioTotal = sumaTotal/2;

	//Hago el modulo de los dos numeros

	modulo = numeroUno%numeroDos;

	//Muestro por console.log el resultado de todas las operatorias

	console.log("La suma de los números ingresados "+numeroUno+" y "+numeroDos+" es igual a "+sumaTotal);
	console.log("El promedio de los números ingresados "+numeroUno+" y "+numeroDos+" es igual a "+promedioTotal);
	console.log("El modulo de los números ingresados "+numeroUno+" y "+numeroDos+" es igual a "+modulo);


	}