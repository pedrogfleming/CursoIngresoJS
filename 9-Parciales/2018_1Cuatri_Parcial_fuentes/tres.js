/*
Pedir por prompt el precio y el porcentaje de descuento y
mostrar el precio final con descuento por id.

*/

function mostrar()
{
    //Creo las variables

    let precioProducto;
    let descuentoProducto;
    let montoDescuento;
    let precioFinal;

    //Se le pide al usuario que ingresa el precio del producto y el descuento

    precioProducto = prompt("Ingrese el precio del producto");
    descuentoProducto = prompt ("Ingrese el descuento al producto");

    //Parseo los valores ingresados por el usuario

    precioProducto = parseFloat(precioProducto);
    descuentoProducto = parseFloat (descuentoProducto);

    //Calculo el descuento   al producto

    montoDescuento= precioProducto*descuentoProducto/100;

    //Aplico el descuento al producto

    precioFinal = precioProducto-montoDescuento;
    
    //Le muestro al usuario el precio final con descuento del producto

    document.getElementById("elPrecioFinal").value = precioFinal;

}
