import { Router } from 'express';

const routes = Router();

routes.route('/').get((req, res) => {
	return res.status(200).json({ message: 'Hello Dev' });
});

export default routes;
