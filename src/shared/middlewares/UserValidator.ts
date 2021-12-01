import { celebrate, Joi, Segments } from 'celebrate';

export default class UserValidator {
	public validateUser() {
		return celebrate({
			[Segments.BODY]: Joi.object().keys({
				name: Joi.string().required(),
				email: Joi.string().email().required(),
				password: Joi.string().min(6).required(),
			}),
		});
	}

	public validateId() {
		return celebrate({
			[Segments.PARAMS]: {
				id: Joi.string().uuid().required(),
			},
		});
	}
}
