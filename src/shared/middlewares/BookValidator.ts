import { celebrate, Joi, Segments } from 'celebrate';

export default class BookValidator {
	public validateBook() {
		return celebrate({
			[Segments.BODY]: Joi.object().keys({
				name: Joi.string().required(),
				price: Joi.number().required(),
				quantity: Joi.number().required(),
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
