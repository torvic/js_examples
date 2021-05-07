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





















