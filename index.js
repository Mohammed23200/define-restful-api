const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

const comments = [
    {
        username: 'John',
        comments: 'lol that is so funny!',
    },
    {
        username: 'Jane',
        comments: 'I know right?',
    },
    {
        username: 'Jim',
        comments: 'I am not sure about that',
    },
    {
        username: 'Jack',
        comments: 'I think it is true',
    }
];

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
});

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

