import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import routes from "./routes/index.js"
import connectDB from "./db/db.js"

const app = express()
connectDB()

app.use(cors({
  origin: process.env.ORIGIN || "http://localhost:4200",
  credentials: true

}))

app.use(express.json())
app.use(cookieParser())

app.use("/api", routes)

export default app
