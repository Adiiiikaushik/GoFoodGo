import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"


// app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static("uploads"))

// routes
app.get("/",(req,res)=> {
    res.send("API Working")
})

app.listen(port,()=> {
    console.log(`Server started on Port: ${port}`)
})


//mongodb+srv://adityakaushik1801:<db_password>@cluster0.yaubo.mongodb.net/?