const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/tacos',(req,res)=>{
    res.send("get /tacos")
})
app.post('/tacos',(req,res)=>{
    const {meat , qt} = req.body;
    res.send(`okay , here are tour ${qt} ${meat} tacos`)
})
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});