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

router.get('/consumerApplications', (req, res) => {
  let consumerApps = [];

  mdb.collection('consumer').find({})
    .each((err, consumerApp) => {
      assert.equal(null, err);
      debugger;

      if (!consumerApp) {
        res.send(consumerApps);
        return;
      }

      consumerApps.push(consumerApp);
    });
});

router.get('/commercialApplications', (req, res) => {
  let commercialApps = [];

  mdb.collection('commercial').find({})
    .each((err, commercialApp) => {
      assert.equal(null, err);
      debugger;

      if (!commercialApp) {
        res.send(commercialApps);
        return;
      }

      commercialApps.push(commercialApp);
    });
});

export default router;
