import AppError from '@shared/errors/AppError';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getCustomRepository } from 'typeorm';
import authConfig from '@config/auth';

import User from '../typeorm/entities/User';
import { UserRepository } from '../typeorm/repositories/UsersRepository';

interface IRequest {
	name: string;
	email: string;
	password: string;
}

interface IResponse {
	user: User;
	token: string;
}

export default class CreateSessionService {
	public async execute({ email, password }: IRequest): Promise<IResponse> {
		const usersRepository = getCustomRepository(UserRepository);

		const user = await usersRepository.findOne({ email });

		if (!user) {
			throw new AppError('Incorrect email or password', 401);
		}

		const confirmPass = await compare(password, user.password);

		if (!confirmPass) {
			throw new AppError('Incorrect password', 401);
		}

		const token = sign({}, authConfig.jwt.secret, {
			subject: user.id,
			expiresIn: authConfig.jwt.expiresIn,
		});

		return { user, token };
	}
}
