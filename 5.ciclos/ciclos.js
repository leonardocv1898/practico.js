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
