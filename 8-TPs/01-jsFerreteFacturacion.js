/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/



function Sumar () 
{

//Primero declaro las 3 variables de cada producto

let productoUno;
let productoDos;
let productoTres;

//Asigno el valor que le va a corresponder a cada producto según lo ingresado por el usuario en cada box

productoUno = document.getElementById("txtIdPrecioUno").value;
productoDos = document.getElementById("txtIdPrecioDos").value;
productoTres = document.getElementById("txtIdPrecioTres").value;

//Parseo los valors ingresados por el usuario

productoUno =parseFloat (productoUno);
productoDos =parseFloat (productoDos);
productoTres =parseFloat (productoTres);
    
//Creo el espacio de memoria donde se va a guardar el resultado de la suma de los 3 productos
let sumaTotal;

sumaTotal = productoUno + productoDos + productoTres;
sumaTotal = parseFloat(sumaTotal);
alert("la suma de los 3 productos es $"+sumaTotal);
 

}
function Promedio () 
{

//Primero declaro las 3 variables de cada producto

let productoUno;
let productoDos;
let productoTres;

//Asigno el valor que le va a corresponder a cada producto según lo ingresado por el usuario en cada box

productoUno = document.getElementById("txtIdPrecioUno").value;
productoDos = document.getElementById("txtIdPrecioDos").value;
productoTres = document.getElementById("txtIdPrecioTres").value;

//Parseo los valors ingresados por el usuario

productoUno =parseFloat (productoUno);
productoDos =parseFloat (productoDos);
productoTres =parseFloat (productoTres);
        
//Creo el espacio de memoria donde se va a guardar el resultado del promedio de los 3 productos
let promedioTotal;
promedioTotal = (productoUno + productoDos + productoTres)/3;
promedioTotal = parseFloat(promedioTotal);
alert("El promedio de los 3 productos es $"+promedioTotal);


}
function PrecioFinal () 
{

//Primero declaro las 3 variables de cada producto

let productoUno;
let productoDos;
let productoTres;
let sumaTotal;
//Asigno el valor que le va a corresponder a cada producto según lo ingresado por el usuario en cada box

productoUno = document.getElementById("txtIdPrecioUno").value;
productoDos = document.getElementById("txtIdPrecioDos").value;
productoTres = document.getElementById("txtIdPrecioTres").value;

//Parseo los valores ingresados por el usuario

productoUno =parseFloat (productoUno);
productoDos =parseFloat (productoDos);
productoTres =parseFloat (productoTres);
    
//Realizo la suma de los tres productos y parseo


sumaTotal = productoUno + productoDos + productoTres;
sumaTotal = parseFloat(sumaTotal);

//Saco el IVA de la suma de los 3 productos y se lo sumo directamente

sumaTotal = sumaTotal * 1.21;
alert("El precio final a pagar de los 3 productos es $"+sumaTotal);
 
    

}