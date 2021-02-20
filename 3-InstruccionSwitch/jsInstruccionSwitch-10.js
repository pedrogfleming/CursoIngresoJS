function mostrar()
{
/*una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"
en Verano: Se viaja a Mar del plata y Cataratas solamente
en Otoño: Se viaja a todos los destinos.
primavera: solo no se viaja a Bariloche	*/

//Declaro las variables

let estacionIngresada;
let destino;
let disponibilidad;
//Usuario ingresa estaciòn y destino deseado
estacionIngresada = document.getElementById("txtIdEstacion").value;
destino = document.getElementById("txtIdDestino").value;
//Invoco el switch

switch (estacionIngresada) 
{
	case "Invierno"://Solo Bariloche informa "se viaja" los demas destinos "No se viaja"
		switch (destino) 
		{
			case "Bariloche":
				disponibilidad = 1;				
				break;		
			default:
				disponibilidad = 0;
				break;
		}
	break;
	case "Verano"://Se viaja a Mar del plata y Cataratas solamente
		switch (destino) 
		{
			case "Mar del plata":
			case "Cataratas":	
				disponibilidad = 1;
				break;
			default:
				disponibilidad = 0;
				break;
		}
	break;
	case "Primavera"://solo no se viaja a Bariloche
		switch (destino)
		{
			case "Bariloche":
				disponibilidad = 0;
				break;
			default:
				disponibilidad = 1;
				break;
		}
	break;				
	default://Otoño: Se viaja a todos los destinos.
		disponibilidad = 1;
		break;
}
switch (disponibilidad)//En funciòn de si la disponibilidad tiene valor 1 o 0, emito el alert con la disponibilidad del destino
 {
	case 1:
		alert("En "+estacionIngresada+" SI se puede viajar a "+destino);
		break;

	default:
		alert("En "+estacionIngresada+" NO se puede viajar a "+destino);
		break;
}

}//FIN DE LA FUNCIÓN