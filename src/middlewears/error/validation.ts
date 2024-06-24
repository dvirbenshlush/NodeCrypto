import { Request, Response, NextFunction } from "express";
import { addSymbolValidator } from "../../contoller/users/validator";
import Joi from 'Joi';

const validation = (validator: Joi.ObjectSchema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        req.body = await validator.validateAsync(req.body);
        next();
    }   
    catch (err) {
        next(err);
    }

}

export default validation;