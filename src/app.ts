import express, { Express, Request, Response } from 'express';
import connectDB from './config/db';
import bodyParser from 'body-parser';

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

import { lists } from './features/lists';
import { tasks } from './features/tasks';

app.use('/lists', lists);
app.use('/tasks', tasks);

export default app;
