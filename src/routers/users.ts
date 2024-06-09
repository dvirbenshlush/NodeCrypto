import { Router, urlencoded } from "express";
import { dashboard, addSymbol } from "../contoller/users/controlers";

const router = Router();

// router.get('/dashboard', (req, res, next) => {
//     res.setHeader('Content-type', 'text/html')
//     res.send('<h1>hello from dashboard</h1>')
// })
router.use(urlencoded({extended: false}))
router.get('/dashboard', dashboard)
router.post('/symbols', addSymbol)
export default router; 