/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 


*/
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;//Variable de control repetitiva 
	var numeroIngresado;
	let sumaPositivos;
	let contadorPositivos;
	let promedioPositivos;//Variable de trabajo
	let sumaNegativos;
	let contadorNegativos;
	let promedioNegativos;//Variable de trabajo
	let restaPositivosNegativos;//Variable de trabajo
	let contadorCeros;
	let contadorPares;
	/*
	Contadores: Permitir contar en un ciclo repetitivo cuantas veces se cumplio determinada condición especifica.
	Es un valor variable sumado con un valor fijo
	contador = contador+1;
	contador++; incremento de uno en uno
	contador += 2; incremento de dos en dos
	Acumuladores:el acumulador es variable y se le suma un valor variable
	acumulador = acumulador +valor;
	acumulador += valor;
	0 = 0+100;
	300 = 100+200;
	320 = 300+20;
	*/


	//Inicializo variables
	acumuladorNegativos=0;
	acumuladorPositivos=0;
	contadorNegativos=0;
	contadorPositivos=0;
	contadorCeros=0;
	contadorPares=0;
	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);
		if(numeroIngresado % 2 == 0)//6-Cantidad de números pares.
		{
			contadorPares =contadorPares+1;
		}
		if(numeroIngresado < 0)//1-Suma de los negativos.
		{
				acumuladorNegativos = acumuladorNegativos+numeroIngresado
				//4-Cantidad de negativos.
				contadorNegativos =contadorNegativos+1;
		}
		else//2-Suma de los positivos.
		{
			if(numeroIngresado > 0)
			{
			acumuladorPositivos = acumuladorPositivos+numeroIngresado;
			//3-Cantidad de positivos.
			contadorPositivos = contadorPositivos+1;
			}
			else
			{
			//5-Cantidad de ceros.
			contadorCeros = contadorCeros+1;	
			}
		}	
		respuesta=prompt("desea continuar?","si");
	}//fin del while
	//8-Promedios de negativos.


	//7-Promedio de positivos.

	//9-Diferencia entre positivos y negativos, (positvos-negativos). 
	restaPositivosNegativos = acumuladorPositivos-acumuladorNegativos;
	//Muestra al usuario los resultados

	document.write("la suma de negativos es :"+acumuladorNegativos+" ;");
	document.write("la suma de positivos es :"+acumuladorPositivos+" ;");
	document.write("la cantidad de positivos es :"+contadorPositivos+" ;");
	document.write("la cantidad de negativos es :"+contadorNegativos+" ;");
	document.write("la cantidad de ceros es :"+contadorCeros+" ;");
	document.write("la cantidad de números pares es :"+contadorPares+" ;");
	if(acumuladorNegativos !=0)
	{
		promedioNegativos = acumuladorNegativos/contadorNegativos;
		document.write("el promedio de los números negativos es :"+promedioNegativos+" ;");
	}
	else
	{
		document.write("el promedio de los números negativos es : No hubo ingreso de números negativos;");
	}
	if(acumuladorPositivos !=0)
	{
		promedioPositivos = acumuladorPositivos/contadorPositivos;
		document.write("el promedio de los números positivos es :"+promedioPositivos+" ;");
	}
	else
	{
		document.write("el promedio de los números positivos es : No hubo ingreso de positivos;");
	}

	document.write("la diferencia entre números positivos y negativos es :"+restaPositivosNegativos+" .");		
	}//FIN DE LA FUNCIÓN