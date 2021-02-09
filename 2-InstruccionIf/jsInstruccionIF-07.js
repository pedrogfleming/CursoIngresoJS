function mostrar()
{
	
	//Invoco las variables

	let edad;
	let estadoCivil;

	//El usuario ingresa los valores

	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;

	//Parseo la edad

	edad = parseInt(edad);

	//Invoco el if

	if (edad < 18 && estadoCivil != "Soltero" )
	{

		alert("Es muy pequeño para NO ser soltero");

	}



}//FIN DE LA FUNCIÓN