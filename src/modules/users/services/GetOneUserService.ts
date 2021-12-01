import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import { UserRepository } from '../typeorm/repositories/UsersRepository';

export class GetOneUserService {
	public async execute(id: string): Promise<User | undefined> {
		const usersRepository = getCustomRepository(UserRepository);
		const user = await usersRepository.findOne(id);

		if (!user) {
			throw new AppError('User does not exist', 404);
		}
		return user;
	}
}
