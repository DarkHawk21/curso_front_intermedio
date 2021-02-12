// Tipos de datos dentro del lenguaje
// JAVA
// Enteros - int - 10
// Flotantes - float - 10.23
// Caracteres - char - 'C'
// Strings - string - "Hola mundo!"
// bloeanos - boolean - true / false
// int valor_entero = 10;
// float valor_flotante = 23.2;

// Java script
// var valor_cualquiera = 10;

// Variables
// Definición: Es espacio en memoria que almacena datos. Pueden cambiar de contenido a lo largo del tiempo.

// Creando una variable
// var valor;

// Asignando una variable
// valor = 10;

// Modificando su valor
// valor = 15;

// Crear y asignar una variable
// var valor_2 = 16;

// Definir muchas el mismo tiempo
// var valor_1, valor_3, valor_4, valor_5;

// Definir y asignar muchas variables al mismo tiempo
// var valorx = 10,
// 	valory = 12,
// 	valorx = 20;

// Estructura de una variable
{/* <Palabra reservada var> <Nombre de la variable> = <valor de la variable>; */}

// Reglas para crear variables
// 1. Nunca se comienza con una mayúscula en el nombre.
// var Hola = 10;

// 2. Nunca se comienza con números o caracteres especiales en el nombre.
// var 1_variable = 10;
// var %_porcentaje = 100;

// 3. Nunca debemos escribir con espacios los nombres de las variables.
// var porcentaje alumnos = 100;

// 4. Nunca utilizar guiones intermedios en el nombre.
// var hola-mundo = "Hola mundo";

// Alternativas - Usar CamelCase
// var porcentajeAlumnos = 100;
// Alternativas - Usar guión bajo
// var porcentaje_alumnos = 100;

// 5. Nunca llamar a las variables como alguna reservada por el lenguaje.
// var var = "variable";

// 6. Las variables deben tener un nombre alusivo al tipo de dato y de información que va a almacenar.
// var numeroDePanditas = 10;
// var floatVelocidadDelCarro = 20.52;

// Cómo comunicarse con el navegador e imprimir mensajes en pantalla;
// Por medio de la consola:
// console.log("Este es un mensaje en consola.");

// Por medio del DOM:
// document.write("Este es un mensaje en el documento.");

// Por medio de alertas:
// alert("Este es un mensaje en una alerta.");

// OPERADORES EN JAVASCRIPT
// Son aquellos símbolos que nos permiten realizar acciones con los elementos de nuestro codigo al programar.
// Asinación
// 1. =
// var numero = 120;

// Operaciones aritméticas
// 1. + - Suma
// var suma = 10 + 11;
// Salida: 21

// 2. - - Resta
// var resta = 20 - 15;
// Salida: 5

// 3. * - Multiplicacion
// var multiplicacion = 10 * 15;
// Salida: 150

// 4. / - División
// var division = 100 / 10;
// Salida: 10

// 5. % - Residuo
// var residuo = 12 % 5;
// Salida: 2

// Agrupacion
// 1. ()
// var minutosDelAño = ((365 / ((12 * 30) + 24)) % 60) + 10;

// Comparación u operadores lógicos
// 1. == - Comparar dos valores
// 10 == 10 - TRUE
// 10 == 10.56 - FALSE
// 10 == '10' - TRUE
// 10 == "10" - TRUE
// Salida: true / false

// 2. || - Operador OR
// 10 || 10 - TRUE
//    FALSE                FALSE
// 10 == '11' || 'Enrique' == 'Aron' - FALSE
// Salida: true / false

// 3. != - Operador diferente de
// 10 != 11 - TRUE
// 10 != 10 - FALSE
// Salida: true / false

// 4. && - Operador AND
// 10 && 10 - TRUE
//    TRUE		   FALSE
// 10 == 10 && 11 == 15 - FALSE
// Salida: true / false

// 5. === - Comparar dos valores por su tipo de dato y valor a que sean iguales
// 10 === "10" - FALSE
// 10 === '10' - FALSE
// 10 === 10 - TRUE
// 10 === 11 - FALSE
// Salida: true / false

// 6. !== - Compara dos valores por su tipo de dato y valor a que sean diferentes
// 10 !== '10' - TRUE
// 10 !== 10 - FALSE
// Salida: true / false