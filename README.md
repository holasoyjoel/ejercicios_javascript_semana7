1. Variables y Operadores

    a) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable. (utilizar concat).
        " Dificultad: facil - Comentario: Cree 3 variables, las cuales 2 de ellas guardan una cadena como predeterminado, a la tercera variable le asigno el valor de la primera variable
          y utilizando la función concat() le paso como parametro un espacio en blanco y el valor de la segunda variable, de esta manera la tercera variable contiene el valor tanto de 
          la primera variable y de la segunda variable , por ultimo muestro en consola"


    b) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length).
        "Dificultad: facil - Comentario: Creo 3 variables, las cuales 2 de ellas guardan una cadena como predeterminado, a la tercera variable le asigno la suma de las cantidades de 
        caracteres que tiene tanto la primera y segunda variable, para esto utilizo la propiedad lenght, por ultimo muestro en consola".

2. Strings

    a) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
        "Dificultad: facil - Comentario: Creo 2 variables, la primera variable contiene un valor predeterminado, en la segunda variable le asigno el valor de la primera variable pero solo
        los primeros 5 caracteres, para esto utilizo la funcion substring pasando como parametro los indices (0,5) 0 indica el primer caracter y 5 indica el 6 caracter de la cadena pero como en este ultimo el caracter no se incluye, la palabra extraeria los caracteres que hay entre los indices 0 y 4 , por ultimo muestro en consola"

    b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
        "Dificultad: facil - Comentario: Creo 2 variables las cuales la primer variable contiene una cadena predeterminado, a la segunda variable le asigno el valor de la primera variable
        pero utilizando primero la funcion substring(0,1) para extraer el primer caracter de la cadena, a este le agrego la funcion toUpperCase() para convertir esa primera letra en 
        mayuscula, a esto le concateno los caracteres restantes de la cadena utilizando primero la función substring(1) osea los caracteres a partir del indice 1 de la cadena, luego le
        aplico la funcion toLowerCase() para poner esos caracteres restantes en minusculas, por si llegara a venir una letra mayuscula que no sea la primera, por ultimo muestro en consola".

    c) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
        "Dificultad: facil - Comentario: Creo 2 variables la primera contiene una cadena predeterminada, en la segunda variable le asigno el indice donde se encuentre el primer espacio en
        blanco, para esto utilizo la funcion indexOf() de la primera variable, y como parametro le paso comillas vacias para indicar que quiero saber el indice de un expacio en blanco, por
        ultimo muestro por consola"

3. Arrays

    a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11.
        "Dificultad: facil - Comentario: Creo una array que contiene una lista de meses, por consola muestro los meses 5 y 11 (mayo y noviembre), para esto dentro del console.log() pongo
        array[4] para indicar que quiero el elemento en el indica 4 (mayo) y array[10] para indicar que quiero el elemento  en el indice 10 (noviembre)"
    b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

    c) Agregar un elemento al principio y al final del array (utilizar unshift y push).

    d) Quitar un elemento del principio y del final del array (utilizar shift y pop).

    e) Invertir el orden del array (utilizar reverse).

    f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

    g)Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
