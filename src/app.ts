import express from 'express';
import { Application, Request, Response } from 'express';
import * as database from './config/database';
import * as bodyParser from 'body-parser';
import * as authRoutes from './routes/AuthRoutes';

export const app: Application = express();

(async () => {
    await database.connect();

    await database.sequelize.sync({force: false})
            .then(() => {
                console.log('Database synchronised successfully');
            })
            .catch((error) => {
                console.error(`Database synchronisation failed : ${error}`);
            });
})();

app.use(bodyParser.json({limit: '50mb', type: ['application/json', 'application/pdf']}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use('/auth', authRoutes.router);

app.get('/', (req: Request, res: Response) => {
  res.send("Hello World!");
});