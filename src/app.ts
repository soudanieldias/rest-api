import express from 'express';
import { db } from './database/db';
import routes from './routes';
import { errorMiddleware } from './middlewares';

class App {
  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.syncDb();
  }

  public app: express.Express;

  private PORT = process.env.PORT || 3001;

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(express.json());
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => {
      console.log('This Server is Running on PORT', PORT);
    });
  }

  private routes = () => {
    this.app.use(routes);
    this.app.use('/images', express.static('static'));
    this.app.use(errorMiddleware);
  };

  private syncDb = async () => {
    await db.sync({ force: false });
  }
}

export { App };

export const { app } = new App();
