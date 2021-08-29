const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 0,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const Player = mongoose.model('Player', playerSchema);
module.exports = Player;
