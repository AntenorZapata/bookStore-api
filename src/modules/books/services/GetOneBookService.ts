import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Book from '../typeorm/entities/Book';
import { BookRepository } from '../typeorm/repositories/BooksRepository';

export default class GetOneBookRepository {
	public async execute({ id }: { id: string }): Promise<Book> {
		const booksRepository = getCustomRepository(BookRepository);
		const book = await booksRepository.findOne(id);
		if (!book) {
			throw new AppError('Book does not exist', 404);
		}
		return book;
	}
}
