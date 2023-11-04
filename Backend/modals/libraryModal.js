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
    totalSeats: {
        type: Number,
        required: true,
    },
    seatsOccupied: {
        type: Number,
        default: 0,
    },
});


const Library = mongoose.model("Library", librarySchema);

export default Library;
