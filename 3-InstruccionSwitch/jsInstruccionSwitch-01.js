function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);

switch (mesDelAño) 
{
	case "Enero": //VALOR LITERAL CON EL QUE VAMOS A ENTRAR
		alert("que comiences bien el año!!!.");
		break;
	case "Marzo":
		alert("a clases!!!.");
		break;
	case "Julio":
		alert("se vienen las vacaciones!!!.");
		break;
	case "Diciembre":
		alert("Felices fiesta!!!.");
		break;		
	default:
		alert("No hay nada programado en este mes")
		break;
}

}//FIN DE LA FUNCIÓN