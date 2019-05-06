"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sequelize = require('sequelize');
const sequelize = new exports.Sequelize('postgres://user:pass@db:5432/db');
exports.Admin = sequelize.define('admin', {
    pseudo: {
        type: exports.Sequelize.STRING
    },
    email: {
        type: exports.Sequelize.STRING
    },
    password: {
        type: exports.Sequelize.STRING
    },
    token: {
        type: exports.Sequelize.STRING
    },
    logo: {
        type: exports.Sequelize.STRING
    }
});
exports.News = sequelize.define('news', {
    title: {
        type: exports.Sequelize.STRING
    },
    content: {
        type: exports.Sequelize.STRING
    },
    image: {
        type: exports.Sequelize.STRING
    },
    publishedAt: {
        type: exports.Sequelize.DATE
    }
});
exports.Team = sequelize.define('team', {
    name: {
        type: exports.Sequelize.STRING
    },
    game: {
        type: exports.Sequelize.STRING
    },
    logo: {
        type: exports.Sequelize.STRING
    }
});
exports.Player = sequelize.define('player', {
    pseudo: {
        type: exports.Sequelize.STRING
    },
    logo: {
        type: exports.Sequelize.STRING
    },
    arrivingDate: {
        type: exports.Sequelize.DATE
    }
});
exports.Match = sequelize.define('match', {
    equipe1: {
        type: exports.Sequelize.STRING
    },
    equipe2: {
        type: exports.Sequelize.STRING
    },
    score1: {
        type: exports.Sequelize.INTEGER
    },
    score2: {
        type: exports.Sequelize.INTEGER
    },
    vainqueur: {
        type: exports.Sequelize.STRING
    },
    details: {
        type: exports.Sequelize.STRING
    },
    date: {
        type: exports.Sequelize.DATE
    }
});
exports.Partner = sequelize.define('partner', {
    name: {
        type: exports.Sequelize.STRING
    },
    description: {
        type: exports.Sequelize.STRING
    },
    logo: {
        type: exports.Sequelize.INTEGER
    },
    link: {
        type: exports.Sequelize.INTEGER
    }
});
exports.Admin.hasMany(exports.News, { foreignKey: 'author_id', sourceKey: 'id' });
exports.News.belongsTo(exports.Admin, { foreignKey: 'author_id', targetKey: 'id' });
exports.Team.hasMany(exports.Player, { foreignKey: 'team_id', sourceKey: 'id' });
exports.Player.belongsTo(exports.Team, { foreignKey: 'team_id', targetKey: 'id' });
//# sourceMappingURL=model.js.map