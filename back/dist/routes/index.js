var routerIndex = require('express').Router();
routerIndex.get('/', function (req, res) {
    /*models.User.findAll({
        include: [ models.Task ]
    }).then(function(users) {
        res.render('index', {
            title: 'Sequelize: Express Example',
            users: users
        });
    });*/
    res.status(200).send({
        message: 'Welcome to the beginning of nothingness.'
    });
});
module.exports = routerIndex;
//# sourceMappingURL=index.js.map