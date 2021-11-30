import User from '../typeorm/entities/User';
import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';

export default class UsersController {
	public async create(req: Request, res: Response): Promise<Response> {
		const createUser = new CreateUserService();
		const user = await createUser.execute(req.body);
		return res.status(201).json(user);
	}
}
