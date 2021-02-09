function mostrar()
{
	//tomo la edad  
	let edad;
	//Usuario ingresa edad
	edad = document.getElementById("txtIdEdad").value;

	//Parseo la edad ingresada

	edad = parseInt(edad);

	//Invoco el if

	if(edad > 17)
	{
		
		alert("Usted es mayor de edad");

	}
	else
	{

		alert("Usted es menor de edad");

	}
}//FIN DE LA FUNCIÓN