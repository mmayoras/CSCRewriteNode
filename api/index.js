import express from 'express';
import data from '../src/testData';

const router = express.Router();

router.get('/consumerApplications', (req, res) => {
  res.send({ consumerApplications: data.consumerApplications });
});

router.get('/commercialApplications', (req, res) => {
  res.send({ commercialApplications: data.commercialApplications });
});

export default router;
