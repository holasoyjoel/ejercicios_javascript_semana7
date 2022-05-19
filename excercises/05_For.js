/**
 * a. Crear un array que contenga 5 palabras y recorrer dicho 
 * array utilizando un bucle for de JavaScript para mostrar una 
 * alerta utilizando cada una de las palabras.
 */
let arrayPalabras = ['aprendiendo' , 'javaScript' , 'programacion' , 'codigo' , 'bucles'];
for(let i=0 ; i<arrayPalabras.length ; i++){
    alert(arrayPalabras[i]);
}

/**
 * b. Al array anterior convertir la primera letra de cada 
 * palabra en mayúscula y mostrar una alerta por cada palabra 
 * modificada.
 */
for(let i=0 ; i<arrayPalabras.length ; i++){
    alert(arrayPalabras[i].substring(0,1).toUpperCase() + arrayPalabras[i].substring(1));
}

/**
 * c. Crear una array vacío y con un bucle for de 10 repeticiones. 
 * Llenar el array con el número de la repetición, es decir que al 
 * final de la ejecución del bucle for debería haber 10 elementos 
 * dentro del array, desde el número 0 hasta al número 9. Mostrar 
 * por la consola del navegador el array final (utilizar console.log).
 */
let array = [];
for(let i=0 ; i<10 ; i++){
    array.push(i);
}
console.log(array);