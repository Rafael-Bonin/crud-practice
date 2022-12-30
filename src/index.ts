import * as dotenv from "dotenv";
import express from "express";
import { Request, Response, NextFunction } from 'express'
import cors from "cors"
import Router from './routes'
import { IResErr } from "./interfaces";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
};

const PORT: number = parseInt(process.env.PORT as string, 10);

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(cors())
    this.config();
  }

  private config() {
    this.app.use(Router.router);
    this.app.use((err: IResErr, _req: Request, res: Response, _next: NextFunction) => {
      if (err.status) return res.status(err.status).json({ message: err.message });
      return res.status(500).json({ message: err.message });
    });
  }

  public start(PORT: number): void {
    this.app.listen(PORT, () => console.log(`listening on port ${PORT}`));
  }

}

const app = new App();

app.start(PORT);

export default app;