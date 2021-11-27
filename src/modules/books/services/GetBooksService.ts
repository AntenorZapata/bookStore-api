import { getCustomRepository } from 'typeorm';
import Book from '../typeorm/entities/Book';
import { BookRepository } from '../typeorm/repositories/BooksRepository';

class GetBooksService {
	public execute(): Promise<Book[]> {
		const booksRepository = getCustomRepository(BookRepository);
		const books = booksRepository.find();
		return books;
	}
}

export default GetBooksService;
