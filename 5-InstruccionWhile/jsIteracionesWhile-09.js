/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
9 bis( se pide el menor de los pares y el mayor de los negativos)
*/
function mostrar()
{	// declarar variables
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	let banderaPrimerNumero;
	let banderaPrimerNegativo;
	let banderaPrimerPar;
	let parMinimo;
	let parMaximo;
	let menorNegativo;
	let mayorNegativo;
	//iniciar variables
	banderaPrimerPar = 0;
	banderaPrimerNumero = 0;
	banderaPrimerNegativo = 0;
	respuesta='si';
	//NUNCA INICIALIZAR ASI UN MAX O MIN 
	//TMPO USAR MAX O MIN RELATIVOS
	/*numeroIngresado = prompt("Ingrese el primer número");
	numeroIngresado = parseInt(numeroIngresado);
	console.log(numeroIngresado);
	numeroMaximo = numeroIngresado;
	numeroMinimo = numeroIngresado;*/
	while(respuesta=="si")//Mientras el usuario quiera, se ingresan números...
	{
		numeroIngresado = prompt("Ingrese otro número");
	respuesta = prompt("¿Desea ingresar otro número?","si");
	}//FIN WHILE							
//Muestro los numeros
alert(parMinimo+" Es el numero par minimo");
alert(mayorNegativo+" Es el numero negativo maximo");
alert (numeroMaximo+" Es el numero real maximo");
alert(numeroMinimo+" Es el numero real minimo");
}//FIN DE LA FUNCIÓN