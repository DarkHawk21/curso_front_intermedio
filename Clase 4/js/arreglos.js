// Arreglos - Arrays
// Definición: Un arreglo es una colección de datos que pertenecen a una índole, es decir, que comparten características en común.
// Estructura:

// 1
// var <Nombre del arreglo> = [<Items del arreglo>];
// var nombres_propios = [
//     'Enrique', 
//     'Max', 
//     'Javier', 
//     'Ricardo', 
//     'Santi', 
//     'Jazmin',
// ];

// 2
// var <Nombre del arreglo> = new Array();
// var apellidos = new Array();
// apellidos.push('Carranza');
// apellidos.push('Balderas');
// apellidos.push('García');

// 3
// var <Nombre del arreglo> = [];
// var comida_mexicana = [];
// comida_mexicana.push('Pozole');
// comida_mexicana.push('Enchiladas verdes');
// comida_mexicana.push('Tacos');

// Los métodos de una arreglo.
// var numeros_enteros = new Array();
// var arreglo_nombres = ['Enrique', 'Alan', 'Javier', 'Berenice'];

// Añadir datos al final de un arreglo.
// numeros_enteros.push(1);
// numeros_enteros.push(5);
// numeros_enteros.push(48);
// numeros_enteros.push(15);
// numeros_enteros.push(22);
// numeros_enteros.push(18);
// numeros_enteros.push(91);

// Añadir datos al inicio de un arreglo.
// numeros_enteros.unshift(10);

// Eliminar del final de nuestro arreglo.
// numeros_enteros.pop();

// Eliminar de cualquier índice (posición) del arreglo.
// numeros_enteros.pop(3);

// Eliminar del inicio de nuestro arreglo.
// numeros_enteros.shift();

// Saber cuantos elementos tiene nuestro arreglo.
// var numero_elementos = numeros_enteros.length;
// console.log(numero_elementos);

// Saber la posición de un elemento dentro del arreglo.
// var posicion_de_18 = numeros_enteros.indexOf(18);
// console.log(posicion_de_18);

// Ordenar arreglo de números.
// numeros_enteros.reverse();

// Ordenar arreglo de cadenas / strings
// arreglo_nombres.sort();

// Imprimir en consola el arreglo.
// console.log(arreglo_nombres);
// console.log(numeros_enteros);

// Concatenación de arreglos.
// var nombres_mas_enteros = arreglo_nombres.concat(numeros_enteros);
// console.log(nombres_mas_enteros);

// var enteros_mas_nombres = numeros_enteros.concat(arreglo_nombres);
// console.log(enteros_mas_nombres);

// Convertir arreglo a cadena.
// var oracion_array = ['Hola', 'Mundo', 'cómo', 'están?'];
// var oracion_cadena = oracion_array.join();
// var oracion_cadena = oracion_array.join(' ');
// console.log(oracion_cadena);

// Convertir cadena a arreglo.
// var hora_cadena = "20:44:25";
// var hora_arreglo = hora_cadena.split();
// var hora_arreglo = hora_cadena.split(':');
// console.log(hora_arreglo);

// Acceder a un elemento dentro del arreglo.
// numeros_enteros[<Índice o posición a buscar>];
// var elemento_0 = numeros_enteros[0];
// console.log(elemento_0);
// var elemento_5 = numeros_enteros[5];
// console.log(elemento_5);

// Arreglos bidimensionales
// var arreglo_bidimensional = [
//     ['America', 'Mexico', 'Argentina'],
//     ['Europa', 'Italia', 'Alemania'],
//     ['Africa', 'Angola', 'Madagascar']
// ];

// Acceder a un elemento dentro de un arreglo bidimensional.
// var elemento_0_0 = arreglo_bidimensional[0][0];
// console.log(elemento_0_0);
// var elemento_angola = arreglo_bidimensional[2][1];
// console.log(elemento_angola);

// Añadir al final
// arreglo_bidimensional.push(['Asia', 'Rusia', 'India']);
// console.log(arreglo_bidimensional);

// Eliminar un país.
// arreglo_bidimensional[2].pop();
// console.log(arreglo_bidimensional);

// Recorrer un arreglo
// var abecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
// console.log(abecedario[0]);
// console.log(abecedario[1]);
// console.log(abecedario[2]);
// console.log(abecedario[3]);
// console.log(abecedario[4]);
// console.log(abecedario[5]);
// console.log(abecedario[6]);
// console.log(abecedario[7]);
// console.log(abecedario[8]);

// Recorrer con sentencia FOR
// for (var posicion = 0; posicion < abecedario.length; posicion++) {
//     console.log(abecedario[posicion]);
// }

// Recorrer con sentencia ForEach
// abecedario.forEach(function(letra) {
//    console.log(letra); 
// });

// var dias_semana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
// dias_semana.forEach(function(dia) {
//     console.log(dia);
// });