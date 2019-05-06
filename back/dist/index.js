const Sequelize = require('sequelize');
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
//const sequelize = new Sequelize('postgres://rider:rider@db_rider:5432/db_rider');
var routes = require('./routes/index');
var admin = require('./routes/admin');
var match = require('./routes/match');
var news = require('./routes/news');
var partner = require('./routes/partner');
var player = require('./routes/player');
var team = require('./routes/team');
app.use('/', routes);
app.use('/admin', admin);
app.use('/match', match);
app.use('/news', news);
app.use('/partner', partner);
app.use('/player', player);
app.use('/team', team);
app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});
app.listen(port, function () {
    console.log(`Your app is listening on ${port}!`);
});
//# sourceMappingURL=index.js.map