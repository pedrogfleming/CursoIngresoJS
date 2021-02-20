/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

while((sexoIngresado != "f")&&(sexoIngresado != "m"))//Mientras la variable sea distinto a f y me, itero
	{
		sexoIngresado = prompt("Caracter ingresado no válido, ingrese f ó m .");//Usuario vuelve a ingresar sexo
	}
document.getElementById("txtIdSexo").value = sexoIngresado;
}//FIN DE LA FUNCIÓN