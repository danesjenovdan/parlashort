const config  = require('./config');
const server  = require('./server');
const router  = require('./router');
const mongoose = require('mongoose');
const mongoDb  = require('./config/mongo');

mongoDb.connect()
  .then(()=>{
    require('./models');
  })
  .then(server.start)
  .then(router.start)
  .then(()=>{

    const AppData = mongoose.model('AppData');

    AppData.findOne({id:'main'})
      .then((doc)=>{

        if(!doc){

          const appData = new AppData();
          appData.save();

        }

      });

  })
  .then(()=>{

    console.log('Server running on port: ', config.PORT);

  })
  .catch((err) => {

    console.log(err);

  });