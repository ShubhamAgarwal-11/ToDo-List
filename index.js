const express = require('express');
const port = 5000;
const app = express();
const db = require('./config/mongoose');



app.listen(port,function(err){
    if(err){
        console.log(`error in creating a server`);
        return err;
    }
    console.log(`Yup! server is running on port ${port}`);
});