import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import router from './routes/postRoutes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use("/api/posts", router)

mongoose.connect(process.env.ATLAS).then(()=>{
    console.log("Connected")
    app.listen(PORT, () => console.log("Server started"))
}).catch((err)=>{
    console.log(err)
    process.exit(1)
})