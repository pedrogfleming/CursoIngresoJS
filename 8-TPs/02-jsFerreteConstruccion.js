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
perimetroTerreno = parseFloat(perimetroTerreno);

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
let diametroTerreno;
let metrosAlambre;
//Asigno valor ingresado por el usuario en las boxes a las variables

radioTerreno = document.getElementById("txtIdRadio").value;

//Parseo los datos

radioTerreno = parseFloat(radioTerreno);

//Calculo el diametro en base al radio ingresado

diametroTerreno = radioTerreno * 2;

//Calculo con el diametro del terreno la cantidad de alambre necesaria

metrosAlambre = diametroTerreno * 3;

alert("Se deberá comprar "+metrosAlambre+ " de metros de alambre");

}

function Materiales () 
{
/*
//Declaro las variables

let bolsaCemento;
let bolsaCal;
let areaTerreno;
let totalMaterial;
let materialPorMetroCuadrado;
let metrocuadrado;
let largoTerreno;
let anchoTerreno;


//Defino los valores de bolsa de cemento y bolsa de cal

bolsaCemento = 1;
bolsaCal = 1;

//Parseo las bolsas de cemento a enteros

bolsaCemento = parseInt(bolsaCemento);
bolsaCal = parseInt(bolsaCal);

//Establezco los valores de bolsas por metro cuadrado

materialPorMetroCuadrado = (2*bolsaCemento)+(3*bolsaCal);

//Usuario ingresa medidas del terreno

largoTerreno = document.getElementById("txtIdLargo");
anchoTerreno = document.getElementById("txtIdAncho");

//Parseo el largo y ancho del terreno

largoTerreno = parseFloat(largoTerreno);
anchoTerreno = parseFloat(anchoTerreno);

//Calculo el área del terreno

areaTerreno = largoTerreno*anchoTerreno;

//Calculo la cantidad de bolsas por el area del terreno que tengo

totalMaterial = areaTerreno/materialPorMetroCuadrado;

alert("Se necesitará comprar "+ totalMaterial);
*/

//OPCION 2


//Declaro las variables

let bolsaCementoPorMetroCuadrado;
let bolsaCementoDemandada;
let bolsaCalPorMetroCuadrado;
let bolsaCalDemandada;
let areaTerreno;
//let totalMaterial;
//let metrocuadrado;
let largoTerreno;
let anchoTerreno;


//Usuario ingresa medidas del terreno

largoTerreno = document.getElementById("txtIdLargo").value;
anchoTerreno = document.getElementById("txtIdAncho").value;

//Parseo el largo y ancho del terreno

largoTerreno = parseFloat(largoTerreno);
anchoTerreno = parseFloat(anchoTerreno);

//Calculo el área del terreno

areaTerreno = largoTerreno*anchoTerreno;

//Defino el valor de bolsa cemento y bolsa de cal y las parseo a enteros

bolsaCementoPorMetroCuadrado = 1;
bolsaCalPorMetroCuadrado = 1.5;

bolsaCementoPorMetroCuadrado = parseInt(bolsaCementoPorMetroCuadrado);
bolsaCalPorMetroCuadrado = parsefloat(bolsaCalPorMetroCuadrado);

//Calculo la cantidad de bolsas de cemento por metro cuadrado

bolsaCementoDemandada = areaTerreno/bolsaCementoPorMetroCuadrado;
bolsaCalDemandada = areaTerreno/bolsaCalPorMetroCuadrado;

//parseo el resultado

bolsaCementoDemandada = parseInt(bolsaCementoDemandada);
bolsaCalDemandada = parseInt(bolsaCalDemandada);


//Genero un alert mostrando los materiales necesarios según el area solicitada

alert("Se va a necesitar comprar "+bolsaCementoDemandada+" bolsas de cemento y "+bolsaCalDemandada+ " de bolsas de cal para cubrir los "+areaTerreno+" metros cuadrados de terreno");
}
