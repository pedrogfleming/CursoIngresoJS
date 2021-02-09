function mostrar()
{

//Declaro las variables

let edad;
let estadoCivil;

//Usuario ingresa los valores

edad = document.getElementById("txtIdEdad").value;
estadoCivil = document.getElementById("estadoCivil").value;

//Parseo la edad ingresada

edad = parseInt(edad);

//Invoco el if

if (estadoCivil == "Soltero")

	{
		if(edad > 17)

			alert("Es soltero y no es menor.");

			
	}

}//FIN DE LA FUNCIÓN