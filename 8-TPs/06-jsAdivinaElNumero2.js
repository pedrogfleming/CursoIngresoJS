/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto;
let numeroIngresado; 
var contadorIntentos;
//Iniocializo el contador
contadorIntentos = 0;
function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto =Math.floor(Math.random() * 101);
	alert(numeroSecreto);
	//

}

function verificar()
{
	//Usuario ingresa número por textbox
	numeroIngresado = document.getElementById("txtIdNumero").value;
	//Contabilizar cantidad de intentos
	contadorIntentos = contadorIntentos+1;
	//Indicar si el número ingresado es mayor al N° secreto
if(numeroIngresado == numeroSecreto)//Jugador acertó el N°
{
	switch (contadorIntentos)//Categorizar al usuario según la cantidad de intentos
	{
		case 1:
			alert("usted es un Psíquico");		
			break;
		case 2:
			alert("excelente percepción");
			break;
		case 3:
			alert("Esto es suerte");
			break;
		case 4:
			alert("Excelente técnica");
			break;
		case 5:
			alert("usted está en la media");
			break;
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:				
			alert("falta técnica");
			break;					
		default:
			alert("afortunado en el amor!!");
			break;
	}
}
else
{
	alert("El número ingresado no es el correcto, vuelva a ingresar otro número");
}
}