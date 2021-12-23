import { GetUsersServices } from '../services/GetUsersService';
import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import { GetOneUserService } from '../services/GetOneUserService';
import CreateSessionService from '../services/CreateSessionService';

export default class UsersController {
	public async getAll(req: Request, res: Response): Promise<Response> {
		const usersService = new GetUsersServices();
		const users = await usersService.execute();
		return res.status(200).json(users);
	}

	public async getById(req: Request, res: Response): Promise<Response> {
		const usersService = new GetOneUserService();
		const { id } = req.params;
		const user = await usersService.execute(id);
		return res.status(200).json(user);
	}

	public async create(req: Request, res: Response): Promise<Response> {
		const createUser = new CreateUserService();

		const user = await createUser.execute(req.body);
		return res.status(201).json(user);
	}

	public async login(req: Request, res: Response): Promise<Response> {
		const loginUser = new CreateSessionService();
		const user = await loginUser.execute(req.body);
		return res.status(200).json(user);
	}
}
