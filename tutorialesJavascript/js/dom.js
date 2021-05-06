/* console.log(window);
console.log(document);

let texto = "Hola, soy tu amigo y docente digital... Jonathan Mircha!!";
const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

hablar(texto); */






/* dom introduccion */
/* console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);

setTimeout(() => {
    console.log(document.getSelection().toString());
}, 3000);
document.write("<h2>Hola desde el DOM</h2>"); */






/* Nodos, Elementos y Selectores */
/* console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));

console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach(el => console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li")); */






/* Atributos y Data-atribute */
/* console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));

console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "es";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://youtube.com/");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel")); */

//data-attributes
/* console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
console.log($linkDOM.dataset.id);
$linkDOM.setAttribute("data-description","Modelo de objeto del documento")
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Boom chakalaka";
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));
$linkDOM.removeAttribute("data-id");
console.log($linkDOM.hasAttribute("data-id")); */






/* Estilos y variables CSS */
/* const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM);
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));

$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(window.getComputedStyle($linkDOM)); */

//variable CSS - Custom Properties CSS





/* clases CSS */
/* const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");
$card.classList.add("opacity-80","sepia");
$card.classList.remove("opacity-80","sepia");
$card.classList.toggle("sepia", "opacity-80"); */






/* texto y HTML */
/* const $whatIsDOM = document.getElementById("que-es");

let text = `
    <p>
        El modelo de objetos del documento ( <b><i>DOM - Document Object Model</i></b> ) es una API para documentos HTML y XML.
    </p>
    <p>
        Este provee una representacion estructural del documento, permitiendo modificar su contenido y presentacion visual mediante codigo JS.
    </p>
    <p>
        <mark>El DOM no es parte de la especificacion de Javascript, es una API para los navegadores</mark>
    </p>
`; */
//$whatIsDOM.innerText = text;
/* $whatIsDOM.textContent  = text;
$whatIsDOM.innerHTML = text;
$whatIsDOM.outerHTML = text; */





/* DOM Traversing */
/* const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children);
console.log($cards.children[1]);
console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[1].closest("section")); */





/* Creando Elementos y Fragmentos */
/* const $figure = document.createElement("figure"),
$img = document.createElement("img"),
$figcaption = document.createElement("figcaption"),
$figcaptionText = document.createTextNode("Animals"),
$cards = document.querySelector(".cards");
$figure2 = document.createElement("figure"),

$figure.classList.toggle("card");
$img.setAttribute("src","https://placeimg.com/200/200/animals")
$img.setAttribute("alt","Animals")

$cards.appendChild($figure);
$figure.appendChild($img);
$figcaption.appendChild($figcaptionText);
$figure.appendChild($figcaption);

$figure2.innerHTML = `            
    <img src="https://placeimg.com/200/200/people" alt="People">
    <figcaption>People</figcaption>`;
$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
$ul = document.createElement("ul");

document.write("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);

estaciones.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
});

const continentes = ["Africa", "America", "Europa", "Asia", "Oceania"];
$ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
continentes.forEach(el => $ul2.innerHTML += `<li>${el}</li>`);

const meses = ["Enero", "Febreo", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

$ul3 = document.createElement("ul");
$fragmento = document.createDocumentFragment();

meses.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragmento.appendChild($li);
});

document.write("<h3>Meses del año</h3>");
$ul3.appendChild($fragmento);
document.body.appendChild($ul3); */






/* Templates HTML */
const $cards = document.querySelector(".cards"),
$template = document.getElementById("template-card").content,
$fragment = document.createDocumentFragment(),
cardContent = [
    {
        title:"Tecnologia",
        img: "https://placeimg.com/200/200/tech",
    },
    {
        title:"Animales",
        img: "https://placeimg.com/200/200/animals",
    },
    {
        title:"Arquitectura",
        img: "https://placeimg.com/200/200/arch",
    },
    {
        title:"Gente",
        img: "https://placeimg.com/200/200/people",
    },
    {
        title:"Naturaleza",
        img: "https://placeimg.com/200/200/nature",
    },
];

cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src",el.img);
    $template.querySelector("img").setAttribute("alt",el.title);
    $template.querySelector("figcaption").textContent = el.title; 

    $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
});

$cards.appendChild($fragment);




































