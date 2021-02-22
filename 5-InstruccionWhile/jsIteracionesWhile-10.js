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
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	let sumaPositivos;
	let contadorPositivos;
	let promedioPositivos;
	let sumaNegativos;
	let contadorNegativos;
	let promedioNegativos;
	let restaPositivosNegativos;
	let contadorCeros;
	let contadorPares;


	//Inicializo variables
	sumaNegativos=0;
	sumaPositivos=0;
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
		switch (numeroIngresado) 
		{
			case 0:
				//5-Cantidad de ceros.
				contadorCeros = contadorCeros+1;				
				break;		
			default:
		
				if(numeroIngresado < 0)//1-Suma de los negativos.
				{
				sumaNegativos = sumaNegativos+numeroIngresado
				//4-Cantidad de negativos.
				contadorNegativos =contadorNegativos+1;
				}
				else//2-Suma de los positivos.
				{
				sumaPositivos = sumaPositivos+numeroIngresado;
				//3-Cantidad de positivos.
				contadorPositivos = contadorPositivos+1;
				}
				break;
		}//Fin del switch		
		respuesta=prompt("desea continuar?","si");
	}//fin del while
	//8-Promedios de negativos.
	promedioPositivos = sumaPositivos/contadorPositivos;
	//7-Promedio de positivos.
	promedioNegativos = sumaNegativos/contadorNegativos;
	//9-Diferencia entre positivos y negativos, (positvos-negativos). 
	restaPositivosNegativos = sumaPositivos-sumaNegativos;
	//Muestra al usuario los resultados

	document.write("la suma de negativos es :"+sumaNegativos+" ;");
	document.write("la suma de positivos es :"+sumaPositivos+" ;");
	document.write("la cantidad de positivos es :"+contadorPositivos+" ;");
	document.write("la cantidad de negativos es :"+contadorNegativos+" ;");
	document.write("la cantidad de ceros es :"+contadorCeros+" ;");
	document.write("la cantidad de números pares es :"+contadorPares+" ;");
	document.write("el promedio de los números positivos es :"+promedioPositivos+" ;");
	document.write("el promedio de los números negativos es :"+promedioNegativos+" ;");
	document.write("la diferencia entre números positivos y negativos es :"+restaPositivosNegativos+" .");		
	}//FIN DE LA FUNCIÓN