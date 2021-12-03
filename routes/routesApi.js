const funcionesApi = require('../controllers/controllerApi');
const routes = require('express').Router();


routes.get('/search', funcionesApi.recogerOfertas);

module.exports = routes;