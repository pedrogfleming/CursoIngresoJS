function mostrar()
{
	var destinoIngresado =txtIdDestino.value;

	switch (destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("Hace frío en este destino");			
			break;
		default:
			alert("Hace calor en este destino");
			break;
	}
	alert(destinoIngresado);

}//FIN DE LA FUNCIÓN