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


















