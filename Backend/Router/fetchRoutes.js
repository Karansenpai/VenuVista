import express from "express";
import authenticateJwt from "../middlewares/authenticatjwt.js";
import Restaurant from "../modals/restaurantModal.js";

const router = express.Router();


router.get("/me",authenticateJwt, (req,res)=>{
    try{
        res.json({_id: req._id});
    } catch(err){
        res.json({err: err.message});
    }
})

router.get("/fetchall",async(req,res)=>{
    try{
        const Users = await Restaurant.find({});

        res.json({Users})

    } catch(err){
        res.json({err:err.message})
    }
})

router.get("/fetchone",authenticateJwt, async(req,res) => {
    try{
        const user = await Restaurant.findById(req._id);

        if(!user){
          return res.json({err: "user does not exist"});
        } 
        return res.json(user);

    } catch(err){
        res.json({err: err.message});
    }

})

export default router;