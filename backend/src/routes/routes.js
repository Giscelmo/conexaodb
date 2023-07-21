const express = require('express');
const userController = require('../controllers/userController');

const routes = express.Router();

routes.post('/userCategory', userController.store);

module.exports = routes;