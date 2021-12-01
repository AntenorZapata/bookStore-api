// import BookValidator from '@shared/middlewares/BookValidator';
import { Router } from 'express';
import UsersController from '../controllers/UsersController';

const booksRouter = Router();

const userControler = new UsersController();

booksRouter.route('/').get(userControler.getAll).post(userControler.create);

export default booksRouter;
