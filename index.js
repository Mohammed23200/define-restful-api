const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');


const comments = [
    {
        id:uuid(),
        username: 'John',
        comments: 'lol that is so funny!',
    },
    {
        id:uuid(),
        username: 'Jane',
        comments: 'I know right?',
    },
    {
        id:uuid(),
        username: 'Jim',
        comments: 'I am not sure about that',
    },
    {
        id:uuid(),
        username: 'Jack',
        comments: 'I think it is true',
    }
];


app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
});

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
});
app.post('/comments', (req, res) => {
    const { username, comment } = req.body; // Renamed 'comments' to 'comment'
    comments.push({ username,comments:comment,id:uuid() }); // Use 'comments' array and 'comment' property
    res.redirect('/comments');
});

app.patch('/comments/:id',(req, res)=>{
    const {id} =req.params;
    const newCommentText=req.body.comment;
    const foundComment =comments.find(c =>c.id === id);
    foundComment.comments = newCommentText;
})

app.get("/comments/:id",(req, res)=>{
    const {id} =req.params;
    const comment =comments.find(c =>c.id === id)
    res.render('comments/show',{comment})
})

app.get('/tacos', (req, res) => {
    res.send("get /tacos");
});

app.post('/tacos', (req, res) => {
    const { meat, qt } = req.body;
    res.send(`Okay, here are your ${qt} ${meat} tacos`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

