import AppError from '@shared/errors/AppError';
import { NextFunction, Request, Response } from 'express';

const error = (err: Error, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof AppError) {
		return res.status(err.statusCode).json({
			status: 'error',
			message: err.message,
		});
	}

	return res
		.status(500)
		.json({ status: 'error', message: 'Internal Server Error' });
};

export default error;
