// OBTENER ELEMENTOS DE NUESTRO DOM
// Nos va a devolver una colección de HTML con todos los elementos que tengan la clase parrafo.
var elementos_parrafos = document.getElementsByClassName('parrafo');
// Nos va a devolver un elemento del DOM que tenga el ID h1.
var elemento_h1 = document.getElementById('h1');
// Nos va a devolver una colección de HTML con todos los elementos que tengan la etiqueta h3.
var elementos_h3 = document.getElementsByTagName('h3');


// CREAR ELEMENTOS DENTRO DEL DOM
// Mandar a llamar a la función createElement con el nombre del elemento a crear.
var nuevoH1 = document.createElement('h1');
// Crear el nodo o los nodos con texto para el elemento.
var textoH1 = document.createTextNode('h1 creado desde Java Script');
// Añadir el texto al elemento creado.
nuevoH1.appendChild(textoH1);


// INSERTAR ELEMENTOS DENTRO DEL DOM
// Obtener el elemento de referencia.
var elemento_h1_1 = document.getElementById('h1');
// Obtener el padre del elemento de referencia.
var padre = elemento_h1_1.parentNode;
// Insertar el nuevoH1 antes del elemento de referencia.
padre.insertBefore(nuevoH1, elemento_h1_1);
// Insertar el nuevoH1 después del elemento de referencia.
padre.appendChild(nuevoH1);


// AGREGAR ATRIBUTOS A MIS ELEMENTOS CREADOS
var nodo_parrafo_final = document.getElementById('parrafo_final');
nodo_parrafo_final.setAttribute('class', 'nodo_final');


// OBTENER ATRIBUTOS DE MIS ELEMENTOS CREADOS
var nodo_parrafo_final_1 = document.getElementById('parrafo_final');
var clase = nodo_parrafo_final_1.getAttribute('class');
console.log("Esta es la clase del elemento nodo final: " + clase);


// MODIFICAR LOS ESTILOS DE MIS ELEMENTOS DEL DOM
var h1 = document.getElementById('h1');
h1.style.background = 'green';
h1.style.fontFamily = 'Open sans';
h1.style.color = '#fff';
h1.style.textAlign = 'center';