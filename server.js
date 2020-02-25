const express=require('express');
const app=express();
const dotenv=require('dotenv');
const morgan=require('morgan')
//load env vars
dotenv.config({path:'./config/config.env'});

//dev logging middleware
if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'))
    
}


//routes
app.use('/api/v1/bootcamps',require('./routes/bootcamps'));



//port and server listen
const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`)
})




