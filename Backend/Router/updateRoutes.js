import express from "express";
import authenticateJwt from "../middlewares/authenticatjwt";

const router = express.Router();


router.post("/book",authenticateJwt, async(req,res)=>{

})


export default router;