import * as models from '../models/model';
var router = require('express').Router();

router.post('', function(req, res) {
    models.Event.create({
        title: req.body.title,
        type: "Match",
        details: req.body.details,
        date: req.body.date
    }).then(function(eventData) {
        models.Match.create({
            equipe1: req.body.equipe1,
            equipe2: req.body.equipe2,
            score1: req.body.score1,
            score2: req.body.score2,
            vainqueur: req.body.vainqueur,
            event_id: eventData.id
        }).then(function(matchData) {
            eventData.update({
                type_id: matchData.id
            }).then(function(){
                res.json({status :1});
            });
        });
    });
});

router.get('', function(req, res) {
    models.Match.findAll({
    }).then(function(data) {
        if(data.length == 0){
            res.send({status :0});
        } else{
            res.json(data);
        }
    });
});

router.get('/:id', function(req, res) {
    models.Match.findOne({
        where: {
            id: req.params.id
        }
    }).then(function(data) {
        if(data.length == 0){
            res.send({status :0});
        } else{
            res.json(data);
        }
    });
});

router.put('/:id', function(req, res) {
    models.Match.update(
        {
            equipe1: req.body.equipe1,
            equipe2: req.body.equipe2,
            score1: req.body.score1,
            score2: req.body.score2,
            vainqueur: req.body.vainqueur,
            details: req.body.details,
            date: req.body.date
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
    models.Match.destroy({
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.send({status :1});
    });
});

module.exports = router;