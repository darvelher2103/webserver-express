const express = require('express');
const app = express(); //utiliza internamente el module http
const hbs = require('hbs');

//helpers
require('./hbs/helpers');

//Esperando entrega del puerto por HEROKU
const port = process.env.PORT || 3000

//instruccion que se ejecuta sin importar la url middleware
//carpeta publica (Poddemos servir cualquier cantidad de archivos.. index.html)
app.use(express.static(__dirname + '/public')); //ruta donde se encuentran los archivos estaticos

//Express HBS engine 
hbs.registerPartials(__dirname + '/views/parciales'); //registramos los parciales para omitir las extensiones .html en las urls
app.set('view engine', 'hbs');

//servicios a los que el usuario tiene acceso en nuestra pagina web
app.get('/', (req, res) => { //Pagina de inicio
    res.render('home', {
        nombre: 'Darwin'
    });
});

app.get('/about', (req, res) => { //Pagina de about
    res.render('about');
});

app.listen(port, () => { //Metodo que me permite escuchar el puerto..
    console.log(`Escuchando peticiones en el puerto ${port}`);
});