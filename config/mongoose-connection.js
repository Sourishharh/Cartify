const mongoose=require('mongoose');
const debgr  = require("debug")("development:mongoose"); 
const config=require('config');

mongoose.connect(`${config.get("MONGODB_URI")}/scatch`)
.then(function(){
    debgr("connected");
})
.catch(function(err){
    console.log(err);
})

module.exports=mongoose.connection;