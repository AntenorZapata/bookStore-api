import AppError from '@shared/errors/AppError';
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UserRepository from '../typeorm/repositories/UserRepository';

interface IRequest {
	name: string;
	email: string;
	password: string;
	avatar: string;
}

export default class CreateUserService {
	public async execute({
		name,
		email,
		password,
		avatar,
	}: IRequest): Promise<User> {
		const usersRepository = getCustomRepository(UserRepository);

		const userExists = await usersRepository.findOne({ email });

		if (userExists) {
			throw new AppError('User already exists', 400);
		}

		const user = usersRepository.create({ name, email, password, avatar });
		await usersRepository.save(user);
		return user;
	}
}
