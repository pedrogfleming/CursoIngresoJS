/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	respuesta='si';
	//Usuario ingresa primer número, y este es declarado como máximo y minimo al ser el único por el momento
	numeroIngresado = prompt("Ingrese el primer número");
	numeroIngresado = parseInt(numeroIngresado);
	console.log(numeroIngresado);
	numeroMaximo = numeroIngresado;
	numeroMinimo = numeroIngresado;
	while(respuesta=="si")//Mientras el usuario quiera, se ingresan números...
	{
		if (numeroIngresado>numeroMaximo)//Comparo con el N° ingresado con el N° Máx
		{
			numeroMaximo = numeroIngresado;//Si el N° es mayor al Máx, piso el numero Max
		}
		else//Si el N° es menor al Max, pregunto si es menor al minimo
		{
			if (numeroIngresado<numeroMinimo)
			{
				numeroMinimo = numeroIngresado;
			}
			//Si no, no se hace nada
		}
		numeroIngresado = prompt("Ingrese otro número");
		numeroIngresado = parseInt(numeroIngresado);
		console.log(numeroIngresado); 
		respuesta = prompt("desea continuar?","si");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN