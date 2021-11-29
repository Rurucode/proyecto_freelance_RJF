/****************** Dependencies ******************/
const express = require('express')
const rutasInicio = require('./routes/inicio')

/****************** Enable Express ******************/
const app = express()
const port = 3000

app.use(express.json()); //Para habilitar envio de JSON al servidor
app.use(express.static('public')); //Habilitar los archivos para que sean estaticos
app.use(express.urlencoded({ extended: false })); //Para solucionar el undefined en el form.

/****************** Enable Pug ******************/
app.set('view engine', 'pug');
app.set('views','./views');

/****************** Paths ******************/
app.use('/', rutasInicio);

//Capture All 404 errors
app.use( (req,res,next) => {
    res.status(404).render('error');
});

/****************** Actice Server ******************/
app.listen(port, () => {
    console.log(`ServerOn http://localhost:${port}`)
})
