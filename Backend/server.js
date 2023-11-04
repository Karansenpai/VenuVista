import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./db/connectDb.js"
import cookieParser from "cookie-parser";
import userRoutes from "./Router/userRoutes.js"
import authenticateJwt from "./middlewares/authenticatjwt.js";

const app = express();

dotenv.config();

connectDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use(cookieParser());



app.get("/me",authenticateJwt, (req,res)=>{
    try{
        res.json({_id: req._id});
    } catch(err){
        res.json({err: err.message});
    }
})
app.use("/api/users",userRoutes);

app.listen(3000,(()=>{
    console.log("connected to http://localhost:3000");
}))