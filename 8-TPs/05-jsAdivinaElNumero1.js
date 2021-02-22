/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
let numeroIngresado;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto =Math.floor(Math.random() * 101);
  alert("Se ha generado un número entre 1 y 100, ingrese un Numero y después haga click en Verificar");
  //Limpio el contador de intentos por si el usuario arranca de nuevo el juego
  contadorIntentos = 0;
  document.getElementById("txtIdIntentos").value = contadorIntentos;
}//FIN FUNCION COMENZAR

function verificar()
{
  numeroIngresado = document.getElementById("txtIdNumero").value;
	if (numeroIngresado == numeroSecreto) //Si el usuario acierta el número
  {
    alert("Usted es un ganador!!! y en solo "+contadorIntentos+" intentos");
  }
  else//de no acertar al número
  {
    alert("El número ingresado no es correcto");
    contadorIntentos = contadorIntentos+1;
    document.getElementById("txtIdIntentos").value = contadorIntentos;
    if (numeroIngresado < numeroSecreto)//se debe informar si “falta…”  para llegar al número secreto
    {
      alert("Falta para llegar al número secreto...");
    }
    else//o si “se pasó…”  del número secreto.
    {
      alert("Se pasó...");
    }
  }
	
}//FIN FUNCION VERIFICAR