const express=require('express');
const app = express();
app.use(express.json())

var dbConnection = require('./db')
var productRoutes =  require("./routes/producsRoute")

app.use('/api/products/',productRoutes)


app.get('/',(req,res)=>{
    res.send("Hello World!");
});

app.listen(8080,()=>console.log("Node server started"));
