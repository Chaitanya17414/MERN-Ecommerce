const express=require('express');
const cors = require("cors")
const app = express();
app.use(express.json())
require("dotenv").config()
var dbConnection = require('./db')
var productRoutes =  require("./routes/producsRoute")
var userRegisterRoute = require("./routes/userRegisterRouter")
var userLoginRoute = require("./routes/userLoginRouter")

app.use('/api/products/',productRoutes)
app.use('/api/user/',userRegisterRoute)
app.use('/api/user/',userLoginRoute)
app.use(cors())


app.listen(8080,()=>console.log("Node server started"));
