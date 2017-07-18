import config, { nodeEnv } from './config';
import express from 'express';
import apiRouter from './api';

const server = express();

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
    console.info('Express listening on port ', config.port);
});
