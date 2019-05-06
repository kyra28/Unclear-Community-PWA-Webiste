import * as models from '../models/model';
var router = require('express').Router();

router.post('', function(req, res) {
    models.Player.create({
        pseudo: req.body.pseudo,
        logo: req.body.logo,
        arrivingDate: req.body.arrivingDate
    }).then(function() {
        res.setHeader('Content-Type','application/json');
        res.send({status :1});
    });
});

router.get('', function(req, res) {
    models.Player.findAll({
    }).then(function(data) {
        if(data.length == 0){
            res.send({status :0});
        } else{
            res.setHeader('Content-Type','application/json');
            res.send(data);
        }
    });
});

router.get('/:id', function(req, res) {
    models.Player.findAll({
        where: {
            id: req.params.id
        }
    }).then(function(data) {
        if(data.length == 0){
            res.send({status :0});
        } else{
            res.setHeader('Content-Type','application/json');
            res.send(data);
        }
    });
});

router.put('/:id', function(req, res) {
    models.Player.update(
        {
            pseudo: req.body.pseudo,
            logo: req.body.logo,
            arrivingDate: req.body.arrivingDate
        },
        {
            where: {
                id: req.params.id
            }
        }
    ).then(function() {
        res.send({status :1});
    });
});

router.delete('/:id', function(req, res) {
    models.Player.destroy({
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.send({status :1});
    });
});
module.exports = router;