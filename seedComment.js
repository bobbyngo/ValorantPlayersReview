const Comment = require('./models/comment');

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

const contributers = [
    {
        name: 'bigboss66',
        title: 'Where is Asuna',
        description: 'Asuna is good add him pls',
    },
    {
        name: 'giraffe88',
        title: 'big fan of Tenz',
        description: 'tenz is so good',
    },
];

Comment.insertMany(contributers)
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
