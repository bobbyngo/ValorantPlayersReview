const Player = require('./models/player');

const seedPlayer = [
  {
    name: 'ShahZam',
    image: '/pictures/Shahz.png',
    rating: 1.07,
    description: 'Team Leader, best op-per NA hehehehe',
  },
  {
    name: 'TenZ',
    image: '/pictures/tenZ.png',
    rating: 1.29,
    description: 'Duelist main, Aim god',
  },
  {
    name: 'SicK',
    image: '/pictures/sick.png',
    rating: 1.21,
    description: 'I can play any agents, consistent player',
  },
  {
    name: 'zombs',
    image: '/pictures/zomb.png',
    rating: 0.9,
    description: 'Controller main, #zombsnation',
  },
  {
    name: 'dapr',
    image: '/pictures/dapr.png',
    rating: 1.05,
    description: 'Watching flanks for Sentinels, I love T-bag',
  },
];

module.exports = function () {
  Player.insertMany(seedPlayer)
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
};
