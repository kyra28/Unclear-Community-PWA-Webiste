const Sequelize = require('sequelize');
const express = require('express')
const https = require('https');
var fs = require('fs');

var key = fs.readFileSync('/etc/letsencrypt/live/unclear-community.fr/privkey.pem');
var cert = fs.readFileSync('/etc/letsencrypt/live/unclear-community.fr/cert.pem');
var options = {
  key: key,
  cert: cert
};

const app = express()
const port = 3000

/*app.get('/', (req, res) => {
   res.send('Now using https..');
});*/

app.get('/*',function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    next(); // http://expressjs.com/guide.html#passing-route control
});

/*
app.get('*', function(req, res) {
    res.redirect('http://unclear-community.fr:3000' + req.url);
})
*/
app.use(express.json())

//const sequelize = new Sequelize('postgres://rider:rider@db_rider:5432/db_rider');

var routes = require('./routes/index');
var admin  = require('./routes/admin');
var match  = require('./routes/match');
var news  = require('./routes/news');
var partner  = require('./routes/partner');
var player  = require('./routes/player');
var team  = require('./routes/team');
var eventRoute  = require('./routes/event');

app.use('/', routes);
app.use('/admin', admin);
app.use('/match', match);
app.use('/news', news);
app.use('/partner', partner);
app.use('/player', player);
app.use('/team', team);
app.use('/event', eventRoute);

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

var server = https.createServer(options, app);
server.listen(port, function() {
    console.log(`Your https app is listening on ${port}!`);
});
