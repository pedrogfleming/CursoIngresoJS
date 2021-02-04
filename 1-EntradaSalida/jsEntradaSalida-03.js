/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre;
//Obtengo por ID de la caja de html el value para poder mostrarlo
	nombre = document.getElementById("txtIdNombre").value;

	alert(nombre);

	nombre = document.getElementById("txtIdNombre").value= ""
}


/*
Pedir al usuario los siguientes datos:
nombreDelAlumno: por  id.value
edadDelAlumno: por prompt
Mostrar por alert el mensaje "Ud  se llama ... y tiene ... años"

PUEDEN UTILIZAR EL HTML DEL EJERCICIO 3
*/

/*function mostrar()
{
	let nombreDelAlumno;
    let edadDelAlumno;
    
	nombreDelAlumno = document.getElementById("txtIdNombre").value;
    edadDelAlumno = prompt ("Ingrese su edad");



	
    	alert("Usted se llama " + nombreDelAlumno + " y tiene " + edadDelAlumno + " años");
}
*/

