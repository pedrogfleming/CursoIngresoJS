/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

		//Reservo espacio en memoria creando las varables
		
		let sueldoingresado;
		let resultadofinal;
		let porcentaje;
		let aumento = 10;

		//Cargo el valor con los datos de entrada y lo parseo para que se pueda operarar 
		
		sueldoingresado = document.getElementById("txtIdSueldo").value;
		
		resultadofinal = document.getElementById("txtIdResultado").value;

		//Parseo las variables

		sueldoingresado = parseInt (sueldoingresado);
		resultadofinal = parseInt (resultadofinal);
		porcentaje = parseInt(porcentaje);
		
		//Realizo las operaciónes , primero saco el porcentaje y después se lo sumo al sueldo
		porcentaje = sueldoingresado * aumento / 100;
		resultadofinal = sueldoingresado + porcentaje;
		
		//muestro el resultado final en la caja "Resultado"
		document.getElementById("txtIdResultado").value = resultadofinal;

		}
