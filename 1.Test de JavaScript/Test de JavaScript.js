// ¡Es hora de poner a prueba cuánto sabes sobre JavaScript!

// Esta lectura es una prueba de JavaScript. A diferencia de un examen, nadie te obligará a nada. Puedes hacer trampa y saltar a la siguiente clase, ese es el camino fácil. Pero tengo mucha fe en ti, confío en que seguirás mis consejos y no avanzarás a la siguiente clase hasta superar esta prueba.


// - Instrucciones para tomar esta prueba

// Evalúa muy críticamente tu conocimiento.
// Si logras resolver la prueba, no importa cuánto te cueste, puedo asegurarte que tienes todo para continuar a las siguientes clases y tomar el resto del curso.
// Si no lo logras, no te preocupes, absolutamente nadie puede juzgarte, solo tú. Vuelve al Curso Básico de JavaScript, anota los temas clave donde puedes mejorar, ubica las clases donde puedes aprenderlos y estudia vigorosamente.
// Es completamente válido hacer búsquedas en Google, cursos y tutoriales de Platzi, incluso usar tu cuaderno de notas sin importar si es físico o virtual.
// Recuerda que el éxito no se mide por cuánto tiempo te toma aprender, esa métrica es relativamente inútil. Mejor concéntrate en completar los cursos de tu ruta de aprendizaje profesional y desarrollar los proyectos que realmente demuestran que dominas cada tecnología.




// - Variables y operaciones

// Responde las siguientes preguntas en la sección de comentarios:

// ¿Qué es una variable y para qué sirve?
// Es un espacio reservado en memoria que nos permite almacenar información. Podemos almacenar diferentes tipos de datos para usarlos en nuestro código. En JS existe tres formas de crear una variable var, let, const. en ES6 nacen let & const que son variable de tipo scope y esto quiere decir que dependiendo del scope es su accesibilidad.

// ¿Cuál es la diferencia entre declarar e inicializar una variable?
//Cuando declaramos una variable, simplemente nombramos la variable, sin indicarle que tipo de información o dato almacenara. En cambio, cuando inicializamos una variable indicamos el tipo de dato e información que va a almacenar.

//ejemplo:

// //Declarar una variable
// let nombre;
// //Inicializar la variable 
// nombre = "Camilo"; 
// //Podemos generar este proceso en una sola linea de codigo. 
// let nombre = "Camilo";



// ¿Cuál es la diferencia entre sumar números y concatenar strings?
// entre sumar números y concatenar strings?

// Al momento sumar números estamos realizando una operación matemática con dos tipos de datos (Numbers) mientras que al concatenar estamos sumando dos tipos de datos (String) que son cadena de textos.


// ¿Cuál operador me permite sumar o concatenar?
//El operador utilizado es el signo +




// 2.Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

 nombre = leonardo (String)
 apellido = contreras (String)
 nombreDeUsuarioPlatzi= leocv98 (String)
 edad = 24 (Number)
 correo = leocontreras1898qgmail.com (String)
 mayorDeEdad = true (Boolean)
 dineroAhorrado = 3000 (Number)
 deuda = 0 (Number)



// 3.Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

let nombre = "leonardo" ;
let apellido = "contreras"; 
let nombreDeUsuarioPlatzi= "leocv98"; 
let edad = 24 ;
let correo = "leocontreras1898qgmail.com"; 
let mayorDeEdad = true ;
let dineroAhorrado = 3000; 
let deuda = 0 ;


// 4.Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

// Nombre completo (nombre y apellido)
// Dinero real (dinero ahorrado menos deudas)

function nombreCompleto (resultado){
    resultado = ("nombre " + "apellido")
    console.log(resultado)
}

console.log("mi nombre y apellido es " + nombre + 
 apellido );

 var resul = function(dineroAhorrado,deuda){
    resul(dineroAhorrado - deuda)
    console.log(`en total me quedan  ${resul}`);
 }

 let totalDinero = dineroAhorrado - deuda
 console.log(`en total tengo $(totalDinero)`);




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






// - Condicionales

// Responde las siguientes preguntas en la sección de comentarios:

// ¿Qué es un condicional?

// Es una expresión que nos permite evaluar si es True o False.


// ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

// If…else
// Switch

// Con el condicional If…Else podemos tener diferentes expresiones para evaluar dependiente del caso, y generar tantos If o else como sea necesario. Mientras que Switch case toma una sola expresión de entrada pero puede evaluar todos los casos como sea necesario de una forma más ordenada.


// ¿Puedo combinar funciones y condicionales?

// Podemos encadenar una respuesta desde un condional a otro pero no podemos combinarlo dentro de una misma expresión. Si podemos ocuparlos de forma separada y luego encadenar una acción dependiendo del resultado.

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}





function tipoDeSuscripcion (resultado){
    if (resultado == "free") {
        console.log("puedes tomar los cursos gratis");   
    } else if (resultado == "basic") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    } else if (resultado == "expert") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    } else if (resultado == "ExpertPlus") {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    } else{
        console.log("no puedes hacer nada");
    }

    tipoDeSuscripcion()

}



// 3. Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

let typeSuscripción = [
    "Free",
    "Basic", 
    "Expert", 
    "ExpertPlus"
    ];
    let infoSuscripción = [
    "solo puedes tomar los cursos gratis", 
    "puedes tomar casi todos los cursos de Platzi durante un mes", 
    "puedes tomar casi todos los cursos de Platzi durante un año", 
    "tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];
    let userSuscription = "Expert";
    for (let i=0; i < typeSuscripción.length; i++) {
      if (userSuscription == typeSuscripción[i]) {
          console.log(`Si estas suscrito al plan ${typeSuscripción[i]} en el cual ${infoSuscripción[i]}`)
      }
    }




// - ciclos:


// 1. Responde las siguientes preguntas en la sección de comentarios:


// ¿Qué es un ciclo?

//Un ciclo es un bucle que se repite hasta que se cumpla una condición.



// ¿Qué tipos de ciclos existen en JavaScript?

// Ciclo For, While, etc.



// ¿Qué es un ciclo infinito y por qué es un problema?

// Un ciclo infinito es cuando la condición es infinita, nunca se cumple y, por lo tanto, no existe termino al proceso, por consecuencia nuestro código puede fallar y ralentizar nuestras computadoras.



// ¿Puedo mezclar ciclos y condicionales?

// Sí, podemos condicionar un ciclo para que se repita todas las veces hasta que se cumplan una condición que internamente puede tener otra condición para su evaluación.




// 2. Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:


for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
//My Solution

let i = 0;
while (i < 5) {
  i++;
  console.log(`El valor de i es: ${i}`)
}

let r = 10;
while (r >= 2) {
  r--;
  console.log(`El valor de r es: ${r}`)
}


// 3. Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

//Basic Math Quiz
let num = 10;
let num2 = 10;
const result = num + num2;
let questions = {
  q1: `Cuanto es ${num} + ${num2}`
}
function Quizzer() {
  let userInput = prompt(questions.q1);
  if (userInput == result) {
    alert("Felicitaciones, respondiste correctamente el desafio 😎");
  } else {
    alert("lamentablemente, tu respuesta es incorrecta, sigue practicando ❌!");
  }
}
Quizzer();


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