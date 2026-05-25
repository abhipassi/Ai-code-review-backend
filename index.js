import express from "express"
import dotenv from "dotenv"
import connectToDb from "./src/config/db.js"


dotenv.config()

connectToDb()


const app = express()

app.use(express.json())

app.get("/health-check", (req,res) =>{
    console.log("app is running")
    res.json("App is running")
})

const PORT = process.env.PORT || 5005

app.listen(PORT, () =>{
    console.log(`Server is running on the ${PORT}`)
})