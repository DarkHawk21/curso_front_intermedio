/* CALCULADORA */
// FUNCIONES DE OPERACIONES
function suma(numero1, numero2) {
    return numero1 + numero2;
}

function resta(numero1, numero2) {
    return numero1 - numero2;
}

function division(numero1, numero2) {
    if (numero2 === 0) {
        return 'El valor dos es cero';
    } else {
        return numero1 / numero2;
    }
}

function multiplicacion(numero1, numero2) {
    return numero1 * numero2;
}

// NODOS DEL DOM
// Numeros
var n0 = document.getElementById('n0');
var n1 = document.getElementById('n1');
var n2 = document.getElementById('n2');
var n3 = document.getElementById('n3');
var n4 = document.getElementById('n4');
var n5 = document.getElementById('n5');
var n6 = document.getElementById('n6');
var n7 = document.getElementById('n7');
var n8 = document.getElementById('n8');
var n9 = document.getElementById('n9');

// Operadores
var opIgual = document.getElementById('opIgual');
var opDivision = document.getElementById('opDivision');
var opMultiplicacion = document.getElementById('opMultiplicacion');
var opResta = document.getElementById('opResta');
var opSuma = document.getElementById('opSuma');
var opClear = document.getElementById('opClear');

// Pantalla de resultados
var contResultados = document.getElementById('resultado-container');

// EVENTOS
var numeroUsuario1 = null;
var numeroUsuario2 = null;
var operacion = null;

// Eventos de los números
n0.addEventListener('click', function() {
    if (numeroUsuario1) {
        numeroUsuario2 = 0;
    } else {
        numeroUsuario1 = 0;
    }
});

n1.addEventListener('click', function() {
    if (numeroUsuario1) {
        numeroUsuario2 = 1;
    } else {
        numeroUsuario1 = 1;
    }
});

n2.addEventListener('click', function() {
    if (numeroUsuario1) {
        numeroUsuario2 = 2;
    } else {
        numeroUsuario1 = 2;
    }
});

n3.addEventListener('click', function() {
    if (numeroUsuario1) {
        numeroUsuario2 = 3;
    } else {
        numeroUsuario1 = 3;
    }
});

n4.addEventListener('click', function() {
    if (numeroUsuario1) {
        numeroUsuario2 = 4;
    } else {
        numeroUsuario1 = 4;
    }
});

n5.addEventListener('click', function() {
    if (numeroUsuario1) {
        numeroUsuario2 = 5;
    } else {
        numeroUsuario1 = 5;
    }
});

n6.addEventListener('click', function() {
    if (numeroUsuario1) {
        numeroUsuario2 = 6;
    } else {
        numeroUsuario1 = 6;
    }
});

n7.addEventListener('click', function() {
    if (numeroUsuario1) {
        numeroUsuario2 = 7;
    } else {
        numeroUsuario1 = 7;
    }
});

n8.addEventListener('click', function() {
    if (numeroUsuario1) {
        numeroUsuario2 = 8;
    } else {
        numeroUsuario1 = 8;
    }
});

n9.addEventListener('click', function() {
    if (numeroUsuario1) {
        numeroUsuario2 = 9;
    } else {
        numeroUsuario1 = 9;
    }
});

// Eventos de los operadores
opSuma.addEventListener('click', function() {
    if (numeroUsuario1 && numeroUsuario2)  {
        operacion = 'suma';
    } else {
        alert("Introduzca sus dos números");
    }
});

opResta.addEventListener('click', function() {
    if (numeroUsuario1 && numeroUsuario2)  {
        operacion = 'resta';
    } else {
        alert("Introduzca sus dos números");
    }
});

opMultiplicacion.addEventListener('click', function() {
    if (numeroUsuario1 && numeroUsuario2)  {
        operacion = 'multiplicacion';
    } else {
        alert("Introduzca sus dos números");
    }
});

opDivision.addEventListener('click', function() {
    if (numeroUsuario1 && numeroUsuario2)  {
        operacion = 'division';
    } else {
        alert("Introduzca sus dos números");
    }
});

opIgual.addEventListener('click', function() {
    if (numeroUsuario1 && numeroUsuario2) {
        if (operacion) {
            switch(operacion) {
                case 'suma':
                    var resultado = suma(numeroUsuario1, numeroUsuario2);
                    break;
                case 'resta':
                    var resultado = resta(numeroUsuario1, numeroUsuario2);
                    break;
                case 'multiplicacion':
                    var resultado = multiplicacion(numeroUsuario1, numeroUsuario2);
                    break;
                case 'division':
                    var resultado = division(numeroUsuario1, numeroUsuario2);
                    break;
                default:
                    var resultado = 'Error';
            }

            contResultados.innerText = resultado;
        } else {
            alert("Seleccione una operación a realizar");
        }
    } else {
        alert("Introduzca sus dos números");
    }
});

opClear.addEventListener('click', function() {
    numeroUsuario1 = null;
    numeroUsuario2 = null;
    operacion = null;
    contResultados.innerText = 0;
});