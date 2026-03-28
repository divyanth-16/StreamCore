import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js"

dotenv.config({path : './env'})

connectDB()
.then(()=>{
app.on("error", (error)=>{
    console.log("ERROR :", error);
    throw error
})

app.listen(process.env.PORT, ()=>{
    console.log(`App is listening on ${process.env.PORT}`);
})

}).catch((error)=>{
    console.log("Mongodb connection failed !!!", error);
})