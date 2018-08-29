const express = require('express');
const app = express(); //utiliza internamente el module http
const hbs = require('hbs');
//helpers
require('./hbs/helpers');

//Esperando entrega del puerto por HEROKU
const port = process.env.PORT || 3000

//instruccion que se ejecuta sin importar la url middleword
//carpeta publica (Posemos servir cualquier cantidad de archivos)
app.use(express.static(__dirname + '/public'));

//Express HBS engine 
hbs.registerPartials(__dirname + '/views/parciales'); //registramos los parciales
app.set('view engine', 'hbs');

//servicio
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Darwin'
    });
    //res.send('Hola Mundo')
    /*let salida = {
        nombre: 'Darwin',
        edad: 30,
        url: req.url
    }*/
    //formato JSON 
    //res.send(salida);
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})