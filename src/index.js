// resolved error through following 2 lines
import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"])

// require('dotenv').config({path: './env'});
import dotenv from 'dotenv'
import connectDB from './db/index.js';
import {app} from './app.js'
dotenv.config({
    path: './.env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`serveris running at port : ${process.env.PORT}`); 
    })
})
.catch((err) => {
    console.log("MONGO DB connection Failed !!", err);
    
})








// APPROACH 1 --> DB connection
/* 
import express from 'express'
const app = express()

(async () => {      //IFFI --> JS
    try{
        await mongoose.connect(`${process.env.
            MONGODB_URI}/${DB_NAME}`)
            app.on('error', (error) => {
                console.log('ERROR: ', error);
                throw error
            })

            app.listen(process.env.PORT, () => {
                console.log(`App is listening on port 
                    ${process.env.PORT}`);  
            })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()
*/