import config from "config";
import express from "express";
import userRouter from './routers/users'
import path from "path";
import { notFound } from "./middlewears/not-found";
import { errorHandler } from "./middlewears/error/errorHandler";
import { errorLogger } from "./middlewears/error/errorLogger";
import session from 'express-session'
import auth from './middlewears/auth'
import guestsRouter from './routers/guests'
import githubRouter from './routers/github'


declare global {
    namespace Express {
        interface User {
            id: number;
        }
    }
}

const app = express();
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'));

// middlewares
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
         maxAge: 1000 * 60 * 60 * 24
    },
 }))
 app.use(auth.initialize())
 app.use(auth.session());
 
app.use('/users', userRouter)
app.use('/guests', guestsRouter);
app.use('/github', githubRouter);


app.use(notFound)


// error handling
app.use(errorLogger)
app.use(errorHandler)


app.listen(config.get('app.port'), () => {
    console.log(`Server is running on http://localhost:${config.get('app.port')}`)
})