/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
let numeroIngresado;
numeroIngresado = prompt("ingrese un número entre 0 y 9.");
numeroIngresado = parseInt(numeroIngresado);
console.log(numeroIngresado);
while (numeroIngresado < 0 || numeroIngresado > 9) 
{
	alert("El numero ingresado no está entre 0 y 9");
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	//if(numeroIngresado > -1 && numeroIngresado < 10){}
	//else{}
}	
document.getElementById("txtIdNumero").value = numeroIngresado;
}//FIN DE LA FUNCIÓN