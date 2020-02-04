import express from 'express';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import 'express-async-errors';
import routes from './routes';
import swaggerDocument from '../swagger.json';
import exceptionHandler from './app/middlewares/exceptionHandler';
import 'dotenv/config';
import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors({ origin: process.env.APP_URL }));
    this.server.use(
      '/api-docs',
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument)
    );
  }

  routes() {
    this.server.use(routes);
  }

  exceptionHandler() {
    this.server.use(exceptionHandler);
  }
}

export default new App().server;
