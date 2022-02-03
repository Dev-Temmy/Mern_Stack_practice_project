//import mongoose
const mongoose = require('mongoose')

//creating a schema for users
const usersSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    username: {
        type: String,
        required: true
    }
});

const userModel = mongoose.model("users", usersSchema)
//to have access to userModel outside of this file:
module.exports = userModel;