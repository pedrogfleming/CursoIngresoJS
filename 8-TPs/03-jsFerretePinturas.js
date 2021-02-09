/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    //Formula de F a Cº es (x-32º)*5/9
    
    //Declaro las variables

    let fahrenheit;
    let celcius;
    
    //Tomo el valor de temperatura en Fahrenheit ingresado por el usuario y lo parseo a float
    fahrenheit = document.getElementById ("txtIdTemperatura").value;
    fahrenheit = parseFloat(fahrenheit);

    //Aplico la fórmula para convertir a Celcius

    celcius = (fahrenheit-32)*5/9;

    //Parseo celsius

    celcius = parseFloat(celcius);

    //Muestro por alert el resultado al usuario

    alert(fahrenheit+" Fahrenheit son "+celcius+" Celcius");

}

function CentigradosFahrenheit () 
{
    //Formula de Cº a F es (x*1.8)+32
    
    let fahrenheit;
    let celcius;

        //Tomo el valor de temperatura en Celcius ingresado por el usuario y lo parseo a float
        celcius = document.getElementById ("txtIdTemperatura").value;
        celcius = parseFloat(celcius);
    
        //Aplico la fórmula para convertir a fahrenheit
    
        fahrenheit = celcius*1.8+32;
        fahrenheit = parseFloat(fahrenheit);
    
        //Parseo fahrenheit
    
        fahrenheit = parseFloat(fahrenheit);
    
        //Muestro por alert el resultado al usuario
    
        alert(celcius+" Celcius son "+fahrenheit+" Fahrenheit");
    

}
