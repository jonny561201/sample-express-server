import express from 'express';
import { router } from './router';
import bodyParser from 'body-parser';

export const app = express();

app.use(bodyParser.json());
app.use(router);
app.use(bodyParser.urlencoded({ extended: true }));
