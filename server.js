import config from './config';
import express from 'express';
import indexRouter from './controller/index';
import bodyParser from 'body-parser';

const server = express();
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

server.use('/api', indexRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
  console.info('Express listening on port ', config.port);
});
