/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;
	let numeroIngresado;
//Defino el contador, acumulador y respuesta	
	contador=0;
	acumulador=0;
	respuesta="si";
while (respuesta == "si") //Mientras el usuario quiera ingresar números
{
	numeroIngresado = prompt("Ingrese un número");
	numeroIngresado = parseFloat(numeroIngresado);
	contador = contador+1; 
	acumulador = acumulador+numeroIngresado;//Voy sumando los numeros ingresados
	respuesta = prompt("Si desea ingresar un número, escriba: si. De lo contrario, escriba: no","si");
}
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;
}//FIN DE LA FUNCIÓN