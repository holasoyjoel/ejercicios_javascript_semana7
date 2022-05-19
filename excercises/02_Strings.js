/**
 * a. Crear una variable de tipo string con al menos 10 caracteres y 
 * generar un nuevo string con los primeros 5 caracteres guardando 
 * el resultado en una nueva variable (utilizar substring).
 */

let cadena1 = 'Javascript es un lenguaje de programacion';
let cadena2 = cadena1.substring(0,5);
console.log(cadena2);

/**
 *b. Crear una variable de tipo string con al menos 10 caracteres y 
 generar un nuevo string con la primera letra en mayúscula y las 
 demás en minúscula. Guardar el resultado en una nueva variable 
 (utilizar substring, toUpperCase, toLowerCase y el operador +).
 */
let cadena3 = "python es otro lenguaje de programacion";
let cadena4 = cadena3.substring(0,1).toLocaleUpperCase() + cadena3.substring(1).toLocaleLowerCase();
console.log(cadena4);

/**
 *c. Crear una variable de tipo string con al menos 10 caracteres y 
 algún espacio en blanco. Encontrar la posición del primer espacio 
 en blanco y guardarla en una variable (utilizar indexOf).
 */
let cadena5 = "Aprendiendo a ser desarrollador Frontend";
let indexEspacioBlanco = cadena5.indexOf(' ');
console.log(indexEspacioBlanco);