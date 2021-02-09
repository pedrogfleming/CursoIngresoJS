/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

// Declaro las variables a considerar

let largoTerreno;
let anchoTerreno;
let perimetroTerreno;
let metrosAlambre;

//Asigno el valor que le va a corresponder a cada producto según lo ingresado por el usuario en cada box

largoTerreno = document.getElementById("txtIdLargo").value;
anchoTerreno = document.getElementById("txtIdAncho").value;

//Parseo los valores ingresados por el usuario

largoTerreno = parseFloat(largoTerreno);
anchoTerreno = parseFloat(anchoTerreno);

//Sumo el ancho y el largo para sacar el perimetro y parseo

perimetroTerreno = 2 * (largoTerreno+anchoTerreno);


//Calculo los metros de alambre necesarios para ese perimetro determinado

metrosAlambre = perimetroTerreno * 3;

alert("Se deberán comprar " +metrosAlambre+" metros de alambre");
}

function Circulo () 

{
//perimetro circulo = longitud de su circunferencia
//P= pi * diametro	
//P = 2pi*radio

//Declaro las varaibles donde va a ingresar el usuario el radio del terreno

let radioTerreno;
let perimetroTerreno;
let metrosAlambre;

//Asigno valor ingresado por el usuario en las boxes a las variables

radioTerreno = document.getElementById("txtIdRadio").value;

//Parseo los datos

radioTerreno = parseFloat(radioTerreno);

//Calculo el diametro en base al radio ingresado

perimetroTerreno = radioTerreno * 2 * Math.PI;

//Calculo con el diametro del terreno la cantidad de alambre necesaria

metrosAlambre = perimetroTerreno * 3;

alert("Se deberá comprar "+metrosAlambre+ " de metros de alambre");

}

function Materiales () 
{

//cemento=area*2
//Cal=area*3

//Declaro las variables

let bolsaCementoDemandada;
let bolsaCalDemandada;
let areaTerreno;
let largoTerreno;
let anchoTerreno;


//Usuario ingresa medidas del terreno

largoTerreno = document.getElementById("txtIdLargo").value;
anchoTerreno = document.getElementById("txtIdAncho").value;

//Parseo el largo y ancho del terreno

largoTerreno = parseInt(largoTerreno);
anchoTerreno = parseInt(anchoTerreno);

//Calculo el área del terreno

areaTerreno = largoTerreno*anchoTerreno;

//Calculo la cantidad de bolsas de cemento por metro cuadrado y lo

bolsaCementoDemandada = areaTerreno*2;
bolsaCalDemandada = areaTerreno*3;

bolsaCementoDemandada = parseInt(bolsaCementoDemandada);
bolsaCalDemandada = parseInt(bolsaCalDemandada);

//parseo el resultado

//bolsaCementoDemandada = parseInt(bolsaCementoDemandada);
//bolsaCalDemandada = parseInt(bolsaCalDemandada);


//Genero un alert mostrando los materiales necesarios según el area solicitada

alert("Se va a necesitar comprar "+bolsaCementoDemandada+" bolsas de cemento y "+bolsaCalDemandada+ " de bolsas de cal para cubrir los "+areaTerreno+" metros cuadrados de terreno");
}
