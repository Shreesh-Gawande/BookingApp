import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app= express()

app.listen(8800, ()=>{
    console.log("Server started at port 8800")
})