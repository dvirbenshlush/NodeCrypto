import { Router, urlencoded } from "express";
import auth from '../middlewears/auth'

const router = Router()

router.get('/connect', auth.authenticate('github', { scope: [ 'user:email' ] }))
router.get('/callback', auth.authenticate('github', { failureRedirect: '/login' }),
function(req, res) {
  // Successful authentication, redirect home.
  res.redirect('/users/dashboard');
})

export default router;