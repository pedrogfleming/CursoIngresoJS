/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{ 
    //Declaro las variables
    let cantidadLamparitas;
    let montoCompra;
    let marcaLamparita;
    let descuentoMonto;
    let porcentajeMonto;
    let precioFinal;
   //Usuario ingresa la cantidad de lamparitas que compró y la marca
    cantidadLamparitas = document.getElementById("txtIdCantidad").value;
    marcaLamparita = document.getElementById("Marca").value;    
    //Parseo la cantidad de lamparitas ingresadas    
    cantidadLamparitas =parseInt(cantidadLamparitas); 
    
    if(cantidadLamparitas > 5)//Invoco el if del descuento de 50%
    {
        porcentajeMonto = 0.50;
        //precioFinal = montoCompra - (montoCompra * 0.5);
    }
    else
    {
        if(cantidadLamparitas == 5)//Si son 5 lamparitas
        {
            if(marcaLamparita == "ArgentinaLuz") //Si son marca Argentina luz, 40% de descuento
            {
                porcentajeMonto = 0.40;
                //precioFinal = montoCompra - (montoCompra * 0.4);
            }
            else//Si son de cualquier otra marca, 30%
            {
                porcentajeMonto = 0.30;
                //  precioFinal = montoCompra - (montoCompra * 0.3);
            }           
        }
        else//Si no agarra ninguna promoción, se le cobra la tarifa standard
        {
            porcentaje = 1; 
        }
    }
    montoCompra = cantidadLamparitas*35;
    alert(montoCompra);   
    alert(porcentajeMonto);
    //descuentoMonto = montoCompra*porcentajeMonto;
    //precioFinal = montoCompra-descuentoMonto;
    document.getElementById("txtIdprecioDescuento").value = precioFinal+" pesos";
}//FIN CODIGO



//CODIGO VIEJO
/*function CalcularPrecio () 
{ 
    //Declaro las variables
    let cantidadLamparitas;
    //let precioLamparitas;
    let montoCompra;
    let marcaLamparita;
    let descuentoMonto;
    let porcentajeMonto;
    let precioFinal;
   //Defino precio de las lamparitas
   //precioLamparitas = 35;
   //Usuario ingresa la cantidad de lamparitas que compró y la marca
    cantidadLamparitas = document.getElementById("txtIdCantidad").value;
    marcaLamparita = document.getElementById("Marca").value;    
    //Parseo la cantidad de lamparitas ingresadas    
    cantidadLamparitas =parseInt(cantidadLamparitas);
 
    //precioFinal = precioLamparitas*cantidadLamparitas-descuentoMonto;
    //precioFinal = parseInt(precioFinal);
    //Multiplico precio por cantidad de lamparitas compradas y establezco una variable para reducir operaciones dentro de los if

    
    if(cantidadLamparitas > 5)//Invoco el if del descuento de 50%
    {
        porcentajeMonto = 0.50;
        //descuentoMonto = montoCompra*0.5;
        //precioFinal = montoCompra-descuentoMonto;
       //document.getElementById("txtIdprecioDescuento").value = precioFinal+" pesos incluyendo un descuento de "+descuentoMonto+" pesos";
    }
    else
    {
        if(cantidadLamparitas == 5)//Si son 5 lamparitas
        {
            if(marcaLamparita == "ArgentinaLuz") //Si son marca Argentina luz, 40% de descuento
            {
                porcentajeMonto = 0.40;
                //descuentoMonto = montoCompra*0.40;
                //precioFinal = montoCompra-descuentoMonto;
                //document.getElementById("txtIdprecioDescuento").value = precioFinal+" pesos incluyendo un descuento de "+descuentoMonto+" pesos";
            }
            else//Si son de cualquier otra marca, 30%
            {
                porcentajeMonto = 0.30;
                //descuentoMonto = montoCompra*0.30;
                //precioFinal = montoCompra-descuentoMonto;
                //document.getElementById("txtIdprecioDescuento").value = precioFinal+" pesos incluyendo un descuento de "+descuentoMonto+" pesos";
            }           
        }
        else//Si no agarra ninguna promoción, se le cobra la tarifa standard
        {
            porcentajeMonto = 1; 
        }
    }
    montoCompra = cantidadLamparitas*35;
    alert(montoCompra);   
    alert(porcentajeMonto);
    descuentoMonto = montoCompra*porcentajeMonto;
    precioFinal = montoCompra-descuentoMonto;
    document.getElementById("txtIdprecioDescuento").value = precioFinal+" pesos";
}
*/