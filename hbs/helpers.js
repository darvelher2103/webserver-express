const hbs = require('hbs');

//helpers que nos permiten realizar otras funciones en las vistas donde se carguen
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

//helper que nos convierte texto en mayuscula
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' '); //ELiminamos los espacios..
    palabras.forEach((palabra, idx) => { //recorremos el array y convertimos el esto
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});