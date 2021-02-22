/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
let eleccionUsuario;
let max;
let min;
//Inicializo las variables
max = 3;
min = 1;

function comenzar()
{
    //La máquina elije un número random
    eleccionMaquina = Math.floor(Math.random()*(max - min + 1) + min)
    alert("Elija piedra, papel o tijera, la máquina ya decidió");
}//FIN DE LA FUNCIÓN
function piedra()//1
{
	switch (eleccionMaquina)
    {
        case 1:
            alert("La máquina eligió piedra, es un empate");
            break;
        case 2:
            alert("La máquina eligió papel, usted pierde");
            break;
            default:
                alert("La máquina eligió tijera, usted gana");      
            break;
    }

}//FIN DE LA FUNCIÓN PIEDRA
function papel()//2
{    switch (eleccionMaquina)
    {
    case 1:
        alert("La máquina eligió piedra, usted gana");
        break;
    case 2:
        alert("La máquina eligió papel, es un empate");
        break;
        default:
            alert("La máquina eligió tijera, usted pierde");      
        break;
    }

}//FIN DE LA FUNCIÓN PAPEL
function tijera()//3
{
	switch (eleccionMaquina)
    {
    case 1:
        alert("La máquina eligió piedra, usted pierde");
        break;
    case 2:
        alert("La máquina eligió papel, usted gana");
        break;
        default:
            alert("La máquina eligió tijera, es un empate");      
        break;
    }

}//FIN DE LA FUNCIÓN TIJERA