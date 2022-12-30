import * as express from 'express'
import authorRouter from './author.route';
import bookRouter from './book.route';


class Router {
  public router: express.Router;

  constructor() {
    this.router = express.Router();
    this.config();
  }

  private config(): void {
    this.router.use('/author', authorRouter.authorRouter);
    this.router.use('/books', bookRouter.bookRouter);
  }
}

export default new Router();