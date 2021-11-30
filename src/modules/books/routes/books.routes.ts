import BookValidator from '@shared/middlewares/BookValidator';
import { Router } from 'express';
import BooksController from '../controllers/BooksController';

const booksRouter = Router();

const booksController = new BooksController();
const validation = new BookValidator();

booksRouter
	.route('/')
	.get(booksController.getAll)
	.post(validation.validateBook(), booksController.create);
booksRouter
	.route('/:id')
	.get(validation.validateId(), booksController.getById)
	.put(
		validation.validateId(),
		validation.validateBook(),
		booksController.update,
	)
	.delete(validation.validateId(), booksController.delete);

export default booksRouter;
