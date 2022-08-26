import { toast } from 'react-toastify';


// started
const express = require('express')
const app= express();

const userUpload = require('./routes/index');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

    next();
});

app.use('/user', userUpload)


app.listen(3002, ()=> {
    console.log('Server is Running..')
})
// ended