import express from 'express';
import MongoClient from 'mongodb';
import assert from 'assert';
import config from '../config';

const router = express.Router();
let mdb;

MongoClient.connect(config.mongodbUrl, (err, db) => {
  assert.equal(null, err);

  mdb = db;
});

// middleware to use for all requests
router.use(function(req, res, next) {
  // do logging
  console.log('REQUEST TYPE: ' + req.method);
  next(); // make sure we go to the next routes and don't stop here
});

router.route('/consumerApplications').get((req, res) => {
  let consumerApps = [];

  mdb.collection('consumer').find({}).each((err, consumerApp) => {
    assert.equal(null, err);

    if (!consumerApp) {
      console.log(JSON.stringify(consumerApps));
      res.send(consumerApps);
      return;
    }

    consumerApps.push(consumerApp);
  });
}).post((req, res) => {
  mdb.collection('consumer').save(req.body, (err, result) => {
    if (err) {
      return console.log(err);
    }

    console.log('Successfully saved to database');
    res.send(req.body);
  });
});

router.route('/deleteconsumer/:_id').delete((req, res) => {
  let paramInt = parseInt(req.params._id);
  console.log(paramInt);

  let myQuery = { id: paramInt};
  console.log(myQuery);

  mdb.collection('consumer').deleteOne(myQuery, function(err, result) {
    let message = (result ===1) ? { msg: 'Deleted' } : { msg: 'error: ' + err };

    console.log(message);

    res.send(message);
  });
});

router.route('/commercialApplications').get((req, res) => {
  let commercialApps = [];

  mdb.collection('commercial').find({}).each((err, commercialApp) => {
    assert.equal(null, err);

    if (!commercialApp) {
      res.send(commercialApps);
      return;
    }

    commercialApps.push(commercialApp);
  });
}).post((req, res) => {
  mdb.collection('commercial').save(req.body, (err, result) => {
    if (err) {
      return console.log(err);
    }

    console.log('Successfully saved to database');
    res.send(req.body);
  });
});

export default router;
