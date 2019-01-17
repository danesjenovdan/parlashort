const mongoose = require('mongoose');
const config = require('../config');

exports.connect = ()=>{

  return new Promise((resolve, reject)=>{

    mongoose.connect(config.MONGO_URL);

    mongoose.connection.on('error', (err)=>{

      console.log('Mongo error: ', err);
      reject(err);

    });

    mongoose.connection.once('open', ()=>{

      resolve();

    });

  });

};
