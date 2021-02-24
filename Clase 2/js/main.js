// Ejercicios de lógica de programación con JS
// 1.- var valor = 10 == (10 * 100);
// Texto: ¿La variable valor es falso o verdadero cuando 10 es igual a la multiplicación de 10 * 100?
// Output: FALSE

// 2.- var valor = "enrique" != "Enrique";
// Texto: ¿La variable valor, es falso o verdadero cuando "enrique" es diferente de "Enrique"?
// Output: TRUE

// 3.- var estrella = "Estrella 100" === 'Estrella 100';
// 1 kilo de manzanas == 1 kilo de peras -> TRUE
// 1 kilo de manzanas === 1 kilo de peras -> FALSE
// Texto: ¿La variable estrella va a ser falsa o verdadera cuando "Estrella 100" sea igual tanto en contenido como en tipo de dato que 'Estrella 100'?
// Output: TRUE

// 4.- var logaritmo = 145.23 == true;
// Texto: ¿La variable logaritmo es false o true cuando 145.23 es igual en contenido que true?
// Output: FALSE

// 5.- var valor = true == false;
// Texto: ¿La variable valor es true o false cuando true es igual en contenido a false?
// Output: FALSE

// 6.- var valor = false = true;
// Texto: ¿La variable valor es true o false cuando true es asignado a false?
// Output: invalid assignment

// 7.-
//                    FALSE             TRUE
// var valor = '10.24' !== "10.24" || 10 == 10;

// La tabla de verdad para || (OR)
// F T - T
// T F - T
// T T - T
// F F - F

// La tabla de verdad para && (Y)
// F T - F
// T F - F
// T T - T
// F F - F

// BaseUsario = 'ENRIQUE'
// BasePassword = 'Pass1234'
// InputUsuario == BaseUsario && InputPassword == BasePassword

// Texto: ¿La variable valor es true o false cuando 10.24 es diferente de "10.24" o, 10 es igual en contenido que 10?
// Output: TRUE

// 8.- var 10 = 150.25 != true;
// Texto: ¿La variable 10 es false o true cuando 150.25 es diferente en contenido que true?
// Output: missing variable name

// 9.- 
//           TRUE           TRUE
// var valor = 150 && 'probando' != 1.05;

// 150 && - TRUE
// 'probando' != 1.05 - TRUE

// Texto: ¿La variable valor es false o true cuando 150 y 'probando' son diferentes de 1.05 en contenido?
// Output: TRUE

// 10.-
//                             FALSE                         TRUE
// var valor = (10 * 5) + 'Resultado' == 'Resultado' || (10.10 / 0.10);
// var valor = (10 * 5); 50
// var valor = (10 * 5) + 'Resultado'; "50Resultado"
// var valor = (10 * 5) + 'Resultado' == 'Resultado'; false
// var valor = (10 * 5) + 'Resultado' == 'Resultado' || (10.10 / 0.10);

// (10 * 5) + 'Resultado' == 'Resultado' -> 
// 50 + 'Resultado' == 'Resultado' ->
// 50 + true || 101 ->
// 50 + true || true
// 50 + true ->
// 50 + 1 -> 51

// (10.10 / 0.10) -> 
// 101 -> TRUE

// Texto: ¿La variable valor es false o true, cuando (10 por 5) más 'Resultado' es igual en contenido que 'Resultado' o (10.10 entre 0.10)?
// Output: