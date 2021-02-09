/*mostrar por alert el mensaje: 
"usted es xxxxx y vive en la localidad de xxxxxxxx".
*/

function mostrar()
{
 //Creo las variables
    let nombreUsuario;
    let localidadUsuario;

  //Usuario ingresa los datos de las variables en los text box
  
  nombreUsuario = document.getElementById("elNombre").value;
  localidadUsuario = document.getElementById("laLocalidad").value;

  //Muestro al usuario la concatenación de los datos ingresados

  alert("Usted se llama "+nombreUsuario+" y vive en "+localidadUsuario);
}
