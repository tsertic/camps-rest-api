const express=require('express');
const app=express();
const dotenv=require('dotenv');
//load env vars
dotenv.config({path:'./config/config.env'});

//routes
app.use('/api/v1/bootcamps',require('./routes/bootcamps'));



//port and server listen
const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`)
})




