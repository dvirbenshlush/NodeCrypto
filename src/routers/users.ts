import { Router, urlencoded } from "express";
import { dashboard, addSymbol } from "../contoller/users/controlers";
import validation from "../middlewears/error/validation";
import { addSymbolValidator } from "../contoller/users/validator";
import enforceAuth from "../middlewears/enforce-auth";
import joi from 'Joi';

const router = Router();

router.use(enforceAuth)

// router.get('/dashboard', (req, res, next) => {
//     res.setHeader('Content-type', 'text/html')
//     res.send('<h1>hello from dashboard</h1>')
// })
router.use(urlencoded({extended: false}))
router.get('/dashboard', dashboard)
router.post('/symbols', validation(addSymbolValidator), addSymbol)
export default router; 