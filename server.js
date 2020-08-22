const express = require('express')
const app = express()
const hbs = require('hbs');

const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})

app.get('/', function(req, res) {
    res.render('home.hbs', {
        nombre: 'Richard',
        anio: new Date().getFullYear()
    })
});

app.get('/about', function(req, res) {
    res.render('about', {
        title: 'Acerca de...'
    })
})

app.listen(port, () => {
    console.log(`Escuchando desde el puerto ${port}`);
})