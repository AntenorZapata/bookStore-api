// import { EntityRepository, Repository } from 'typeorm';
// import User from '../entities/User';

// @EntityRepository(User)
// export class UserRepository extends Repository<User> {
// 	public async findByName(name: string): Promise<User | undefined> {
// 		const user = this.findOne({ name });
// 		return user;
// 	}

// public async findByName(name: string): Promise<User | undefined> {
// 	const book = this.findOne({ name });
// 	return book;
// }

// public async findById(id: string): Promise<User | undefined> {
// 	const user = this.findOne({ id });
// 	return user;
// }
// }

import { EntityRepository, Repository } from 'typeorm';
import User from '../entities/User';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
	public async findByName(name: string): Promise<User | undefined> {
		const book = this.findOne({ name });
		return book;
	}
}
