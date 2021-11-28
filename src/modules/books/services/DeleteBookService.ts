import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { BookRepository } from '../typeorm/repositories/BooksRepository';

interface IRequest {
	id: string;
}

export default class DeleteBookService {
	public async execute({ id }: IRequest): Promise<void> {
		const booksRepository = getCustomRepository(BookRepository);

		const book = await booksRepository.findOne(id);

		if (!book) {
			throw new AppError('Book does not exist', 404);
		}

		await booksRepository.remove(book);
	}
}
