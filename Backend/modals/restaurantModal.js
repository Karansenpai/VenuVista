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
    state: {
        type: String,
        required: true,
    },
    isVeg: {
        type: Boolean,
        required: true,
    },
    tbAvailable: {
        type: Number,
        required: true,
    },
    tableOccupied: {
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
