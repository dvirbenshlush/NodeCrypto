import config from "config";
import express from "express";
import userRouter from './routers/users'
import path from "path";
import { notFound } from "./middlewears/not-found";
import { errorHandler } from "./middlewears/error/errorHandler";
import { errorLogger } from "./middlewears/error/errorLogger";


const app = express();
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'));


app.use('/users', userRouter)

app.use(notFound)


// error handling
app.use(errorLogger)
app.use(errorHandler)


app.listen(config.get('app.port'), () => {
    console.log(`Server is running on http://localhost:${config.get('app.port')}`)
})