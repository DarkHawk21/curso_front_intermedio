// Bucles o Ciclos o sentencias iterativas
// Definición: Son sentencias de código que se utilizan para realizar acciones de forma iterativa una n cantidad de veces siempre y cuando se cumpla una condición.
// Estructura de un bucle
// For - Es aquella estructura que repite las acciones dentro de su bloque.
// for (<contador>, <condición>, <acumulador>) {
//     Bloque de instrucciones a repetir
// }

// Ejercicio: Imprime en consola la tabla del 10
// console.log("1 x 10 = 10");
// console.log("2 x 10 = 20");
// console.log("3 x 10 = 30");
// console.log("4 x 10 = 40");
// console.log("5 x 10 = 50");
// console.log("6 x 10 = 60");
// console.log("7 x 10 = 70");
// console.log("8 x 10 = 80");
// console.log("9 x 10 = 90");
// console.log("10 x 10 = 100");

// Formas de aumentar el contador
// contador++;
// contador = contador + 10;
// contador += 2;
// for (var contador = 1; contador <= 10; contador += 1) {
//     console.log(contador + " x 10 = " + (contador * 10));
// }

// Empieza a leer estas líneas de codigo
// console.log("Terminó nuestro bloque for");

// While
// while(<condición a evaluar>) {
//     <Intrucciones a ejecutar si se cumple nuestra condición>
//     <acumulador>
// }

// var contador = 1;

// while(contador <= 10) {
//     console.log(contador + " x 10 = " + (contador * 10));
//     contador++;
// }

// Empieza a leer estas líneas de código
// console.log("Terminó nuestro bloque While");

// Do While
// do {
//     Bloques de instrucciones a ejecutar
//     <Acumulador>
// } while(<Condición>);

// Ejecuta por lo menos una vez
// var contador = 1;

// do {
//     console.log(contador + " x 10 = " + (contador * 10));

//     contador++;
// } while(contador <= 10);

// Continuamos con este código
// console.log("Terminó nuestro do while");


// Ejemplo con condiciones falsas
// for (var contador = 10; contador <= 9; contador++) {
//     console.log(contador + " x 10 = " + (contador * 10));
// }
// Output: 

// var contador = 10; 

// while(contador <= 9) {
//     console.log(contador + " x 10 = " + (contador * 10));
//     contador++;
// }
// Output:  

// var contador = 10;

// do {
//     console.log(contador + " x 10 = " + (contador * 10));
//     contador++;
// } while(contador <= 9);
// Output: 10 x 10 = 100

// Caso práctico del Do While
// var respuesta_del_usuario = true;

// while(respuesta_del_usuario == false) {
//     if (confirm("¿Quieres terminar el programa?")) {
//         respuesta_del_usuario = true;
//     }
// }

// do {
    // if (confirm("¿Quieres terminar el programa?")) {
        // respuesta_del_usuario = true;
    // }
// } while(respuesta_del_usuario == false);

// document.write("El usuario terminó");
