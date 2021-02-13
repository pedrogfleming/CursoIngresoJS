/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
ok A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
ok B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
ok C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
ok D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
ok E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
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
    let montoImpuestoBruto;
    let precioFinal;

   //Usuario ingresa la cantidad de lamparitas que compró y la marca
    cantidadLamparitas = document.getElementById("txtIdCantidad").value;
    marcaLamparita = document.getElementById("Marca").value;    
    //Parseo la cantidad de lamparitas ingresadas    
    cantidadLamparitas = parseInt(cantidadLamparitas); 
    //Fijo tarifa standard, despu{es se pisará con los IF}
    porcentajeMonto = 0;
    
    if(cantidadLamparitas > 5)//Invoco el if del descuento de 50%
    {
        porcentajeMonto = 0.50;
    }
    else
    {
        if(cantidadLamparitas == 5)//Si son 5 lamparitas
        {
                if(marcaLamparita == "ArgentinaLuz") //Si son marca Argentina luz, 40% OFF
                {
                porcentajeMonto = 0.40;
                }
                else//Si son de cualquier otra marca, 30% OFF
                {
                porcentajeMonto = 0.30;
                }           
        }
        else
        {
            if(cantidadLamparitas == 4)//Si son 4 lamparitas
            {
                if(marcaLamparita == "ArgentinaLuz" || marcaLamparita == "FelipeLamparas")// Y si son de estas dos marcas 25% OFF
                {
                porcentajeMonto = 0.25;
                }            
                else//Si es de otra marca, 20% OFF
                {
                porcentajeMonto = 0.20;
                }  
            }      
            else
            {
                if(cantidadLamparitas == 3)//Si son 3 lamparitas)
                {
                        if(marcaLamparita == "ArgentinaLuz")//Si son de esta marca, 15% OFF
                        {
                        porcentajeMonto = 0.15;  
                        }
                        else
                        {
                            if(marcaLamparita == "FelipeLamparas")//Si son de esta marca, 10% OFF
                            {
                            porcentajeMonto = 0.1;   
                            }
                            else//Si es de cualquier otra marca, 5% OFF
                            {
                            porcentajeMonto =  0.05;  
                            }
                        }
                }

            }         
        }
    }           
    montoCompra = cantidadLamparitas*35;
    descuentoMonto = montoCompra*porcentajeMonto;
    precioFinal = montoCompra-descuentoMonto;
    montoImpuestoBruto = precioFinal*0.1;
    //Invoco el IF para impuestos brutos
    if(precioFinal >119)
    {
        precioFinal = precioFinal+montoImpuestoBruto;
        document.getElementById("txtIdprecioDescuento").value = ("IIBB Usted pagó "+precioFinal+" pesos, siendo "+montoImpuestoBruto+" pesos el impuesto que pagó");
    }    
    else
    {
    document.getElementById("txtIdprecioDescuento").value = (precioFinal+" pesos");
    }

}//FIN CODIGO