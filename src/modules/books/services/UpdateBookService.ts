import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Book from '../typeorm/entities/Book';
import { BookRepository } from '../typeorm/repositories/BooksRepository';

interface IRequest {
	name: string;
	price: number;
	quantity: number;
	id: string;
}

export default class UpdateBookService {
	public async execute({ id, name, price, quantity }: IRequest): Promise<Book> {
		const booksRepository = getCustomRepository(BookRepository);

		const book = await booksRepository.findOne(id);

		if (!book) {
			throw new AppError('Book does not exist', 404);
		}

		const bookExists = await booksRepository.findByName(name);

		if (bookExists && bookExists.id !== book.id) {
			throw new AppError('There is already a book with that name', 400);
		}

		await booksRepository.update({ id }, { name, price, quantity });

		return book;
	}
}

// await BlogPost.update({ ...body }, { where: { id } });
