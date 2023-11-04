import mongoose from "mongoose";

const restaurantSchema = mongoose.Schema({
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
    isVeg: {
        type: String,
        required: true,
    },
    totalTables: {
        type: Number,
        required: true,
    },
    tablesOccupied: {
        type: Number,
        default: 0,
    },
    description: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                const wordCount = value.trim().split(/\s+/).length;
                return wordCount <= 60;
            },
            message: "Description must be 60 words or fewer.",
        },
    },
});


const Restaurant = mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;
