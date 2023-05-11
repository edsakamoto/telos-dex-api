const {Router} = require('express');

const trainersController = require('../controllers/trainers.controller');

const routes = Router();

routes.get('/trainers',trainersController.list);
routes.get('/trainers/:id',trainersController.getById);
routes.post('/trainers',trainersController.create);
routes.put('/trainers/:id',trainersController.update);
routes.delete('/trainers/:id',trainersController.remove);

module.exports = routes;