import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.yel0wg0.mongodb.net/demo-best-pizza`).then(()=>console.log("Mongodb is connecting"));
}
