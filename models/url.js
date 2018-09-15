const mongoose = require('mongoose');

const Schema = new mongoose.Schema({

  targetUrl : String,
  shortId   : String,
  dateTime  : { type:Date, default:Date.now },
  shortUrl  : String

});

module.exports = mongoose.model('Url', Schema);