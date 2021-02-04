/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	

		//Reservo espacio en memoria creando las varables
		
		let num1;
		let num2;
		let resultado;
		
		//Cargo los valores con los datos de entrada
		
		num1 = document.getElementById("txtIdNumeroUno").value;
		num2 = document.getElementById("txtIdNumeroDos").value;
		
	

		//Parseo las variables

		num1 = parseInt (num1);
		num2 = parseInt (num2);

		//Sumo los valores ingresados
		
		
		resultado = num1 + num2;
		
		alert("La suma es " + resultado);
		
		}

function restar()
{	

	//Reservo espacio en memoria creando las varables
	
	let num1;
	let num2;
	let resultado;
	
	//Cargo los valores con los datos de entrada y los parseo para que se pueden operarar entre sí los valores
	
	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	
	//Parseo las variables

	num1 = parseInt (num1);
	num2 = parseInt (num2);
	

	//Resto los valores ingresados
	
	
	resultado = num1 - num2;
	
	alert("La resta es " + resultado);
	
	}

function multiplicar()
{	
	//Reservo espacio en memoria creando las varables
	
	let num1;
	let num2;
	let resultado;
	
	//Cargo los valores con los datos de entrada y los parseo para que se pueden operarar entre sí los valores
	
	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	
	//Parseo las variables

	num1 = parseInt (num1);
	num2 = parseInt (num2);
	

	//Multiplico los valores ingresados
	
	
	resultado = num1 * num2;
	
	alert("La multiplicación es " + resultado);
	
	}

function dividir()
{	




	//Reservo espacio en memoria creando las varables
	
	let num1;
	let num2;
	let resultado;
	
	//Cargo los valores con los datos de entrada y los parseo para que se pueden operarar entre sí los valores
	
	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;
	
	//Parseo las variables

	num1 = parseInt (num1);
	num2 = parseInt (num2);
	

	//Dividio los valores ingresados
	
	
	resultado = num1 / num2;
	
	alert("La división es " + resultado);
	
	}