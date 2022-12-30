import * as express from 'express';

class BookRouter {
  public bookRouter: express.Router;

  constructor() {
    this.bookRouter = express.Router();
    this.config();
  }

  private config() {
    this.bookRouter.get('/',)
  }

}

export default new BookRouter;