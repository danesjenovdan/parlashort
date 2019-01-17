const config    = require('./config');
const mongoose  = require('mongoose');
const ShortURL  = require('./classes/ShortURL');

exports.start = (app) => {

  app.get('/shortener/generate', (req, res) => {

    const targetUrl = req.query.url;

    if(!targetUrl){
      return res.status(404).send('Missing targetUrl query parameter');
    }

    const AppData = mongoose.model('AppData');
    const Url     = mongoose.model('Url');

    AppData.findOne({id:'main'})
      .then((appDataDoc)=>{

        return Url.findOne({targetUrl})
          .then((urlDoc)=>{

            if(urlDoc){
              res.send(urlDoc.shortUrl);
              return null;
            }else{
              return appDataDoc;
            }

          });

      })
      .then((appDataDoc)=>{

        let count = appDataDoc.count + 1;

        const shortId = ShortURL.encode(count);

        const url = new Url({

          shortId,
          targetUrl,
          shortUrl:config.SHORT_URL+'/'+shortId

        });

        appDataDoc.count = count;

        appDataDoc.save()
          .then(()=>{

            url.save()
              .then(()=>{

                console.log(url);

                res.send(url.shortUrl);

              });

          });

      });

  });

  app.get('/:shortId', (req, res) => {

    const Url = mongoose.model('Url');

    Url.findOne({
      shortId:req.params.shortId
    }).then((doc)=>{

      if(doc){
        res.redirect(doc.targetUrl);
      }else{
        res.status(404).send();
      }

    });

  });

};
