import express from 'express';
import ToolController from './app/controllers/ToolController';
import UserController from './app/controllers/UserController';

const routes = express.Router();

routes.post('/users', UserController.store);
routes.get('/tools', ToolController.index);
routes.post('/tools', ToolController.store);
routes.delete('/tools/:id', ToolController.destroy);

export default routes;
