function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);
	//ACLARACIÓN: tomamos a Julio y Agosto como los meses de Invierno.

switch (mesDelAño) 
{
	case "Enero":
	case "Febrero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
		alert("Falta para el invierno.");
		break;			
	case "Julio":
	case "Agosto":	
		alert("Abrigate que hace frio.");
		break;
	default:
		alert("Ya pasamos el frio, ahora calor!!!.");
		break;
}
}//FIN DE LA FUNCIÓN