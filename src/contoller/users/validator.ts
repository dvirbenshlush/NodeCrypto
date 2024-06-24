import Joi from 'Joi';

export const addSymbolValidator = Joi.object({
    symbol: Joi.string().required().alphanum().length(3).uppercase()

})