import express from "express";

const router = express.Router();

import Restaurant from "../modals/restaurantModal.js"

import generateToken from "../utils/helpers/generateToken.js";
// router.post("/signup",signupUser);
// router.post("/login",loginUser);
// router.post("/logout",logoutUser);

router.post("/restaurant/signup",async(req,res)=>{
    try{

        const {name,username,password,city,state,isVeg,tbAvailable,description} = req.body;
        

        const user = await Restaurant.findOne({username});


        if(user){
            return res.status(400).json({message: "username already exists"});
        }

        const newUser = new Restaurant({
            name,
            username,
            password,
            city,
            state,
            isVeg,
            tbAvailable,
            description
        });

        await newUser.save();

        if(newUser){
            generateToken(newUser._id,res);
            res.status(201).json({
                name: user.name,
                _id: user._id,
                username: user.name,
                city: user.city,
                state:user.state,
                isVeg:user.isVeg,
                tbAvailable:user.tbAvailable,
                description:user.description,    
            })
        } else{
            res.status(400).json({message: "Invalid Data"});
        }
    }
    catch(err){
        res.status(500).json({message: err.message});
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

        generateToken(user._id,res);

        res.status(201).json({
            name: user.name,
            _id: user._id,
            username: user.name,
            city: user.city,
            state:user.state,
            isVeg:user.isVeg,
            tbAvailable:user.tbAvailable,
            description:user.description,   
        })
    }
    catch(err){
        res.status(500).json({message: err.message});
        console.log("Error in Signupuser: "+ err.message);
    }
})


router.post("/library/signup",async(req,res)=>{
    try{

        const {name,username,password,city,state,isVeg,tbAvailable,description} = req.body;
        

        const user = await Restaurant.findOne({username});


        if(user){
            return res.status(400).json({message: "username already exists"});
        }

        const newUser = new Restaurant({
            name,
            username,
            password,
            city,
            state,
            isVeg,
            tbAvailable,
            description
        });

        await newUser.save();

        if(newUser){
            generateToken(newUser._id,res);
            res.status(201).json({
                name: user.name,
                _id: user._id,
                username: user.name,
                city: user.city,
                state:user.state,
                isVeg:user.isVeg,
                tbAvailable:user.tbAvailable,
                description:user.description,    
            })
        } else{
            res.status(400).json({message: "Invalid Data"});
        }
    }
    catch(err){
        res.status(500).json({message: err.message});
        console.log("Error in Signupuser: "+ err.message);
    }

})

router.post("/hospital/signup",(req,res)=>{

})







export default router;