import express from 'express';
import ToolController from './app/controllers/ToolController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = express.Router();

routes.post('/signup', UserController.store);
routes.post('/signin', SessionController.store);

routes.get('/tools', ToolController.index);
routes.post('/tools', ToolController.store);
routes.delete('/tools/:id', ToolController.destroy);

export default routes;
