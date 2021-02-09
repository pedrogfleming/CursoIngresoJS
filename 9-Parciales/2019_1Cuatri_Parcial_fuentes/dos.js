/*A una pareja se le pide los datos para mostrar un mensaje:
" ustedes se llaman xxxxx y xxxx pesan xx y xx kilos,
que sumados son xx kilos y el promedio de peso xx ".
*/

function mostrar()
{
  //Establezco las variables

  let nombrePersonaUno;
  let nombrePersonaDos;
  let pesoPersonaUno;
  let pesoPersonaDos;
  let pesoTotal;
  let promedioPeso;

  //Usuario ingresa los valores de nombre y peso

  nombrePersonaUno = prompt("Ingrese el nombre de la primera persona");
  pesoPersonaUno = prompt("Ingrese el peso de la primera persona");
  nombrePersonaDos = prompt("Ingrese el nombre de la segunda persona");
  pesoPersonaDos = prompt("Ingrese el peso de la segunda persona");

  //Parseo el peso de las dos personas

  pesoPersonaUno = parseFloat(pesoPersonaUno);
  pesoPersonaDos = parseFloat(pesoPersonaDos);
  
  //Sumo el peso de las dos personas

  pesoTotal = pesoPersonaUno+pesoPersonaDos;

  //Calculo el promedio del peso de las dos personas

  promedioPeso = pesoTotal/2;

  //Muestro el resultado de las dos operaciones

  alert("Ustedes se llaman "+nombrePersonaUno+" y "+nombrePersonaDos+" y pesan "+pesoPersonaUno+" y "+pesoPersonaDos+" kilos, que sumados son "+pesoTotal+" kilos y el promedio de sus pesos es "+promedioPeso+" kilos." );




}
