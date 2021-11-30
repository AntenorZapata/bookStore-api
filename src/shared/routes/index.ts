import BooksController from '@modules/books/controllers/BooksController';
import BookValidator from '@shared/middlewares/BookValidator';
import { Router } from 'express';

const routes = Router();

const booksController = new BooksController();
const validation = new BookValidator();

routes
	.route('/books')
	.get(booksController.getAll)
	.post(validation.validateBook(), booksController.create);
routes
	.route('/books/:id')
	.get(validation.validateId(), booksController.getById)
	.put(
		validation.validateId(),
		validation.validateBook(),
		booksController.update,
	)
	.delete(validation.validateId(), booksController.delete);

export default routes;
