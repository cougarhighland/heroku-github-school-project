const express = require('express');
const app = express();
const PORT = process.env.PORT || 1337;

app.use(express.static('client'));

//omitted express.json() to show difference

app.use(express.json());

app.listen(PORT, () =>{
    console.log('server is running on port 1337');
});