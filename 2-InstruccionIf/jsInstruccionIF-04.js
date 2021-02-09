function mostrar()
{

//Creo las variables

let edad;

//Usuario ingresa edad por ID

edad = document.getElementById("txtIdEdad").value;

//Parseo la edad

edad = parseInt(edad);

//Invoco el if

if (edad > 12 && edad < 18)
{

	alert("Usted es un adolescente");

}


}//FIN DE LA FUNCIÓN