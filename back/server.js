const express=require("express")
const app=express()
const cropRouter=require("./Router/crop.router")
const cors=require("cors")
const mongoose=require("mongoose")
app.use(cors())



require('dotenv').config()
const PORT=process.env.PORT || 5001
app.use(express.json())

mongoose.connect("mongodb+srv://tu7ljr8ww:Allahverdi123@cluster0.hlwgpfm.mongodb.net/").then(res=>{
    console.log("connected moongoose")
})
app.use("/crop",cropRouter)

app.listen(PORT,()=>{
    console.log("back running on 5001")
})