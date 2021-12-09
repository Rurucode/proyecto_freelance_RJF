const vistasBasicas = require('../controllers/inicio');
const routes = require('express').Router();
const controllerFunctions = require('../controllers/controllerApi');
const jsonwebtoken = require('../controllers/jwt')
const passport = require('passport');
require('../middlewares/google-auth')

// -------- Rutas para la vistas básicas del CLIENTE -----------

routes.get('/', vistasBasicas.home_guess);
routes.get('/login', vistasBasicas.log_in);
routes.get('/signup', vistasBasicas.sign_up);
routes.get('/profile', jsonwebtoken.authorization, controllerFunctions.pintarUsuario);
routes.get('/favorites', jsonwebtoken.authorization, vistasBasicas.favorites_user);
routes.get('/logout', jsonwebtoken.logout);
routes.get('/home_login', jsonwebtoken.authorization, vistasBasicas.home_login)

// routes.get("/protected", jsonwebtoken.authorization ,jsonwebtoken.protected);
  

// ----------- Rutas para las vistas del ADMIN --------------
routes.get('/home_admin', jsonwebtoken.authorization, vistasBasicas.home_admin)
routes.get('/users', vistasBasicas.users); // Vista del administrador con el listado de usuario registrados (admin)
routes.get('/dashboard_admin', vistasBasicas.dashboard); // Vista del administrador para crear y visualizar sus anuncios (admin)
// ----------- Rutas Post ADMIN --------------
routes.post('/dashboard', controllerFunctions.crearOferta);

// ----------- Rutas Post usuario --------------
routes.post('/signup', controllerFunctions.createUser)
routes.post('/login', controllerFunctions.login)
routes.post('/profile', controllerFunctions.editarUsuario)

// ----------- Rutas Api -----------------
routes.get('/search', controllerFunctions.recogerOfertas); // Listado de resultados de la busqueda
routes.get('/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    }))

routes.get('/google/callback', jsonwebtoken.authorization,
    passport.authenticate('google', {
        failureRedirect: '/login'
    }),
    function (req, res) {
        if (req.user.user_id) {
            generateToken(res, req.user.user_id, req.user.email)
        }
        res.redirect('/home_login');
    });

routes.get('/favorites', controllerFunctions.favoritos)

module.exports = routes;