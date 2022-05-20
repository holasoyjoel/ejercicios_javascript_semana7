/**
 * a. Dado el siguiente array: 
 * ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", 
 * "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
 * mostrar por consola los meses 5 y 11.
 */
let array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(array[4] + ' ' + array[10]);

/**
 * b. Ordenar el array de meses alfabéticamente y mostrarlo por 
 * consola (utilizar sort).
 */
console.log(array.sort());

/**
 * c. Agregar un elemento al principio y al final del array 
 * (utilizar unshift y push).
 */
array.unshift('Java');
array.push('Script');
console.log(array);

/**
 * d. Quitar un elemento del principio y 
 * del final del array (utilizar shift y pop).
 */
array.shift();
array.pop();
console.log(array);

/**
 * e. Invertir el orden del array (utilizar reverse).
 */
console.log(array.reverse());

/**
 * f. Unir todos los elementos del array en un único string donde 
 * cada mes este separado por un guión - (utilizar join).
 */
let cadenaMeses = array.join(' ');
console.log(cadenaMeses);

/**
 * g. Crear una copia del array de meses que contenga desde Mayo 
 * hasta Noviembre (utilizar slice).
 */
let arrayMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let arrayMesesCopia = arrayMeses.slice(4,11);
console.log(arrayMesesCopia);
