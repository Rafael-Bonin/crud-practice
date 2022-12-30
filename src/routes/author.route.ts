import * as express from 'express';

class AuthorRouter {
  public authorRouter: express.Router;

  constructor() {
    this.authorRouter = express.Router();
    this.config();
  }

  private config(): void {
    this.authorRouter.get('/',);
  }

}

export default new AuthorRouter();