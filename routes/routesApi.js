const funcionesApi = require('../controllers/controllerApi');
const routes = require('express').Router();


// -------- Rutas para la vistas básicas del CLIENTE -----------

routes.post('/user', funcionesApi.recogerOfertas);
routes.put('/user', funcionesApi.recogerOfertas);
routes.delete('/user', funcionesApi.recogerOfertas);
routes.post('/login', funcionesApi.recogerOfertas);
routes.post('/logout', funcionesApi.recogerOfertas);
routes.get('/search', funcionesApi.recogerOfertas);
routes.post('/favorites', funcionesApi.recogerOfertas);
routes.delete('/favorites', funcionesApi.recogerOfertas);


// ----------- Rutas para las vistas del ADMIN --------------

routes.post('/ads', funcionesApi.recogerOfertas);
routes.put('/ads', funcionesApi.recogerOfertas);
routes.delete('/ads', funcionesApi.recogerOfertas);




module.exports = routes;