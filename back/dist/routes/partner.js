"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const models = __importStar(require("../models/model"));
var router = require('express').Router();
router.post('', function (req, res) {
    models.Partner.create({
        name: req.body.name,
        description: req.body.description,
        logo: req.body.logo,
        link: req.body.link
    }).then(function () {
        res.setHeader('Content-Type', 'application/json');
        res.send({ status: 1 });
    });
});
router.get('', function (req, res) {
    models.Partner.findAll({}).then(function (data) {
        if (data.length == 0) {
            res.send({ status: 0 });
        }
        else {
            res.setHeader('Content-Type', 'application/json');
            res.send(data);
        }
    });
});
router.get('/:id', function (req, res) {
    models.Partner.findOne({
        where: {
            id: req.params.id
        }
    }).then(function (data) {
        if (data.length == 0) {
            res.send({ status: 0 });
        }
        else {
            res.setHeader('Content-Type', 'application/json');
            res.send(data);
        }
    });
});
router.put('/:id', function (req, res) {
    models.Partner.update({
        name: req.body.name,
        description: req.body.description,
        logo: req.body.logo,
        link: req.body.link
    }, {
        where: {
            id: req.params.id
        }
    }).then(function () {
        res.send({ status: 1 });
    });
});
router.delete('/:id', function (req, res) {
    models.Partner.destroy({
        where: {
            id: req.params.id
        }
    }).then(function () {
        res.send({ status: 1 });
    });
});
module.exports = router;
//# sourceMappingURL=partner.js.map