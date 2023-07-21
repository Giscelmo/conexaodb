const Sequelize = require('sequelize');
const dbConfig = require('../config/config.js');

const userCategory = require('../models/userCategoryModel.js');

const connection = new Sequelize(dbConfig);

userCategory.init(connection);

module.exports = connection