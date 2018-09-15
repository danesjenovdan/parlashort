const mongoose = require('mongoose');

const Schema = new mongoose.Schema({

  count: { type:Number, default:0 },
  id: { type:String, default:'main' }

});

module.exports = mongoose.model('AppData', Schema);