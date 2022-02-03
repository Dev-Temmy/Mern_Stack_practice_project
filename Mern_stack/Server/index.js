//variable for express and app
const express = require('express');
const app = express()
const userModel = require('./models/users');

//to connect API to the frontend(client)
const cors = require("cors");
app.use(cors());

//for postman not to give an error use:
app.use(express.json());

//setting mongodb connection
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://Mernstack_user1:Mernstack_user1@mernstackcluster1.jkoep.mongodb.net/mern_social_database?retryWrites=true&w=majority")

//to make request to the database
app.get("/getUsers", (req, res)=>{
    userModel.find({}, (err,result)=> {
        if (err){res.json(error)

        } else {
            res.json(result);
        }
    });

});

//to send request to the database
app.post("/createUsers", async(req, res)=>{
    const user = req.body
    const newUser = new userModel(user);
    await newUser.save();

    res.json(user)
        
});


//for Api to start
app.listen(3001, ()=> {
    console.log("Server runs perfectly...");
});

