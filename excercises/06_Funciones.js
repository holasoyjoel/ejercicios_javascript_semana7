/**
 * a. Crear una función suma que reciba dos valores numéricos y 
 * retorne el resultado. Ejecutar la función y guardar el resultado 
 * en una variable, mostrando el valor de dicha variable en la 
 * consola del navegador.
 */

function suma(numero1 , numero2){
    return numero1 + numero2;
}
let resultado = suma(1,2);
console.log(resultado);

/**
 * b. A la función suma anterior, agregarle una validación para 
 * controlar si alguno de los parámetros no es un número, 
 * mostrar una alerta aclarando que uno de los parámetros tiene error 
 * y retornar el valor NaN como resultado.
 */

function suma2(numero1 , numero2){
    if(typeof(numero1) != 'number' || typeof(numero2) != 'number'){
        alert('Uno de los numeros ingresados tiene error');
        return NaN;
    }
    return numero1 + numero2;
}
let resultado2 = suma2(true , 2);
console.log(resultado2);

/**
 * c. A la función suma del ejercicio 6b) agregarle una llamada 
 * que valide que los números sean enteros. En caso que haya 
 * decimales mostrar un alerta con el error y retorna el número 
 * convertido a entero (redondeado).
 */
function suma3(numero1 , numero2){
    if(typeof(numero1) != 'number' || typeof(numero2) != 'number'){
        alert('Uno de los numeros ingresados tiene error');
        return NaN;
    }
    
    numero1 = validarNumero(numero1);
    numero2 = validarNumero(numero2);

    return numero1 + numero2;
}
function validarNumero(numero){
    if(!Number.isInteger(numero)){
        alert('Se agrego un numero con decimal, devolviendo numero redondeado');
        return Math.round(numero);
    }
    return numero;
}
console.log(suma3(2.5 , 2.5));