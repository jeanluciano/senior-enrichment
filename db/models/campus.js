'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('Campus',{
    name: Sequelize.STRING,
    image: Sequelize.STRING
})