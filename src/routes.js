import { Router } from 'express';

import ToolController from './app/controllers/ToolController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/signup', UserController.store);
routes.post('/signin', SessionController.store);

routes.use(authMiddleware);

routes.get('/tools', ToolController.index);
routes.post('/tools', ToolController.store);
routes.put('/tools/:id', ToolController.update);
routes.delete('/tools/:id', ToolController.destroy);

export default routes;
