'use strict';

var mongoose = require('mongoose');

var monsterSchema = mongoose.Schema({
    name: String,
    weapon: String,
    hp: String
});

module.exports = mongoose.model('Monster', monsterSchema);
