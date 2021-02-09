/*Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt
 y que muestre el perímetro por alert.*/

function mostrar()
{

//Primero creo las variables

let anchoRectangulo;
let largoRectangulo;
let perimetroRectangulo;

//Usuario ingresa el ancho y largo del rectangulo

anchoRectangulo = prompt("Ingrese el ancho del rectángulo");
largoRectangulo = prompt("Ingrese el alto del rectángulo");

//Parseo las variables 

anchoRectangulo = parseFloat(anchoRectangulo);
largoRectangulo = parseFloat(largoRectangulo);

//Calculo el perimetro del rectángulo

perimetroRectangulo = 2*(anchoRectangulo+largoRectangulo);

//Muestro al usuario el perimetro del rectángulo

alert("El perimetro del rectángulo es "+perimetroRectangulo);
}
