import express, { json } from 'express';
import { getRouter } from './routes';
import { errorHandler } from './middlewares/error-handler';

const app = express();

app.use(json());
app.use(getRouter());
app.use(errorHandler);

const start = async () => {
  const PORT  = process.env.PORT || 5000;
  await app.listen(PORT, () => {
    console.log('Server started on port 5000');
  });
};

start();
