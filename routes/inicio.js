const vistasBasicas = require('../controllers/inicio');
const routes = require('express').Router();
const exportFunctions = require('../controllers/controllerApi');
const controllerFunctions = require('../controllers/controllerApi');

// -------- Rutas para la vistas básicas del CLIENTE -----------

routes.get('/', vistasBasicas.inicio);
routes.get('/login', vistasBasicas.login);
routes.get('/signup', vistasBasicas.signup);
routes.get('/profile', vistasBasicas.profile);
routes.get('/favorites', vistasBasicas.favorites);
// routes.get('/prueba', prueba.prueba);

// ----------- Rutas para las vistas del ADMIN --------------

routes.get('/users', vistasBasicas.users)


// ----------- Rutas Post usuario --------------
routes.post('/signup', controllerFunctions.createUser)
routes.post('/login', controllerFunctions.login)

module.exports = routes;