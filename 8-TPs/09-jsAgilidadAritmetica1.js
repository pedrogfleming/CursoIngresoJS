/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
function comenzar()
{
    //Declaro las variables
    let numeroUno;
    let numeroDos;
    let operacionRandom;
    let suma;
    let resta;
    let multiplicación;
    let division;
    let modulo;
    let numeroMin;
    let numeroMax;
    let operacionMin;
    let operacionMax;
    //Inicializo los operadores y el min y el max del random
    operacionMin = 1;
    operacionMax = 5;
    numeroMin = 1;
    numeroMax = 10;
    suma = 1;
    resta = 2;
    multiplicación = 3;
    division = 4;
    modulo = 5;
    //Se crean los numeros randoms
    numeroUno = Math.floor(Math.random()*(numeroMax - numeroMin + 1) + numeroMin)	
	numeroDos = Math.floor(Math.random()*(numeroMax - numeroMin + 1) + numeroMin)	
    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);
    //Se elije la operacion al azar
    operacionRandom = Math.floor(Math.random()*(operacionMax - operacionMin + 1) + operacionMin);
    //Transformo el numero asignado a cada operacion en string
    switch (operacionRandom) 
    {
        case 1:
            operacionRandom = "Suma";
            break;
        case 2:
            operacionRandom = "Resta";
            break;
        case 3:
            operacionRandom = "Multiplicación";
            break;
        case 4:
            operacionRandom = "División";
            break;
        case 5:
            operacionRandom = "Módulo";
            break;
        default:
            alert("la operacion random se fue al carajo");    
            break;
    }
    //Se muestran los numeros randoms al usuario y la operacion random
    document.getElementById("txtIdPrimerNumero").value = numeroUno;
    document.getElementById("txtIdSegundoNumero").value = numeroDos;
    document.getElementById("txtIdOperador").value = operacionRandom;
}//FIN DE LA FUNCIÓN COMENZAR
function Responder()
{
    //Declaro las variables
        let numeroUno;
        let numeroDos;
        let operacionRandom;
        let resultadoSuma;
        let resultadoResta;
        let resultadoMultiplicacion;
        let resultadoDivision;
        let resultadoModulo;
        let validacion;
    //Tomo los dos números randoms por id        
    numeroUno = document.getElementById("txtIdPrimerNumero").value;
    numeroDos = document.getElementById("txtIdSegundoNumero").value;
    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);
    //Tomo la operación de la función anterior por id
    operacionRandom = document.getElementById("txtIdOperador").value;
    //En función de la operación random, realizo la aritmetica correspondiente para guardar el resultado
    switch (operacionRandom) 
    {
        case "Suma":
            resultadoSuma = numeroUno+numeroDos;
            console.log(resultadoSuma);
            break;
        case "Resta":
            resultadoResta = numeroUno-numeroDos;
            console.log(resultadoResta);
            break;
        case "Multiplicación":
            resultadoMultiplicacion = numeroUno*numeroDos;
            console.log(resultadoMultiplicacion);
            break;
        case "División":
            resultadoDivision = numeroUno/numeroDos;
            console.log(resultadoDivision);
            break;
        default:
            resultadoModulo = numeroUno%numeroDos;
            console.log(resultadoModulo);
            break;
    }   
    //Usuario ingresa su respuesta a la operaciòn
    respuesta = document.getElementById("txtIdRespuesta").value;
    respuesta = parseFloat(respuesta);
    //Verifico que el usuario haya dado la respuesta correcta
    switch (operacionRandom) 
    {
        case "Suma":
            if(respuesta == resultadoSuma)
            {
                validacion = 1;
            }
            else
            {
                validacion = 0;
            }
            break;
        case "Resta":
            if(respuesta == resultadoResta)
            {
                validacion = 1;
            }
            else
            {
                validacion = 0;
            }
            break;
        case "Multiplicación":
            if(respuesta == resultadoMultiplicacion)
            {
                validacion = 1;
            }
            else
            {
                validacion = 0;
            }
            break;
        case "División":
            if(respuesta == resultadoDivision)
            {
                validacion = 1;
            }
            else
            {
                validacion = 0;
            }
            break;
        case "Módulo":     
        default:
            if(respuesta == resultadoModulo)
            {
                validacion = 1;
            }
            else
            {
                validacion = 0;
            }
        break;     

    }
    if(validacion == 1)//Valido la respuesta del usuario y lo notifico
    {
        alert("Respuesta correcta");
    }
    else
    {
        alert("Respues incorrecta, inténtelo nuevamente");
    }
}//FIN DE LA FUNCIÓN RESPONDER
