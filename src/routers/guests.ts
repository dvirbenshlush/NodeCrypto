import { Router, urlencoded } from "express";
import { welcome } from "../contoller/guests/controlers";
import enforceGuest from "../middlewears/enforce-guest";

const router = Router()

router.use(enforceGuest)

router.get('/welcome', welcome)

export default router;