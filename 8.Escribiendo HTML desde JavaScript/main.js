const h1 = document.querySelector("h1")
const p = document.querySelector("p")
const parrafo = document.querySelector(".parrafo")
const pid = document.querySelector("#pid")
const input = document.querySelector("input")

console.log({
    h1,
    p,
    parrafo,
    pid,
    input,}
)

// h1.innerText="buho";
// h1.innerHTML="buho";
// console.log(h1.getAttribute("class"));
// h1.setAttribute("class", "rojo")


// h1.classList.add("rojo");
// h1.classList.remove("verde");
// h1.classList.toggle("verde")
// h1.classList.contains("verde")
input.value = "apurate"

const img = document.createElement("img");
img.setAttribute("src", "https://imgur.com/t/funny/Y5plZUN");
console.log(img);


pid.innerHTML= "";

pid.appendChild(img);
