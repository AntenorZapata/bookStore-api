import { EntityRepository, Repository } from 'typeorm';
import Book from '../entities/Book';

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {
	public async findByName(name: string): Promise<Book | undefined> {
		const book = this.findOne({ name });
		return book;
	}
}
