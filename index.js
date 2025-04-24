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










// usename 
// text 
// Get /allcoments
// Get /all 
// GET /ShowmeallcommentsNow

// post /addcomment
// post /makecomments

// http  root        explain
// GET /comments -> all comments
// post /comments -> add a comment
// GET /comments/:id -> get a specific comment
// PUT or patch /comments/:id -> update a specific comment
// DELETE /comments/:id -> delete a specific comment

