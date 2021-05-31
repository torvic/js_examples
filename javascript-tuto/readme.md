# JavaScript

## Sintaxis Spread.
Permite a un elemento iterable tal como un **arreglo o cadena ser expandidos en lugares donde cero o mas elementos son esperados**, o aun objeto ser expandido en lugares donde cero o mas **pares de valores clave** son esperados.

### Para parametros en funciones.
```javascript
function sumar1(a, b, ...c) {
  let resultado = a + b;
  c.forEach((el) => (resultado += el));
  return resultado;
}

console.log(sumar1(1,2));
console.log(sumar1(1,2,3));
console.log(sumar1(1,2,3,4));
console.log(sumar1(1,2,3,4,5));
```
### Para arreglos.
```javascript
let arr1 = [1,2,3,4,5]
let arr2 = [6,7,8,9,0]

console.log(arr1, arr2);

const arr3 = [...arr1, ...arr2]
console.log(arr3);
```
### Para objetos.
```javascript
let obj11 = {foo: 'bar', x: 42};
let obj12 = {foo: 'bazz', y: 13};

let clonedObj = {...obj11};
console.log(clonedObj); // {foo: "bar", x: 42}

let mergeObj = {...obj11, ...obj12};
console.log(mergeObj); // {foo: "bazz", x: 42, y: 13}
```
## Operador de Cortocircuito
### Cortocircuito OR
Cuando el valor de la izquierda en la expresion siempre puede validar a [`true`](https://developer.mozilla.org/es/docs/Glossary/Truthy), es el valor que se cargara por defecto. 
```javascript
function saludar(nombre) {
  nombre = nombre || "Desconocido";
  console.log(`Hola ${nombre}`);
}
saludar("Jon");
saludar();

// Truthy
console.log("cadena" || "valor de la derecha"); // cadena
console.log(19 || "valor de la derecha"); // 19
console.log(true || "valor de la derecha"); // true
console.log([] || "valor de la derecha"); // []
console.log({} || "valor de la derecha"); // {}
// Falsy
console.log(false || "valor de la derecha"); // valor de la derecha
console.log(null || "valor de la derecha"); // valor de la derecha
console.log(undefined || "valor de la derecha"); // valor de la derecha
console.log('' || "valor de la derecha"); // valor de la derecha
console.log(0 || "valor de la derecha"); // valor de la derecha
```
### Cortocircuito AND
Cuando el valor de la izquierda en la expresion siempre puede validar a [`false`](https://developer.mozilla.org/en-US/docs/Glossary/Falsy), es el valor que se cargara por defecto.
```javascript
// Truthy
console.log("cadena" && "valor de la derecha"); // valor de la derecha
console.log(19 && "valor de la derecha"); // valor de la derecha
console.log(true && "valor de la derecha"); // valor de la derecha 
console.log([] && "valor de la derecha"); // valor de la derecha
console.log({} && "valor de la derecha"); // valor de la derecha
// falsy
console.log(false && "valor de la derecha"); // false
console.log(null && "valor de la derecha"); // null
console.log(undefined && "valor de la derecha"); // undefined
console.log('' && "valor de la derecha"); // ''
console.log(0 && "valor de la derecha"); // 0
```














