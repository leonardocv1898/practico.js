// - funciones 


//  Responde las siguientes preguntas en la sección de comentarios:

//  ¿Qué es una función?

// Es un conjunto de acciones que nos permitirá reutilizar en nuestro código y siempre deben devolver un resultado. Podemos crear diferentes funciones con parámetros distintos y luego utilizar la información para realizar un evento o acción dentro de nuestro código.


//  ¿Cuándo me sirve usar una función en mi código?

//Cuando necesitamos repetir una acción en nuestro código, en vez de escribir una suma, por ejemplo en cada línea, podemos crear una función que nos permita sumar elementos cada vez que lo necesitemos y solo cambiamos sus parámetros.


//  ¿Cuál es la diferencia entre parámetros y argumentos de una función?

// Los parámetros son las variables declaras y solicitadas en nuestra función, al momento de realizar el llamado de nuestra funciones nos exigirá declarar nuestras variables que vendrían a ser nuestros argumentos de la función.

// function myFunction( parámetro1 + parámetro2) {
//   ... All my code here
//   }
  
//   myFunction(argumento + argumento2);
//   Al declarar las variables parámetro1 y parámetro2 estamos generando los argumentos de nuestra función. 


// 2. Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:


const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";
console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
//My solution
function presentation(name, lastName, nickName){
  return console.log(`Mi nombre completo es ${name} ${lastName}, pero prefiero que me digas ${nickName}.`);
}
presentation("Camilo", "Saavedra", "cisaa");
