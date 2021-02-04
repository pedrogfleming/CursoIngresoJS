/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/


//DECLARO UNA VARIABLE
let nombre;
//INVOCO EL PROMP PARA RETORNAR UN DATO INGRESADO POR EL USUARIO ASIGNANDOSELO A LA VARIABLE NOMBRE
nombre = prompt("Escriba su nombre de usuario");

function mostrar()
{

	//MUESTRO NOMBRE COMO VARIABLE
	alert("Su nombre es: "+nombre);
}

//SOLUCION POR OCTAVIO VILLEGAS
/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
/*function mostrar()
{
	var nombre;

	//mal ...var=apellido;
	//mal ...prompt("Ingrese su nombre", "natalia natalia");
	nombre = prompt("Ingrese su nombre", "natalia natalia");
	nombre = "octavio";
	//alert("nombre");
	//alert(nombre);
	alert("su nombre es: "+nombre);

}
*/