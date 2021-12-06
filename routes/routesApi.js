const funcionesApi = require('../controllers/controllerApi');
const routes = require('express').Router();


// -------- Rutas para la vistas básicas del CLIENTE -----------

routes.post('/signup', funcionesApi.createUser); // Registrarse en la aplicacion
routes.get('/signup', funcionesApi.createUser); 
routes.put('/signup', funcionesApi.recogerOfertas); // Edita datos del perfil del usuario o admin
routes.post('/login', funcionesApi.recogerOfertas); // Hacer login en la app
routes.post('/logout', funcionesApi.recogerOfertas); // Salir
routes.get('/search', funcionesApi.recogerOfertas); // Listado de resultados de la busqueda
routes.post('/favorites', funcionesApi.recogerOfertas); // Guarda favorito del usuario
routes.delete('/favorites', funcionesApi.recogerOfertas); // Borra favorito del usuario


// ----------- Rutas para las vistas del ADMIN --------------

routes.post('/ads', funcionesApi.recogerOfertas); // Crear una oferta de trabajo
routes.put('/ads', funcionesApi.recogerOfertas); // Editar datos de una oferta de trabajo
routes.delete('/ads', funcionesApi.recogerOfertas); // Borrar una oferta de trabajo
routes.delete('/user', funcionesApi.recogerOfertas);  // Borra a un usuario de la base de datos (admin)




module.exports = routes;