import AppError from '@shared/errors/AppError';
import { compare } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';

import User from '../typeorm/entities/User';
import { UserRepository } from '../typeorm/repositories/UsersRepository';

interface IRequest {
	name: string;
	email: string;
	password: string;
}

interface IResponse {
	user: User;
}

export default class CreateSessionService {
	public async execute({ email, password }: IRequest): Promise<User> {
		const usersRepository = getCustomRepository(UserRepository);

		const user = await usersRepository.findOne({ email });

		if (!user) {
			throw new AppError('Incorrect email or password', 401);
		}

		const confirmPass = await compare(password, user.password);

		if (!confirmPass) {
			throw new AppError('Incorrect password', 401);
		}

		return user;
	}
}
