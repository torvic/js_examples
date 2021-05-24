## Introduccion al DOM (Document Object Model)
Objeto padre `window`:
```javascript
console.log(window);
```
Acceder a todo el documento HTML:
```javascript
console.log(window.document);
console.log(document);

console.log(document.documentElement); // HTML sin el DOCTYPE
```
Acceder a etiquetas del documento HTML:
```javascript
console.log(document.head);
console.log(document.body);

console.log(document.doctype); // DOCTYPE 
console.log(document.charset); //meta charset 

console.log(document.title);
console.log(document.links); // HTMLCollection de los enlaces
console.log(document.images); // HTMLCollection de las <img>
console.log(document.forms); // HTMLCollection de <form>
console.log(document.styleSheets); // StyleSheetList
console.log(document.scripts); // HTMLCollection de <script>
```
## Nodos, Elementos y Selectores
### Nodo
Cada objeto ubicado dentro de un documento HTML es un nodo de algun tipo. En un documento HTML, un objeto puede ser un nodo de elemento pero tambien un nodo de texto o un nodo de atributo.

```javascript
console.log(document.getElementsByTagName("li")); // HTMLCollection de <li></li>
console.log(document.getElementsByTagName("li")[0]); // Accediendo al primer <li></li> (element_node)
console.log(document.getElementsByClassName("card")); // HTMLCollection de elementos con el atributo class="card"
console.log(document.getElementsByName("nombre")); // Coleccion NodeList de elementos con el atributo name="nombre"
console.log(document.getElementById("menu")); // (element_node) con el atributo id="menu"
```
### Selectores
Los metodos `document.querySelector()` y `document.querySelectorAll()` deben tener como argumento una sintaxis CSS valida.
```javascript
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach(el => console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li"));
```
### Atributos y Data-atribute

`document.documentElement` devuelve el elemento `<html>`:
```javascript
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
```
`getAttribute()` devuelve el valor del atributo especificado en el elemento:
```javascript
console.log(document.querySelector(".link-dom").href); // Otra forma
console.log(document.querySelector(".link-dom").getAttribute("href"));
```
`setAttibute()` añade el valor de un atributo en el elemento indicado. Si el atributo ya existe, el valor es actualizado:
```javascript
document.documentElement.lang = "es"; // Otra forma de actualizar
console.log(document.documentElement.lang);

document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);
```
`Element.hasAttribute()` devuelver un valor **Booleano** indicando si el elemento tiene el atributo especificado o no:
```javascript
const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM.hasAttribute("rel"));
```
`Element.removeAttribute()` elimina un atributo del elemento especificado:
```javascript
$linkDOM.removeAttribute("rel");
```
Los atributos `data-*` permiten almacenar informacion adicional sobre un elemento HTML.

La propiedad **dataset** proporciona una interfaz lectura/escritura para obtener los **atributos de datos personalizados**:
```javascript
const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
console.log($linkDOM.dataset.id);

$linkDOM.setAttribute("data-description","Modelo de objeto del documento")
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Boom chakalaka"; // Escritura
console.log($linkDOM.hasAttribute("data-id"));
```
## Estilos y variables CSS

```
$linkDOM
    |---> .style
            |---> .<property-lowerCase> = "<value>"
            |---> .setProperty("<key>", "<value>")

    |---> .getAtributte("style")
window.getComputedStyle($linkDOM)
```
## Clases CSS
```
 $card
    |---> .className 
    |---> .classList => DOMTokenList
        |---> .contains("<style-class>") => true, false
        |---> .add("<style-class>",...)
        |---> .remove("<style-class>",...)
        |---> .replace("<style-class-replaced>","<style-class>")
        |---> .toggle("<style-class>")
```
## text & HTML
```
$whatIsDOM
    |---> innerText = <text>
    |---> textContent = <text>
    |---> innerHTML = <text>
    |---> outerHTML = <text>

```
## DOM traversing
```
$cards
    |---> .children => HTMLCollection[]
    |---> .children[<#>]
        |---> .closest("<etiqueta>")
    |---> .parentElement
    |---> .firtsElementChild
    |---> .lastElementChild
    |---> .previousElementSibling
    |---> .nextElementSibling
    |---> .closest("<etiqueta>")

```
## Creando Elementos y Fragmentos
Crear elemento HTML:
```
$<etiqueta> <-- document
                    |---> .createElement("<etiqueta>")
```
Añador elemento hijo a un elemento padre:
```
$<etiqueta>
    |---> .appendChild($<etiqueta-child>)
```
Crear fragmentos
```
$<fragmento> <-- document
                    |---> .createDocumentFragment()
```
## Templates HTML
Crear template HTML `<template>...</template>`.
Clonar un Nodo:
```
$<clone> <-- document
                |---> importNode($<etiqueta>, true)
```
## Modificando Elementos
Reemplazar nodos hijos:
```
$<nodo-padre>
    |---> .replaceChild(<new-nodo>, <nodo-a-reemplazar>)
```
Insertar un nodo-child antes de un nodo-child de referencia:
```
$<nodo-padre>
    |---> .insertBefore(<new-nodo>, <nodo-referencia>)
```
Eliminar un nodo-child:
```
$<node-padre>
    |---> .removeChild(<nodo-child>)
```
Otra forma de colnar un nodo:
```
$<clone> <-- $cards
                |---> .cloneNode(true|false)
```





















