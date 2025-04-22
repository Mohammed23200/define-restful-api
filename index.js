const express = require('express');
const app = express();

app.get('/tacos',(req,res)=>{
    res.send("get /tacos")
})
app.post('/tacos',(req,res)=>{
    res.send("post /tacos")
})
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});