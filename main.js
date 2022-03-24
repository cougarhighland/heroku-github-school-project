const express = require('express');
const app = express();
const PORT = process.env.PORT || 1337;



//omitted express.json() to show difference

app.use(express.json());
app.use(express.static('./client'));

app.listen(PORT, () =>{
    console.log('server is running on port 1337');
});