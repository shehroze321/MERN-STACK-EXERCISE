// const express=require('express');
// const cors=require('cors');
// const mongoose=require('mongoose');
// mongoose.connect("mongodb+srv://rest:asghar321@restapis.awzlwaq.mongodb.net/Tracker?retryWrites=true&w=majority").then(()=>{
//     console.log("Connected successfuly to database ")
// })

// require('dotenv').config();

// const app = express();

// const port=process.env.PORT || 5100;

// app.use(cors());
// app.use(express.json());

// const exercisesRouter=require('./routes/exercises');

// const usersRouter=require('./routes/users')

// // whenever we provide this everthing load show which is in exercisesRouter 
// app.use('/exercises',exercisesRouter);
// // whenever we provide this everthing load show which is in usersRouter 
// app.use('/users',usersRouter)



// app.listen(port,()=>{
//     console.log(`server is running on port :${port}`);
// })

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5100;
console.log(port);

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.createConnection(uri).asPromise();
mongoose.connect(
  "mongodb+srv://rest:asghar321@restapis.awzlwaq.mongodb.net/Tracker?retryWrites=true&w=majority"
);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const exerciseRouter = require("./routes/exercises");
const userRouter = require("./routes/users");

app.use("/exercises", exerciseRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});