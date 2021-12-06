const vistasBasicas = require('../controllers/inicio');
const routes = require('express').Router();
const exportFunctions = require('../controllers/controllerApi');
const controllerFunctions = require('../controllers/controllerApi');
const jsonwebtoken = require('../controllers/jwt')

// -------- Rutas para la vistas básicas del CLIENTE -----------

routes.get('/', vistasBasicas.home_guess);
routes.get('/login', vistasBasicas.log_in);
routes.get('/signup', vistasBasicas.sign_up);
routes.get('/profile', jsonwebtoken.authorization, vistasBasicas.profile);
routes.get('/favorites', vistasBasicas.favorites_user);
routes.get('/logout', jsonwebtoken.logout);
routes.get('/home_login', vistasBasicas.home_login)

// routes.get("/protected", jsonwebtoken.authorization ,jsonwebtoken.protected);
  




// routes.get('/prueba', prueba.prueba);

// ----------- Rutas para las vistas del ADMIN --------------

routes.get('/users', vistasBasicas.users)


// ----------- Rutas Post usuario --------------
routes.post('/signup', controllerFunctions.createUser)
routes.post('/login', controllerFunctions.login, vistasBasicas.home_login)

module.exports = routes;