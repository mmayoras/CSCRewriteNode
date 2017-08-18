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

router.route('/consumerApplications').get((req, res) => {
  let consumerApps = [];

  mdb.collection('consumer').find({}).each((err, consumerApp) => {
    assert.equal(null, err);

    if (!consumerApp) {
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
  let uid = req.params._id.toString();

  mdb.collection('consumer').remove({"_id":uid}, function(err, result) {
    res.send( (result ===1) ? { msg: 'Deleted' } : { msg: 'error: ' + err });
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
