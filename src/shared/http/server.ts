import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import error from '../middlewares/error';
import routes from '../routes';
import '@shared/typeorm';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(error);

app.listen(3333, () => {
	console.log('Server running on port 3333!');
});
