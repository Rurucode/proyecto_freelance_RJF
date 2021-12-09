const vistasBasicas = require('../controllers/inicio');
const routes = require('express').Router();
const controllerFunctions = require('../controllers/controllerApi');
const jsonwebtoken = require('../controllers/jwt')

// -------- Rutas para la vistas básicas del CLIENTE -----------

routes.get('/', vistasBasicas.home_guess);
routes.get('/login', vistasBasicas.log_in);
routes.get('/signup', vistasBasicas.sign_up);
routes.get('/profile', jsonwebtoken.authorization, vistasBasicas.profile);
routes.get('/favorites', jsonwebtoken.authorization, vistasBasicas.favorites_user);
routes.get('/logout', jsonwebtoken.logout);
routes.get('/home_login', jsonwebtoken.authorization, vistasBasicas.home_login)

// routes.get("/protected", jsonwebtoken.authorization ,jsonwebtoken.protected);
  

// ----------- Rutas para las vistas del ADMIN --------------
routes.get('/home_admin', jsonwebtoken.authorization, vistasBasicas.home_admin)
routes.get('/users', vistasBasicas.users); // Vista del administrador con el listado de usuario registrados (admin)
routes.get('/dashboard', vistasBasicas.dashboard); // Vista del administrador para crear y visualizar sus anuncios (admin)
routes.post('/dashboard', controllerFunctions.crearOferta);
// ----------- Rutas Post usuario --------------
routes.post('/signup', controllerFunctions.createUser)
routes.post('/login', controllerFunctions.login)

// ----------- Rutas Api -----------------
routes.get('/search', controllerFunctions.recogerOfertas); // Listado de resultados de la busqueda

module.exports = routes;