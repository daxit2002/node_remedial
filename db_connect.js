const express=require("express");
const app= express();
const mongoose=require("mongoose");

// const app=express();
// mongoose.connect("mongodb://localhost:27017/property")
// db.on('error', console.error.bind(console, 'connection error:'));


mongoose.connect("mongodb://localhost:27017/property");
const db = mongoose.connection;
//mongoose.set('useFindAndModify', false);

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open',()=>{
    console.log('Database connection Established  !')
});
module.exports=mongoose;

app.listen(3000,()=>{
    console.log("Server running on port 3000  .....!");
});