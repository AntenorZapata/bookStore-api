import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Book from '../typeorm/entities/Book';
import { BookRepository } from '../typeorm/repositories/BooksRepository';

interface IRequest {
	name: string;
	price: number;
	quantity: number;
}

class CreateBookService {
	public async execute({ name, price, quantity }: IRequest): Promise<Book> {
		const booksRepository = getCustomRepository(BookRepository);
		const bookExists = await booksRepository.findByName(name);

		if (bookExists) {
			throw new AppError('Book already exists', 400);
		}

		const book = booksRepository.create({
			name,
			price,
			quantity,
		});

		await booksRepository.save(book);
		return book;
	}
}

export default CreateBookService;
