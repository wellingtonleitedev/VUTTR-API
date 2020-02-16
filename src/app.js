import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import routes from './routes';
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
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }

  exceptionHandler() {
    this.server.use(exceptionHandler);
  }
}

export default new App().server;
