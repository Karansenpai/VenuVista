import express from "express";
import authenticateJwt from "../middlewares/authenticatjwt.js";

const router = express.Router();


router.get("/me",authenticateJwt, (req,res)=>{
    try{
        res.json({_id: req._id});
    } catch(err){
        res.json({err: err.message});
    }
})

export default router;