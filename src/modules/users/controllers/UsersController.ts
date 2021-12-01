import { GetUsersServices } from './../services/GetUsersServices';
import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';

export default class UsersController {
	public async getAll(req: Request, res: Response): Promise<Response> {
		const usersService = new GetUsersServices();
		const users = await usersService.execute();
		return res.status(200).json(users);
	}
	public async create(req: Request, res: Response): Promise<Response> {
		const createUser = new CreateUserService();
		const user = await createUser.execute(req.body);
		return res.status(201).json(user);
	}
}
