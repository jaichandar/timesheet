import express from 'express'
import cors from 'cors'
import  morgan from 'morgan';
import mysql from 'mysql2';
import dotenv from 'dotenv';
const app = express();

dotenv.config({});

// middleware
app.use(express.json())
app.use(cors())
app.use(morgan('dev'));

import userRouter from './routers/user.js';
app.use('/api/v1', userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Application Running on PORT:${PORT}`);
    (() => {
        try {            
        const mysqlConnection = mysql.createPool({
            database: process.env.database,
            user: process.env.user,
            password: process.env.password,
            port: process.env.port,
        })
            global.db = mysqlConnection;
            console.log('DB Connected Successfully')
        } catch (error) {
            console.log(error)        
        }
    })()
})
