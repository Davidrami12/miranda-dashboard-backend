import mongoose from "mongoose";

export const connection = async() => {
  try{
    const url = "mongodb://0.0.0.0:27017/miranda"
    await mongoose.connect(url)
    
    console.log("Connected with miranda database")

  }catch(error){
    console.log(error)
    throw new Error("Cannot connect to database")
  }
}