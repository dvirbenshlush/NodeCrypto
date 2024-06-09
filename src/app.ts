import config from "config";
import express from "express";
import userRouter from './routers/users'
import path from "path";


const app = express();
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'));


app.use('/users', userRouter)

app.listen(config.get('app.port'), () => {
    console.log(`Server is running on http://localhost:${config.get('app.port')}`)
})