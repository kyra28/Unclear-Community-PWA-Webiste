import * as models from '../models/model';
var router = require('express').Router();

router.post('', function(req, res) {
    var type = "Other";
    if (req.body.type)
        type = req.body.type;

    models.Event.create({
        title: req.body.title,
        type: type,
        details: req.body.details,
        date: req.body.date,
        type_id: req.body.type_id
    }).then(function() {
        res.json({status :1});
    });
});

router.get('', function(req, res) {
    models.Event.findAll({
        order: [['date', 'DESC']]
    }).then(function(data) {
        if(data.length == 0){
            res.send({status :0});
        } else{
            res.json(data);
        }
    });
});

router.get('/:id', function(req, res) {
    models.Event.findOne({
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
    models.Event.update(
        {
            title: req.body.title,
            type: req.body.type,
            details: req.body.details,
            date: req.body.date,
            type_id: req.body.type_id
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
    models.Event.destroy({
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.send({status :1});
    });
});

module.exports = router;