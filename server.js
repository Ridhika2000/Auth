require("dotenv").config();
const express=require('express');
const cors=require('cors');
const app=express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
require("./config/db");



const authroute=require("./routes/Auth");

app.use(cors());

app.use("/api/v1.0/auth",authroute);
app.listen(3030,()=>{
    console.log("server running");
    
})