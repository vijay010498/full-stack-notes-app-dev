import express, { json } from 'express';
import { getRouter } from './routes';

const app = express();

app.use(json());
app.use(getRouter());

const start = async () => {
  await app.listen(5000, () => {
    console.log('Server started on port 5000');
  });
};

start();
