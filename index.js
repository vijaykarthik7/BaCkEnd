import express, { application } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './routes/userRoute.js';
import cors from 'cors';



const app=express();
app.use(bodyParser.json());
dotenv.config();// to use the values
app.use(cors());
dotenv.config();// to use the values
const PORT=process.env.PORT || 2145;// use the port and this mention when 3000 is working it uses the another port
const MONGOURL=process.env.MONGO_URL;
app.use('/api/user',router);


mongoose.connect(MONGOURL).then(()=>{
    console.log("Database connected");
    app.listen(PORT,()=>{
        console.log(`Connect${PORT}`)
    });
})
