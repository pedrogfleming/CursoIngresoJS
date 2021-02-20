function mostrar()
/*

Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes ,
se cobra $15.000 por cada estadia como base,
 se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

 en Invierno:
  bariloche tiene un aumento del 20% $18000
   cataratas y Cordoba tiene un descuento del 10% $13500
    Mar del plata tiene un descuento del 20%  $12000

en Verano:
 bariloche tiene un descuento del 20% $12000
  cataratas y Cordoba tiene un aumento del 10% $16500
   Mar del plata tiene un aumento del 20% $18000

en Otoño y Primavera:
 bariloche tiene un aumento del 10% $16500
  cataratas tiene un aumento del 10% $16500
   Mar del plata tiene un aumento del 10% $16500
    y Cordoba tiene el precio sin descuento $15000

*/
{
	//Declaro las variables

	let estacion;
	let localidad;
	let porcentaje;
	let tarifaBase;
	let tarifaFinal;

//Usuario ingresa datos

estacion = document.getElementById("txtIdEstacion").value;
localidad = document.getElementById("txtIdDestino").value;

//Invoco el switch

switch (estacion) 
{
	case "Invierno":
		switch (localidad) 
		{
			case "Bariloche"://  bariloche tiene un aumento del 20%
				porcentaje = 1.20;				
				break;
			case "Mar del plata"://Mar del plata tiene un descuento del 20%
				porcentaje = 0.80;
				break;		
			default://   cataratas y Cordoba tiene un descuento del 10%
				porcentaje = 0.90;
				break;
		}
	break;	
	case "Verano":
		switch (localidad) 
		{
			case "Bariloche"://bariloche tiene un descuento del 20%
				porcentaje = 0.80;				
				break;
			case "Mar del plata"://Mar del plata tiene un aumento del 20%
				porcentaje = 1.20;
				break;		
			default://cataratas y Cordoba tiene un aumento del 10%
				porcentaje = 1.10;
				break;
		}
	break;		
	default:
		switch (localidad) 
		{
			case "Cordoba"://Cordoba tiene el precio sin descuento
				porcentaje = 1;				
				break;		
			default:// bariloche tiene un aumento del 10%,   cataratas tiene un aumento del 10%,    Mar del plata tiene un aumento del 10%
				porcentaje = 1.10;
				break;
		}
	break;	
	
	

}
//Defino el precio de la tarifa base
tarifaBase = 15000;
tarifaFinal = tarifaBase * porcentaje;
alert("Para viajar a "+localidad+" en "+estacion+", deberá abonar una tarifa de "+tarifaFinal+" pesos argentinos");


}//FIN DE LA FUNCIÓN