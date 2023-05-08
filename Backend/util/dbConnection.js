require('dotenv').config()
const mongoose = require('mongoose')
const url = process.env.CONNECTION_STRING_DB

exports.connectionDB=async ()=>{
   try {
    await mongoose.connect(url)
    console.log("db connected")
    
   } catch (error) {
    console.log("error while connecting db",error)
    
   }
}

