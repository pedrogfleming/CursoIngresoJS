function mostrar()
{
	//Variable
	let edad;
	
	//Usuario ingresa edad

	edad = document.getElementById("txtIdEdad").value;

	//Parseo edad
	
	edad = parseInt(edad);

	//Invoco el if

	//if (edad >= 18) Esto hace que la maquina en una linea haga dos operaciones,EVITARLO
	if(edad > 17)
	{

		alert("Usted es mayor de edad, tiene "+edad+" años");

	}

}//FIN DE LA FUNCIÓN