function mostrar()
{
/*
Bienvenidos (SWITCH).
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).
*/
//Creo la variable
let planetaIngresado;
//Se le pide al usuario que ingrese un planeta
planetaIngresado = prompt("Ingrese un planeta","mercurio");
//Invoco el SWITCH
switch (planetaIngresado) 
{
    case "tierra"://Si es la tierra mostrar "acá vivimos".
        alert("acá vivimos");        
        break;
    case "venus"://Si está más cerca del sol, "acá hace más calor".
    case "mercurio":
        alert("acá hace más calor");
        break;     
    case "marte"://Si está más lejos del sol, "acá hace más frio".
    case "jupiter":
    case "saturno":
    case "urano":
    case "neptuno":
    case "pluto":
        alert("acá hace más frio");
        break;                 
    default://Si no es un planeta valido informarlo.
        alert("No es un planeta válido");
        break;
}
}
