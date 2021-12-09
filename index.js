/****************** Dependencies ******************/
const express = require('express')
const session = require('express-session');
require('dotenv').config();
const rutasInicio = require('./routes/inicio')
const cookieParser = require("cookie-parser"); //Para las cookies
require('./middlewares/google-auth')
const passport = require('passport')
const helmet = require("helmet"); // Seguridad

/****************** Enable Express ******************/
const app = express()
const port = 3000

//Oauth
app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json()); //Para habilitar envio de JSON al servidor
app.use(express.static('public')); //Habilitar los archivos para que sean estaticos
app.use(express.urlencoded({ extended: false })); //Para solucionar el undefined en el form.
app.use(cookieParser()); // Para las cookies
app.use(helmet()); // Seguridad.
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

