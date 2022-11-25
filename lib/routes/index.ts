import express from 'express';
import { NotesAppController } from '../controllers/notes-app-controller';
import { NotFoundError } from '../errors';

const router = express.Router();

function getRouter() {
  router.get('/health', NotesAppController.health);
  router.post('/signup', NotesAppController.signUp);
  router.all('*', () => {
    throw new NotFoundError();
  });

  return router;
}

export {
  getRouter
};
