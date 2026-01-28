import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))

// options(extended) are not needed just for information
app.use(express.urlencoded({extended: true, limit: "16kb"}))

// public is folder name to store images, favicon if needed
app.use(express.static("public"))

app.use(cookieParser())

export default app