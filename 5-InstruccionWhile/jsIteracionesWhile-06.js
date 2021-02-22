function mostrar()
{
/*2. Mismo ejercicio, pero no se cuantos numeros se ingresan. (Lo decide el usuario).
	Mostrar tambien el promedio de los numeros que cumplen la condicion.*/

























	
/*1. Ingresar 5 numeros,
 y determinar la cantidad de numeros que son mayores que 10 y menores 20 (incluisive en ambos casos)


//Declaro las variables
let seguir;
let numeroIngresado;
let mayoresDiez;
let menoresVeinte;
let i;
//Inicializo el , el acumulador contador y el seguir}
mayoresDiez = 0;
menoresVeinte = 0;
seguir = "si";
i = 0;
//Mientras el usuario quiera, ingresa N°
while (seguir == "si") 
{
	numeroIngresado = prompt("Ingrese un número");
	numeroIngresado = parseInt(numeroIngresado);
	if (numeroIngresado >10)//Evaluo si el N° ingresado es Mayor a 10,Si es mayor a 10, lo contabilizo
	{
		mayoresDiez = mayoresDiez+1;
		if (numeroIngresado < 20) //Ademas, //Evaluo si el N° ingresado es menor a 20, si es menor a 20, lo contabilizo
		{
			menoresVeinte = menoresVeinte+1;
		}
	}
	seguir = prompt("¿Desea seguir ingresando números?","si");
}
//Le informo al usuario la cantidad de numeros que cumplen cada caso
alert("La cantidad de N° mayores a 10 es de "+mayoresDiez+", y la cantidad de de N° menores a 20 es de "+menoresVeinte);
}//FIN DE LA FUNCIÓN













/*Enunciado:
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.*/

/*	let contador;
	let acumulador;
	let numeroIngresado;
//Inicializo el contador y el acumulador
contador=0;
acumulador=0;
//Usuario ingresa numero
//Invoco el while
while (contador <5) 
{
	numeroIngresado = prompt("Ingrese un númeor");
	numeroIngresado = parseFloat(numeroIngresado);
	contador = contador+1;
	acumulador = acumulador+numeroIngresado;
}
//Muestro al usuario la suma y el promedio de los 5 numeros
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN*/