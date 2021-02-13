function mostrar()
//SABADO 13 febrero
{
	/*
	3-con if una agencia de viajes debe sacar las tarifas de los viajes,
	se cobra $15.000 por cada estadia como base,
	se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

	INVIERNO:

	Bariloche tiene un aumento del 20% $18000 final
	cataratas y Cordoba tienen un descuento del 10% $13500 final
	Mar del plata tiene un descuento del 20%  $12000 final

	VERANO:

	bariloche tiene un descuento del 20% $ 12000 final
	Cataratas y Cordoba tiene un aumento del 10% $16500 final
	Mar del plata tiene un aumento del 20% $18000 final

	OTAÑO Y PRIMAVERA

	bariloche tiene un aumento del 10% $16500 final
	cataratas tiene un aumento del 10% $16500 final
	Mar del plata tiene un aumento del 10% $16500 final
	Cordoba tiene el precio sin descuento $15000 final
	*/

	//DECLARO LAS VARIABLES
	let estacion;
	let localidad;
	let precioBase;
	let precioFinal;
	let porcentaje;

	//Defino precio base
	precioBase = 15000;	
	//USUARIO INGRESA DATOS
	estacion = document.getElementById("txtIdEdad").value;
	localidad = prompt("Ingrese el destino, las opciones son Bariloche, Cataratas, Mar del Plata y Cordoba");
	//Invoco los if
	if(estacion == "Invierno")
	{
		if(localidad == "Bariloche")//Bariloche tiene un aumento del 20%
		{
			porcentaje = 1.20;
		}
		else
		{
			if(localidad == "Mar del Plata")//Mar del plata tiene un descuento del 20% 
			{
				porcentaje = 0.80;
			}
			else //cataratas y Cordoba tienen un descuento del 10%
			{
				porcentaje = 0.90
			}	
		}
	}
	else
	{
		if(estacion == "Verano")
		{
			if(localidad == "Bariloche")//bariloche tiene un descuento del 20% 
			{
				porcentaje = 0.80;
			}
			else
			{
				if(localidad == "Mar del Plata")//Mar del plata tiene un aumento del 20%
				{
					porcentaje = 1.20;
				}
				else//Cataratas y Cordoba tiene un aumento del 10%
				{
					porcentaje = 1.10;
				}
			}
		}
		else//OTOÑO Y PRIMAVERA
		{
			if(localidad == "Cordoba")//Cordoba tiene el precio sin descuento
			{
				porcentaje = 1;
			}
			else //	bariloche tiene un aumento del 10%, cataratas tiene un aumento del 10%,Mar del plata tiene un aumento del 10%
			{
				porcentaje = 1.10
			}
		}

	}
	//Aplico el porcentaje correspondiente
	precioFinal = precioBase*porcentaje;
	alert("Para viajar a "+localidad+" deberá abonar "+(precioFinal)+" pesos argentinos");
}//FIN FUNCION


























/*EJERCICIO 2- con if
ingresar el nombre y los datos requeridos para calcular el IMC , e informar a la persona si es:
Bajo peso =18,5
Peso normal = 18,5/24,9
Preobesidad = 25/29,9
Obesidad I = 30/34,9	
Obesidad II = 35/39,9	
Obesidad III = 40/49,9	
*/
//El IMC se utiliza para clasificar el estado ponderal de la persona, y se calcula a partir de la fórmula: peso(kg)/talla(m2).{

//Declaro variables	
/*let nombreUsuario;
let pesoUsuario;
let alturaUsuario;
let imcUsuario;
//Usuario ingresa datos
pesoUsuario = document.getElementById("txtIdEdad").value;
nombreUsuario = prompt("Ingrese su nombre");
alturaUsuario = prompt("Ingrese su altura en centímetros, sólo números")
//Parseo los datos ingresados
pesoUsuario = parseFloat(pesoUsuario);
alturaUsuario = parseFloat(pesoUsuario);
//Calculo el IMC del usuario
imcUsuario = pesoUsuario/alturaUsuario;

//Invoco el if
if(imcUsuario < 18.6)
{
	alert("Bajo peso");//Bajo peso =18,5
}
else
{
	if(imcUsuario < 25)//Peso normal = 18,5/24,9
	{
		alert("Peso normal");
	}
	else
	{
		if(imcUsuario < 30)//Preobesidad = 25/29,9
		{
			alert("Preobesidad");
		}
		else
		{
			if(imcUsuario < 35)//Obesidad I = 30/34,9
			{
				alert("Obesidad I");
			}
			else
			{
				if(imcUsuario < 40)//Obesidad II = 35/39,9
				{
					alert("Obesidad II");
				}
				else
				{
					if(imcUsuario < 50)//Obesidad III = 40/49,9
					{
						alert("Obesidad III");
					}
					else
					{
						alert("Consulte a su nutricionista a la brevedad");
					}
				}
			}	

		}

	}
}	
}//FIN FUNCION*/






/*EJERCICIO 1-con if
pedir a una persoan que fue de vaciones , la distancia que viajo y el tiempo que tardo, para calcular la velocidad
e informar:
60 km/hr = muy lento
hata 80km/h= lento
hasta 100= buen ritmo
hasta 120= ahi de la ley
mas = eso no se hace
{	


//Declaro las variables
let distanciaViaje;
let tiempoViaje;
let velocidadPromedio;
//Usuario ingresa datos y los parseo

tiempoViaje = prompt("Ingrese cuanto tiempo duró el viaje");
distanciaViaje = document.getElementById("txtIdEdad").value;
distanciaViaje = parseInt(distanciaViaje);
tiempoViaje = parseFloat(tiempoViaje);
//Calculo según el tiempo y la distancia, la velocidad promedio a la que viajó}
//Distancia = km/h * tiempo>>> Distancia/tiempo = km/h
velocidadPromedio = distanciaViaje/tiempoViaje;

if (velocidadPromedio < 60)
	{
	alert("Muy lento");
	}
else
	{
		if (velocidadPromedio <81) 
		{
		alert("Lento");	
		}
		else
		{
			if (velocidadPromedio < 101)
			{
				alert("Buen ritmo");
			}
			else
			{
				if(velocidadPromedio < 121)
				{
				alert("ahí de la ley");
				}
				else
				{
					alert("Eso no se hace");
				}

			}
			
		}
	}	
}//FIN FUNCION*/

// EJERCICIO 3 IF

/*	//tomo la edad  
	let edad;
	//Usuario ingresa edad
	edad = document.getElementById("txtIdEdad").value;

	//Parseo la edad ingresada

	edad = parseInt(edad);

	//Invoco el if

	if(edad > 17)
	{
		
		alert("Usted es mayor de edad");

	}
	else
	{

		alert("Usted es menor de edad");

	}
}//FIN DE LA FUNCIÓN*/