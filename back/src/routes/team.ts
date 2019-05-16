import * as models from '../models/model';
var router = require('express').Router();

router.post('', function(req, res) {
    models.Team.create({
        name: req.body.name,
        game: req.body.game,
        logo: req.body.logo
    }).then(function() {
        res.setHeader('Content-Type','application/json');
        res.send({status :1});
    });
});

router.get('', function(req, res) {
    models.Team.findAll({
        include: [models.Player]
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
    models.Team.findOne({
        where: {
            id: req.params.id
        },
        include: [models.Player]
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
    models.Team.update(
        {
            name: req.body.name,
            game: req.body.game,
            logo: req.body.logo
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
    models.Team.destroy({
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.send({status :1});
    });
});

module.exports = router;