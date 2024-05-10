import { barcelona, roma, paris, londres } from './ciudades.js'

//obtener los elementos del DOM
let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subTituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');
let precioElemento = document.getElementById('precio');
//agregar un evento click a cada enlace
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        //remover la clase active de todos los enlaces
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });

        //agregar la clase active al enlace actual
        this.classList.add('active');

        //traer el contenido correspondiente segun el enlace
        let contenido = obtenerContenido(this.textContent);
        tituloElemento.innerHTML = contenido.titulo;
        subTituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
        precioElemento.innerHTML = contenido.precio;
    });
});

//FUNCION PARA TRAER LA INFORMACION CORRECTA DESDE CIUDADES.JS
function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}
