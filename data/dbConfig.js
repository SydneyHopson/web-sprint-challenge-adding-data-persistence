// No need to change this file
const knex = require('knex');
const configurations = require('../knexfile');
const environment = process.env.NODE_ENV || 'development';

module.exports = knex(configurations[environment]);
