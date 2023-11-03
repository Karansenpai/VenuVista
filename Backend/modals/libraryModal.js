import mongoose from "mongoose";

const librarySchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    seatsAvailable: {
        type: Number,
        required: true,
    },
    seatsOccupied: {
        type: Number,
        default: 0,
    },
});


const Restaurant = mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;
