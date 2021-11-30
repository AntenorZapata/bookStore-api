import booksRouter from '@modules/books/routes/books.routes';
import userRouter from '@modules/users/routes/users.routes';

import { Router } from 'express';

const routes = Router();

routes.use('/books', booksRouter);
routes.use('/users', userRouter);

export default routes;
