import BooksController from '@modules/books/controllers/BooksController';
import { Router } from 'express';

const routes = Router();

const booksController = new BooksController();

routes.route('/books').get(booksController.getAll).post(booksController.create);
routes
	.route('/books/:id')
	.get(booksController.getById)
	.put(booksController.update)
	.delete(booksController.delete);

export default routes;
