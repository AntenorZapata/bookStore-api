// import BookValidator from '@shared/middlewares/BookValidator';
import { Router } from 'express';
import UsersController from '../controllers/UsersController';

const userRouter = Router();

const userControler = new UsersController();

userRouter.route('/').get(userControler.getAll).post(userControler.create);
userRouter.route('/:id').get(userControler.getById);

export default userRouter;
