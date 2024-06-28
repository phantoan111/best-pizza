import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import log from "./log.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"

// app config
const app = express()
const port = 4000
 

// app middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// api endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)

log.info('The first log')

app.get("/", (req,res)=>{
    res.send("API Working")
})
app.listen(port,()=>{
    console.log(`Server Start on http://localhost:${port}`)
})
// mongodb+srv://admin-ken:root-123456@cluster0.yel0wg0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//admin-ken:root-123456