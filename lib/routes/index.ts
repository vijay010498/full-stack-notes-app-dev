import express from 'express';
import { NotesAppController } from '../controllers/notes-app-controller';

const router = express.Router();

function getRouter() {
  router.get('/health', NotesAppController.health);

  return router;
}

export {
  getRouter
};
