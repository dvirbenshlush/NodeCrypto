import { Request, Response, NextFunction} from 'express'

export function dashboard(req: Request, res: Response, next: NextFunction) {
    res.render('users/dashboard')
}

export function addSymbol(req: Request, res: Response, next: NextFunction) {
    console.log(req.body)
    res.send('added symbol...')
    // res.render('users/addSymbol')
}