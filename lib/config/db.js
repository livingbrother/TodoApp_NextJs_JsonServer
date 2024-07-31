import mongoose from "mongoose"

export const ConnectDB = async ()=>{
 await mongoose.connect('mongodb+srv://Hemanthsai:Happy%40123@hunting1.udzq4ub.mongodb.net/')
  
 console.log("DB Connected")
}

