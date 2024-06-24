import { Request, Response, NextFunction } from 'express';
import { getModel } from '../../models/user-symbol/factory';
import { DTO } from '../../models/user-symbol/dto';
    

export async function addSymbol(req: Request, res: Response, next: NextFunction) {

    const userSymbol = {
        userId: 1,
        symbol: req.body.symbol as string
    }
    const newUserSymbol = await getModel().add(userSymbol)
    console.log(req.body)
    console.log(newUserSymbol)
    res.send('added symbol...')
}

export async function dashboard(req: Request, res: Response, next: NextFunction) {
    const userSymbols = await getModel().getForUser(1);
    res.render('users/dashboard', {
        userSymbols
    }) 
}