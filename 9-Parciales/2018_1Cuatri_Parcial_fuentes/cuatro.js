function mostrar()
{

/*

Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10".

*/

//Declaro las variables
let primerNumero;
let segundoNumero;
let resultadoResta;
let resultadoSuma;
let primerNumeroString;
let segundoNumeroString;

//Pido al usuario que ingrese los dos números
primerNumero = prompt("Ingrese el primer número");
segundoNumero = prompt ("Ingrese el segundo número");
primerNumeroString = primerNumero;
segundoNumeroString = segundoNumero;
//Parseo los números ingresados
primerNumero = parseInt(primerNumero);
segundoNumero = parseInt(segundoNumero);
//Defino las operaciones
resultadoResta = primerNumero-segundoNumero;
resultadoSuma = primerNumero+segundoNumero;
//Invoco el if
if(primerNumero == segundoNumero)//Si son iguales los muestro concatenados.
{
alert(primerNumeroString+segundoNumeroString);
}
else
{
    if(primerNumero > segundoNumero)//Si el primero es mayor, los resto,
    {
    alert(resultadoResta);
    }
    else//de lo contrario los sumo.
    {
        if(resultadoSuma > 10)//Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje "la suma es xxx y supero el 10".
        {
        alert("la suma es "+resultadoSuma+" y superó el 10");
        }
        else
        {
        alert(resultadoSuma);
        }
    }
}

}
