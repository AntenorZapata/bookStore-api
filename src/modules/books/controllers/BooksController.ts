import { Request, Response } from 'express';
import CreateBookService from '../services/CreateBookService';
import DeleteBookService from '../services/DeleteBookService';
import GetBooksService from '../services/GetBooksService';
import GetOneBookService from '../services/GetOneBookService';
import UpdateBookService from '../services/UpdateBookService';

export default class BooksController {
	public async getAll(req: Request, res: Response): Promise<Response> {
		const getAllBooks = new GetBooksService();
		const books = await getAllBooks.execute();
		return res.status(200).json(books);
	}

	public async getById(req: Request, res: Response): Promise<Response> {
		const { id } = req.params;
		const getOneBook = new GetOneBookService();
		const book = await getOneBook.execute({ id });
		return res.status(200).json(book);
	}

	public async create(req: Request, res: Response): Promise<Response> {
		const createBook = new CreateBookService();
		const { name, price, quantity } = req.body;
		const newBook = await createBook.execute({ name, price, quantity });
		return res.status(201).json(newBook);
	}

	public async update(req: Request, res: Response): Promise<Response> {
		const updateBook = new UpdateBookService();
		const { name, price, quantity } = req.body;
		const { id } = req.params;
		const updatedBook = await updateBook.execute({ id, name, price, quantity });
		return res.status(200).json(updatedBook);
	}

	public async delete(req: Request, res: Response): Promise<Response> {
		const deletedBoook = new DeleteBookService();
		const { id } = req.params;
		await deletedBoook.execute({ id });
		return res.status(200).json({ status: 'success', message: 'Book deleted' });
	}
}
