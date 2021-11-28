import { Request, Response } from 'express';
import CreateBookService from '../services/CreateBookService';
import GetBooksService from '../services/GetBooksService';
import GetOneBookService from '../services/GetOneBookService';
// import Book from '../typeorm/entities/Book';

export default class BooksController {
	public async getAll(req: Request, res: Response): Promise<Response> {
		const getAllBooks = new GetBooksService();
		const books = await getAllBooks.execute();
		return res.status(200).json(books);
	}

	public async getById(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;
		const getOneBook = new GetOneBookService();
		const book = getOneBook.execute({ id });
		return res.status(200).json(book);
	}

	public async create(req: Request, res: Response): Promise<Response> {
		const createBook = new CreateBookService();
		const newBook = await createBook.execute(req.body);
		return res.status(200).json(newBook);
	}
}
