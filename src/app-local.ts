import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import bodyParser from 'body-parser';

import routes from './routes';
import {connectDB} from "./utils/database";
const { PORT } = process.env


const app = express();

app.use(express.json());

app.use('/', routes);


app.use(bodyParser.json())
app.listen(PORT, () => {
    connectDB().then(r => "success");
    console.log(`🚀 Server running on port ${PORT}🚀 `)
})

