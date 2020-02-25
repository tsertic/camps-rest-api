const express=require('express');
const app=express();
const dotenv=require('dotenv');
//load env vars
dotenv.config({path:'./config/config.env'});


const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`)
})




