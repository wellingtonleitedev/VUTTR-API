import { Router } from 'express';

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';

import ToolController from './app/controllers/ToolController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

routes.post('/signup', UserController.store);
routes.post('/signin', SessionController.store);

routes.use(authMiddleware);

routes.get('/tools', ToolController.index);
routes.post('/tools', ToolController.store);
routes.put('/tools/:id', ToolController.update);
routes.delete('/tools/:id', ToolController.destroy);

export default routes;
