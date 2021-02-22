/*
3. Piedra, Papel o Tijera (v 2.0):
Ahora debemos informar cuantas veces se ganó, perdió o empató desde la última recarga de página
*/
let contadorDeEmpates;
let contadorDeGanadas;
let contadorDePerdidas;
var eleccionMaquina;
let eleccionUsuario;
let max;
let min;
//Inicializo las variables
max = 3;
min = 1;
contadorDeEmpates=0;
contadorDeGanadas=0;
contadorDePerdidas=0;
function comenzar()
{
    //La máquina elije un número random
    alert("Elija piedra, papel o tijera");
}//FIN DE LA FUNCIÓN
function piedra()//1
{
	eleccionMaquina = Math.floor(Math.random()*(max - min + 1) + min)
	switch (eleccionMaquina)
    {
        case 1:
            alert("La máquina eligió piedra, es un empate");
			contadorDeEmpates = contadorDeEmpates+1;
            break;
        case 2:
            alert("La máquina eligió papel, usted pierde");
			contadorDePerdidas = contadorDePerdidas+1;
            break;
        default:
            alert("La máquina eligió tijera, usted gana");
			contadorDeGanadas = contadorDeGanadas+1;      
            break;
    }
	document.getElementById("txtIdGanadas").value=contadorDeGanadas+" rondas ganadas";
	document.getElementById("txtIdPerdidas").value=contadorDePerdidas+" rondas perdidas";
	document.getElementById("txtIdEmpatadas").value=contadorDeEmpates+" rondas empatadas";
}//FIN DE LA FUNCIÓN PIEDRA
function papel()//2
{   
	eleccionMaquina = Math.floor(Math.random()*(max - min + 1) + min)
	switch (eleccionMaquina)
    {
    case 1:
        alert("La máquina eligió piedra, usted gana");
		contadorDeGanadas = contadorDeGanadas+1;   
        break;
    case 2:
        alert("La máquina eligió papel, es un empate");
		contadorDeEmpates = contadorDeEmpates+1;
        break;
    default:
        alert("La máquina eligió tijera, usted pierde");
		contadorDePerdidas = contadorDePerdidas+1;      
        break;
    }
	document.getElementById("txtIdGanadas").value=contadorDeGanadas+" rondas ganadas";
	document.getElementById("txtIdPerdidas").value=contadorDePerdidas+" rondas perdidas";
	document.getElementById("txtIdEmpatadas").value=contadorDeEmpates+" rondas empatadas";
}//FIN DE LA FUNCIÓN PAPEL
function tijera()//3
{
	eleccionMaquina = Math.floor(Math.random()*(max - min + 1) + min)
	switch (eleccionMaquina)
    {
    case 1:
        alert("La máquina eligió piedra, usted pierde");
		contadorDePerdidas = contadorDePerdidas+1; 
        break;
    case 2:
        alert("La máquina eligió papel, usted gana");
		contadorDeGanadas = contadorDeGanadas+1;
        break;
    default:
        alert("La máquina eligió tijera, es un empate");
		contadorDeEmpates = contadorDeEmpates+1      
        break;
	}
	document.getElementById("txtIdGanadas").value=contadorDeGanadas+" rondas ganadas";
	document.getElementById("txtIdPerdidas").value=contadorDePerdidas+" rondas perdidas";
	document.getElementById("txtIdEmpatadas").value=contadorDeEmpates+" rondas empatadas";

}//FIN DE LA FUNCIÓN TIJERA
function mostrarResultado()
{
	alert(contadorDeGanadas+" rondas ganadas"+contadorDePerdidas+" rondas perdidas"+contadorDeEmpates+" rondas empatadas");

}