// require('dotenv').config({path: './env'})
import dotenv from 'dotenv'

// import mongoose from 'mongoose';
// import { DB_NAME } from './constants';

import express from 'express';
import connectDB from './db/index.js';
const app = express()


dotenv.config({
    path: './env'
})


connectDB()
.then(() => {
    app.on('error', (error) => {
        console.log("Error: Application not able to talk :  ", error);
        throw error;
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("MONGO DB connection failed !!! ", error);
    
});

/* This is the first approach. Writing all the database connecting code in the index file. Second one is making an another folder.

( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) // Database connects
        app.on("error", (error) => {  // Database connect ho gaya h par baat nahi ho pa rahi h
            console.log("Error: Application not able to talk :  ", error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }catch(error){
        console.log("Error: ", error);
        
    }
})() // immediate execution  using iffi
 
*/