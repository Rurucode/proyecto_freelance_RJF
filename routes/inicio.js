const vistasBasicas = require('../controllers/inicio');
const routes = require('express').Router();

// -------- Rutas para la vistas básicas del CLIENTE -----------

routes.get('/', vistasBasicas.inicio);
routes.get('/login', vistasBasicas.login);
routes.get('/register', vistasBasicas.signin);
routes.get('/profile', vistasBasicas.profile)
routes.get('/favorites', vistasBasicas.favorites)

// ----------- Rutas para las vistas del ADMIN --------------

routes.get('/users', vistasBasicas.users)
routes.get('/dashboard', vistasBasicas.dashboard)

module.exports = routes;