import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./db/connectDb.js"
import cookieParser from "cookie-parser";
import userRoutes from "./Router/userRoutes.js"
import authenticateJwt from "./middlewares/authenticatjwt.js";
import fetchRoutes from "./Router/fetchRoutes.js"
import updateRoutes from "./Router/updateRoutes.js"
const app = express();

dotenv.config();

connectDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use(cookieParser());


app.use("/api/users",userRoutes);
app.use("/api/fetch",fetchRoutes);
app.use("/api/update", updateRoutes)

app.listen(3000,(()=>{
    console.log("connected to http://localhost:3000");
}))