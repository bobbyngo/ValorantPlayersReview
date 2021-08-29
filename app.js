const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const Player = require('./models/player');

const mongoose = require('mongoose');
mongoose
    .connect('mongodb://localhost:27017/player', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Mongo connection Open');
    })
    .catch((err) => {
        console.log('Mongo connection Failed');
        console.log(err);
    });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(methodOverride('_method'));

app.get('/players', async (req, res) => {
    const players = await Player.find({});
    res.render('players/index', { players });
});

app.get('/players/:id', async (req, res) => {
    const { id } = req.params;
    const player = await Player.findById(id);
    res.render('players/show', { player });
});

app.listen(3000, () => {
    console.log('Serving on port 3000');
});
