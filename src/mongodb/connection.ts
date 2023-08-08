import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export const connection = async() => {
  try{
    const url = String(process.env.MONGO_URL);
    await mongoose.connect(url);
    console.log("Connected to miranda database on Atlas");

  }catch(error){
    console.log(error);
    throw new Error("Cannot connect to database");
  }
}