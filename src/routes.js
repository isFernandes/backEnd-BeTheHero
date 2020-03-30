const express = require('express');

const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const routes = express.Router();
 
/**
  * Tipos de parametros:
  * 
  * Query: Parametros nomeados enviados na rota apos simbolo de "?"(Filtros, paginaçao)
  * Route: Parametros utilizados para identificar recursos
  * Body: Corpo da requisição, utilizado para alterar ou criar recursos
  * 
  */
routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);
module.exports = routes;