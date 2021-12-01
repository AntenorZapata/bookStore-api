import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../typeorm/repositories/UsersRepository';

export class GetUsersServices {
	public async execute() {
		const usersRepository = getCustomRepository(UserRepository);
		const users = await usersRepository.find();
		return users;
	}
}
