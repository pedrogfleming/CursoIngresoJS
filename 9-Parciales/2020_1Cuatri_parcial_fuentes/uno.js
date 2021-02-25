
/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante X
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total X
*/
function mostrar()
{
//Declaro las variables
let tipoProducto;
let precioProducto;
let cantidadProductos;
let cantidadUnidades;
let marcaProducto;
let fabricanteProducto;
let contadorAlcohol;
let contadorBarbijo;
let contadorJabon;
let acumuladorUnidadesJabon;
let acumuladorUnidadesBarbijos;
let acumuladorUnidadesAlcohol;
let alcoholMasBarato;
let minimoPrecioAlcohol;
let productoConMayorUnidades;
let promedioUnidadesCompra;
//Inicializo variables
contadorAlcohol = 0;
contadorBarbijo = 0;
contadorJabon = 0;
banderaUnidades = 0;
cantidadProductos = 0;
acumuladorUnidadesJabon = 0;
acumuladorUnidadesBarbijos = 0;
acumuladorUnidadesAlcohol = 0;
acumuladorCantidadUnidades = 0;
//Usuario ingresa 5 productos
while(cantidadProductos < 5)//Se valida la cantidad de unidades
{ 
	tipoProducto = prompt("Ingrese tipo de producto","barbijo,jabon o alcohol");
	while (isNaN(tipoProducto) == false || tipoProducto!="barbijo"&&tipoProducto!="alcohol"&&tipoProducto!="jabon")//Se valida si es un string, o se valida si ingreso otra palabra no permitida
		{
		tipoProducto = prompt("Error, reingrese tipo de producto","barbijo,jabon o alcohol");
		}
	precioProducto = prompt("Ingrese precio","Sólo entre 100 y 300");
	precioProducto = parseInt(precioProducto);
	while (isNaN(precioProducto) == true || precioProducto<100 || precioProducto>300)//Se valida si es un numero, o se valida el rango
		{
		precioProducto = prompt("Error, reingrese precio de producto","entre 100 y 300");
		precioProducto = parseInt(precioProducto);
		}	
	cantidadUnidades = prompt("Ingrese cantidad de unidades","1 o 1000 unidades");
	cantidadUnidades = parseInt(cantidadUnidades);
	while (isNaN(cantidadUnidades) == true || cantidadUnidades<1 || cantidadUnidades>1000)//Se valida si es un numero, o se valida el rango
		{
		cantidadUnidades = prompt("Error, reingrese cantidad de unidadades","1 o 1000 unidades");
		}
	marcaProducto = prompt("Ingrese marca de producto","Acceto,Bertoni o Cecis");
	while (isNaN(marcaProducto) == false || marcaProducto!="Acceto"&&marcaProducto!="Bertoni"&&marcaProducto!="Cecis")//Se valida si es un string, o se valida si ingreso otra palabra no permitida
		{
		marcaProducto = prompt("Error, reingrese marca del producto","Acceto,Bertoni o Cecis");
		}
	fabricanteProducto = prompt("Ingrese fabricante del producto","Aegis,Bartos,Cambria");	
	while (isNaN(fabricanteProducto) == false || fabricanteProducto!="Aegis"&&fabricanteProducto!="Bartos"&&fabricanteProducto!="Cambria")//Se valida si es un string, o se valida si ingreso otra palabra no permitida
		{
		fabricanteProducto = prompt("Error, reingrese fabricante del producto","Aegis,Bartos,Cambria");
		}		
	//Voy acumulando la cantidad de cada producto
	switch (tipoProducto)//Cada vez que ingrese un tipo de producto, se cuenta segun el tipo
	{
		case "jabon":
			contadorJabon++;
			acumuladorUnidadesJabon = acumuladorUnidadesJabon+cantidadUnidades;//c) Cuántas unidades de jabones hay en total
			break;
		case "alcohol":
			if(contadorAlcohol == 0 || precioProducto<minimoPrecioAlcohol)//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
			{
			minimoPrecioAlcohol = precioProducto;
			alcoholMasBarato = marcaProducto+" "+precioProducto+" pesos fabricado por "+fabricanteProducto;
			}
			contadorAlcohol++;
			acumuladorUnidadesAlcohol = acumuladorUnidadesAlcohol+cantidadUnidades;//Cantidad de jabone en total
			break;
		case "barbijo":
			contadorBarbijo++;
			acumuladorUnidadesBarbijos = acumuladorUnidadesBarbijos+cantidadUnidades;//Cantidad de barbijos en total
			break;
	}
	cantidadProductos = cantidadProductos+1;
	/*Testing
	console.log(contadorAlcohol+"pedido de alcohol");
	console.log(contadorBarbijo+"pedido de barbijo");
	console.log(contadorJabon+"pedido de jabon");
	console.log(tipoProducto);
	console.log(cantidadProductos);
	console.log(precioProducto);
	console.log(cantidadUnidades);
	console.log(marcaProducto);
	console.log(fabricanteProducto);
	cantidadProductos = prompt("Desea seguir ingresando producto","5");*/
}//FIN WHILE VALIDACIONES
if (acumuladorUnidadesJabon > acumuladorUnidadesAlcohol)//Comparo si hay mas unidades de jabon que alcohol ingresadas
{
	if(acumuladorUnidadesJabon > acumuladorUnidadesBarbijos)
	{
	productoConMayorUnidades = "jabon";
	}
	else
	{
	productoConMayorUnidades = "barbijos"//Si no, barbijos es el producto con mas unidades ingresadas
	}
}
else
{
	if(acumuladorUnidadesAlcohol > acumuladorUnidadesBarbijos)//Comparo si hay mas unidades de alcohol que barbijos ingresadas
	{
	productoConMayorUnidades = "alcohol";
	}
	else
	{
	productoConMayorUnidades = "barbijos"//Si no, barbijos es el producto con mas unidades ingresadas
	}
}
switch (productoConMayorUnidades)//b) Del tipo con mas unidades, el promedio por compra
{
	case "jabon":
		promedioUnidadesCompra = acumuladorUnidadesJabon/contadorJabon;
		break;
	case "alcohol":
		promedioUnidadesCompra = acumuladorUnidadesAlcohol/contadorAlcohol;	
		break;
	case "barbijos":
		promedioUnidadesCompra = acumuladorUnidadesBarbijos/contadorBarbijo;	
	default:
		break;
}
//Le muestro al usuario lo solicitado
alert(alcoholMasBarato+" Es el alcohol más barato");
alert(acumuladorUnidadesJabon+" unidades de jabon en total");
alert("El producto con mas unidades, su promedio por compra es de : "+promedioUnidadesCompra+" "+productoConMayorUnidades);
}//FIN FUNCION MOSTRAR