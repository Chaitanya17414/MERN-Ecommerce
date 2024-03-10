const express=require('express');
const app = express();

var dbConnection = require('./db')

app.get('/',(req,res)=>{
    res.send("Hello World!");
});

app.listen(8080,()=>console.log("Node server started"));
