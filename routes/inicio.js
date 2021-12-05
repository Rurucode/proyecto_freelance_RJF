const vistasBasicas = require('../controllers/inicio');
const routes = require('express').Router();


// -------- Rutas para la vistas básicas del CLIENTE -----------

routes.get('/', vistasBasicas.inicio); // Vista inicio de app
routes.get('/signup', vistasBasicas.signup); //  Vista del registro de usuario
routes.get('/login', vistasBasicas.login); // Vista de ingreso de usuario ya registrado
routes.get('/favorites', vistasBasicas.favorites); // Vista del usuario con sus favoritos
routes.get('/profile', vistasBasicas.profile); // Vista del usuario o el administrador con sus datos de perfil


// ----------- Rutas para las vistas del ADMIN --------------

routes.get('/users', vistasBasicas.users); // Vista del administrador con el listado de usuario registrados (admin)
routes.get('/dashboard', vistasBasicas.users); // Vista del administrador para crear y visualizar sus anuncios (admin)





module.exports = routes;