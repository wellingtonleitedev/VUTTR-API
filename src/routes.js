import express from 'express';
import ToolController from './app/controllers/ToolController';

const routes = express.Router();

routes.get('/tools', ToolController.index);
routes.post('/tools', ToolController.store);
routes.delete('/tools/:id', ToolController.destroy);

export default routes;
