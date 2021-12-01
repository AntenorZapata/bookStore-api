// import BookValidator from '@shared/middlewares/BookValidator';
import UserValidator from '@shared/middlewares/UserValidator';
import { Router } from 'express';
import UsersController from '../controllers/UsersController';

const userRouter = Router();

const userControler = new UsersController();

const userValidator = new UserValidator();

userRouter
	.route('/')
	.get(userControler.getAll)
	.post(userValidator.validateUser(), userControler.create);

userRouter.route('/login').post(userControler.login);
userRouter.route('/:id').get(userValidator.validateId(), userControler.getById);

export default userRouter;
