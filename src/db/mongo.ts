import mongoose from "mongoose";
import config from 'config';

const { host, port, database } = config.get<any>('mongo');

console.log(`mongodb://${host}:${port}/${database}`)

mongoose.connect(`mongodb://${host}:${port}/${database}`)

console.log('connected to mongodb')

export default mongoose;