import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authroutes from "./routes/auth.js"
import userroutes from "./routes/users.js"
import hotelroutes from "./routes/hotels.js"
import roomsroutes from "./routes/rooms.js"
import cookieparser from "cookie-parser"

dotenv.config()

const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongodb")
      } catch (error) {
        throw error
      }
    
}


const app= express()

//middlewares
app.use(cookieparser())

app.use(express.json());

app.use("/api/auth",authroutes);
app.use("/api/users",userroutes);
app.use("/api/hotels",hotelroutes);
app.use("/api/rooms",roomsroutes);

app.use((err,res,next)=>{
  const errorStatus=err.status || 500
  const errorMessage=err.message || "Something went wrong"
  return res.status(errorStatus).json(errorMessage);
})

app.listen(8800, ()=>{
    connect()
    console.log("Server started at port 8800")
})