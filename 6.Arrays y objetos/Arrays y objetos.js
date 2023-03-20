// - Listas

// Responde las siguientes preguntas en la sección de comentarios:

// ¿Qué es un array?

// Un array es una colecciones de elementos con valores de una sola variable. Se escriben dentro de [ … ], separado por una coma.


// ¿Qué es un objeto?

// Es una colección de datos relacionados con múltiples variables con sus valores.


// ¿Cuándo es mejor usar objetos o arrays?

// Ocupamos objetos cuando el conjunto de elementos es muy grande y de distintos tipos de valores.


// ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?




// 2.Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

let array1 = [
    "amor", "exito", "felicidad", "disciplina", "constancia"
]

function imprimirArray (resultado){
    console.log(resultado [0]);
}

imprimirArray(array1)



// 3.Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

function myArray (array){
        for (let i = 0; i < array.length; i++) {
          console.log(`${i + 1} ${array[i]}`)
        }
      myArray(array1);
}

// 4️. Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

let myCar = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969
};
function readObject(object) {
  for (let key in object) {
    console.log(object[key]);
 	}
 }
readObject(myCar);