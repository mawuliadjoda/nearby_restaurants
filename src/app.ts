
// https://dev.to/aws-builders/creating-a-serverless-api-using-aws-lambda-and-nodejs-with-typescript-and-expressjs-4kfk


import express from 'express';
import serverless from 'serverless-http';

import routes from './routes';

const app = express();

app.use(express.json());

app.use('/', routes);

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(404).send();
});

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(err.status || 500).send();
});

export const handler = serverless(app);


