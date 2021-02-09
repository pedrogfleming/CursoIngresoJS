/*
Realizar el algoritmo que pida los datos necesarios 
para un triángulo equilátero por prompt 
y que muestre el perímetro por alert.
*/

function mostrar()
{

    //Declaro las variables

    let ladoTriangulo;
    let perimetroTriangulo;

    //Le pido al usuario que ingrese el valor de uno de los lados del triangulo

    ladoTriangulo = prompt("Ingrese la medida de uno de los lados del triángulo equilátero");

    //Parseo el valor ingresado por el usuario

    ladoTriangulo = parseFloat(ladoTriangulo);

    //Calculo el perímetro del triángulo equilátero

    perimetroTriangulo = 3*ladoTriangulo;

    //Le muestro al usuario el perímetro del triángulo equilátero

    alert("El perímetro del triángulo equilátero es "+perimetroTriangulo);

}
