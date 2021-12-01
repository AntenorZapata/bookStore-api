import AppError from '@shared/errors/AppError';
import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';

import User from '../typeorm/entities/User';
import { UserRepository } from '../typeorm/repositories/UsersRepository';

interface IRequest {
	name: string;
	email: string;
	password: string;
}

export default class CreateUserService {
	public async execute({ name, email, password }: IRequest): Promise<User> {
		const usersRepository = getCustomRepository(UserRepository);

		const userExists = await usersRepository.findOne({ email });

		if (userExists) {
			throw new AppError('User already exists', 400);
		}
		const hashPassword = await hash(password, 8);

		const user = usersRepository.create({
			name,
			email,
			password: hashPassword,
		});
		await usersRepository.save(user);

		return user;
	}
}
