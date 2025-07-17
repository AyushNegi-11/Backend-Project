import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"})) // configuration
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


// SEGREGATION

// routes import
import userRouter from './routes/user.routes.js'

// routes declaration
app.use("/api/v1/users", userRouter)  // after '/api/v1/users', control goes to userRouter

// http:localhost:8000/api/v1/users/register

export { app }  // 2nd way to export