/**
 * a. Crear un número aleatorio entre 0 y 1 utilizando la función 
 * Math.random(), si el valor es mayor o igual que 0,5 mostrar una 
 * alerta con el mensaje “Greater than 0,5” y sino un alerta con el 
 * mensaje “Lower than 0,5”. [utilizar alert() ]
 */
let numeroAleatorio = Math.random(0,1);
if(numeroAleatorio >= 0.5){
    alert('Greater than 0,5');
}
else{
    alert('Lower than 0,5');
}
console.log(numeroAleatorio);

/**
 * b. Crear una variable “Age” que contenga un número entero entre 0 
 * y 100 y muestre los siguientes mensajes de alerta:
 *  i. 'Menor' si la edad es menor a 18.
 *  ii. 'Mayor' si la edad es mayor o igual a 18 y menor que 65.
 * iii. 'Jubilado' si la edad es mayor o igual que 65.
 */
let age = 70;
if(age < 18){
    alert('Menor');
}
if(age >= 18 && age < 65){
    alert('Mayor');
}
if(age >= 65){
    alert('Jubilado');
}