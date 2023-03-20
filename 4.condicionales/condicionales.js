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
