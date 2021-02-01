/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/

// Establezco las variables nombre y edad


function mostrar()
{

// Primero creo los valores para reservar el espacio en memoria	
let nombre;
let edad;

//Segundo tengo que obtener el valor de cada caja de texto 

nombre = document.getElementById ("txtIdNombre").value;
edad = document.getElementById ("txtIdEdad").value;


// Armmo una cadena concatenando las dos variables más el texto literal que lo acompaña
	alert("Usted se llama "+nombre+" y tiene "+ edad+ " años");
}


