import express from "express";

const router = express.Router();

import Restaurant from "../modals/restaurantModal.js"

import generateToken from "../utils/helpers/generateToken.js";
import Library from "../modals/libraryModal.js";

router.post("/restaurant/signup",async(req,res)=>{
    try{

        const {name,username,password,city,state,isVeg,tbAvailable,description} = req.body;
        

        const user = await Restaurant.findOne({username});


        if(user){
            return res.status(400).json({err: "username already exists"});
        }

        const newUser = new Restaurant({
            name,
            username,
            password,
            city,
            state,
            isVeg,
            totalTables,
            description
        });

        await newUser.save();

        if(newUser){
            const token =  generateToken(newUser._id,res);
            res.status(201).json({
                name: user.name,
                _id: user._id,
                username: user.name,
                city: user.city,
                isVeg:user.isVeg,
                tbAvailable:user.totalTables,
                description:user.description,    
                token: token,
            })
        } else{
            res.status(400).json({err: "Invalid Data"});
        }
    }
    catch(err){
        res.status(500).json({err: err.message});
        console.log("Error in Signupuser: "+ err.message);
    }
})

router.post("/restaurant/login",async(req,res)=>{
    try{

        const {username,password} = req.body;
        const user = await Restaurant.findOne({username});

        if(!user || user.password !=  password){
            return res.status(400).json({
                message: "Invalid username or password"
            })
        }

        const token = generateToken(user._id,res);

        res.status(201).json({
            name: user.name,
            _id: user._id,
            username: user.name,
            city: user.city,
            isVeg:user.isVeg,
            tbAvailable:user.tbAvailable,
            description:user.description,   
            token: token,
        })
    }
    catch(err){
        res.status(500).json({err: err.message});
        console.log("Error in Signupuser: "+ err.message);
    }
})

router.post("/restaurant/logout",async(req,res)=>{
    try{

        res.cookie("jwt","",{maxAge:1});
        res.status(200).json("User Logged Out successfully");

    }
    catch(err){
        res.status(404).json({err: err.message});
        console.log("message "+err.message);
    }
})

router.post("/library/signup",async(req,res)=>{
    try{

        const {name,username,password,city,state,seatsAvailable} = req.body;
        console.log(name);

        const user = await Library.findOne({username});

        if(user){
            return res.status(400).json({err: "username already exists"});
        }
        console.log(user);

        const newUser = new Library({
            name,
            username,
            password,
            city,
            totalSeats,
        });

        await newUser.save();

        if(newUser){
            const token = generateToken(newUser._id,res);
            res.status(201).json({
                name: newUser.name,
                _id: newUser._id,
                username: newUser.username,
                city: newUser.city,
                state:newUser.state,
                seatsAvailable: newUser.seatsAvailable,
                seatsOccupied: newUser.seatsOccupied, 
                token: token, 
            })
        } else{
            res.status(400).json({err: "Invalid Data"});
        }
    }
    catch(err){
        res.status(500).json({err: err.message});
        console.log("Error in Signupuser: "+ err.message);
    }

})

router.post("/library/login",async(req,res)=>{
    try{

        const {username,password} = req.body;

        const user = await Library.findOne({username});

        if(!user && user.password == password){
            return res.status(400).json({err: "invalid username or password"});
        }
        
        const token = generateToken(user._id,res);

        res.status(201).json({
            name: user.name,
            _id: user._id,
            username: user.name,
            city: user.city,
            seatsAvailable: user.seatsAvailable,
            seatsOccupied:user.seatsOccupied, 
            token: token  
        })
    }
    catch(err){
        res.status(500).json({err: err.message});
        console.log("Error in Signupuser: "+ err.message);
    }


})

router.post("/hospital/signup",(req,res)=>{

    
})







export default router;