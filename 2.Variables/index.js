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