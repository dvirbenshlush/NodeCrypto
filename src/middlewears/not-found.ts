import { Request, Response, NextFunction } from "express";

export function notFound(req: Request, res: Response, next: NextFunction) {
    next({
        status: 404,
        messsage: 'What you are looking for was not found'
    })
}