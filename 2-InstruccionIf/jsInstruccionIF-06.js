function mostrar()
{
	//Declaro las variables

	let edad;

	//Usuario ingresa edad por ID

	edad = document.getElementById("txtIdEdad").value;

	//Parseo la edad ingresada

	edad = parseInt(edad);

	//Invoco el if

	if(edad > 17)
	{

		alert("La persona es mayor de edad");

	}
	else
	{
		if (edad > 12)
			{
				alert("La persona es adolescente")
			}
		
		else

		{
			alert("La persona es un niño")
		}

	}	


}//FIN DE LA FUNCIÓN