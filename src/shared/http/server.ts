import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import routes from '../routes';
import error from '../middlewares/error';
import '@shared/typeorm';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(error);

app.listen(3333, () => {
	console.log('Server running on port 3333!');
});
