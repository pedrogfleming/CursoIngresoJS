/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.El 0 va a ser considerado nulo, ni positov ni negativo*/
function mostrar()
{
	var respuesta;
	var numeroIngresado;
	var sumaPositivos;
	var multiplicacionNegativos;
	var contadorPositivos;
	var contadorNegativos;
	//Inicializo el acumulador i, los positivos y los negativos
	contadorPositivos = 0;
	contadorNegativos = 0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

while (respuesta == "si")//Mientras el usuario responda si, ingresar numeros
{
	numeroIngresado = prompt("Ingrese un número");
	numeroIngresado = parseFloat(numeroIngresado);
	switch (numeroIngresado)
	{
		case 0://En caso de que sea 0, no se hace nada porque no es positivo ni negativo					
			break;
		default:
			if (numeroIngresado > 0) //Si es mayor a 0, se suman
			{
				sumaPositivos = sumaPositivos+numeroIngresado;
				contadorPositivos = contadorPositivos+1;
			}
			else//Si es menor a 0,se multiplican
			{
				multiplicacionNegativos = multiplicacionNegativos*numeroIngresado;
				contadorNegativos = contadorNegativos+1;
			}
			break;
	}
	respuesta = prompt("Si desea ingresar otro número, ingrese: si. De lo contrario, ingrese: no","si");
}
if (contadorPositivos>0)//Si ingresó N° positivos
{
	txtIdSuma.value=sumaPositivos;
	if (contadorNegativos>0) //y ademas ingreso N° negativos
	{
		txtIdProducto.value=multiplicacionNegativos;
	}
}
else//Si sólo ingresó N° negativos
{
	if (contadorNegativos>0) 
	{
		txtIdProducto.value=multiplicacionNegativos;
	}
	else
	{
		alert("El 0 no es positivo ni negativo, por lo tanto no hay operación posible");
	}	
}

}//FIN DE LA FUNCIÓN