const express = require('express');
const app = express();
const config = require('./config');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

exports.start = () => {

  return new Promise((resolve, reject)=>{

    app.listen(config.PORT, ()=>{

      resolve(app);

    });

  });

};