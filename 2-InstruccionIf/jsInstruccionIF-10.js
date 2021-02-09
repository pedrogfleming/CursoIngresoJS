function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	//Declaro la variable

	let notaAlumno;

	//Asigno nota RANDOM al alumno con una función

	notaAlumno =Math.floor(Math.random() * 10);

	//Parseo nota alumno
	
	notaAlumno = parseInt(notaAlumno);
	console.log(notaAlumno);

	//Invoco el if

	if(notaAlumno < 4)
		{
		alert("Vamos, la proxima se puede")
		}
	
	else
		{
			if(notaAlumno > 8)
				{
					alert("EXCELENTE");
				}
			else

				{
					alert("APROBÓ");
				}
		}
			

			
			
	

}//FIN DE LA FUNCIÓN