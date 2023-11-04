import express from "express";
import authenticateJwt from "../middlewares/authenticatjwt.js";
import Restaurant from "../modals/restaurantModal.js";

const router = express.Router();

router.put("/book",authenticateJwt, async(req,res)=>{

    try{
        const seats = parseInt(req.body.seats);
    
        const user = await Restaurant.findById(req._id);
    
        if(user.tablesOccupied +seats <= user.totalTables){
            user.tablesOccupied += seats;

            await user.save();
            res.json({message: "Seats Booked successfully"});
        }
        else{
            res.json({err: "not enough seats"});
        }
    } catch(err){
        return res.status(500).json({err: err.message});
    }
})

router.put("/vacate",authenticateJwt, async(req,res)=>{

    try{
        const vacate = parseInt(req.body.vacate);
    
        const user = await Restaurant.findById(req._id);
        if(user.tablesOccupied - vacate >= 0){
            user.tablesOccupied -= vacate,
            await user.save();
            return res.json({message: "vacated successfully"});
        }
        else{
            res.json({err: "Already enough vacant seats"});
        }

    } catch(err){
        return res.status(500).json({err: err.message});
    }
})


export default router;