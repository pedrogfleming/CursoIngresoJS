/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let i;
	let claveIngresada;
	i = 0;
	claveIngresada = prompt("ingrese el número clave.");

	while((claveIngresada != "utn750")&&(i < 3))
	{
		i = i+1;
		
		if(i >2)
		{
			alert("Ha intentado 3 veces, su usuario ha sido bloqueado");
		}
		else
		{
			claveIngresada = prompt("Error, ingrese de nuevo la contraseña.");
		}	
	}

	
}//FIN DE LA FUNCIÓN
