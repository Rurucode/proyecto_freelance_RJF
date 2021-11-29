const vistasBasicas = require('../controllers/inicio');
const routes = require('express').Router();
const prueba = require('../controllers/controllerApi');

// -------- Rutas para la vistas básicas del CLIENTE -----------

routes.get('/', vistasBasicas.inicio);
routes.get('/login', vistasBasicas.login);
routes.get('/register', vistasBasicas.signin);
routes.get('/profile', vistasBasicas.profile)
routes.get('/favorites', vistasBasicas.favorites)
routes.get('/prueba', prueba.prueba)

// ----------- Rutas para las vistas del ADMIN --------------

routes.get('/users', vistasBasicas.users)
routes.get('/dashboard', vistasBasicas.dashboard)

module.exports = routes;