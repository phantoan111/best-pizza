import mongoose from "mongoose";


export const connectDB = async () =>{

    // const myUrl =  `mongodb+srv://admin-ken:root-123456@cluster0.yel0wg0.mongodb.net/demo-best-pizza`

    const myUrl =  `mongodb+srv://${process.env.USERNAME_MONGO}:${process.env.PASSWORD_MONGO}@cluster0.yel0wg0.mongodb.net/demo-best-pizza`

    await mongoose.connect(myUrl).then(()=>console.log("Mongodb is connecting"));
}