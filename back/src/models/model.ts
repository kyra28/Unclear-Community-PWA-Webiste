export const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://user:pass@db:5432/db');


export const Admin = sequelize.define('admin', {
    pseudo: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
      },
    token: {
        type: Sequelize.STRING
      },
    logo: {
        type: Sequelize.STRING
    }
});

export const News = sequelize.define('news', {
    title: {
      type: Sequelize.STRING
    },
    content: {
      type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    },
    publishedAt: {
        type: Sequelize.DATE
    }
});

export const Team = sequelize.define('team', {
    name: {
        type: Sequelize.STRING
    },
    game: {
        type: Sequelize.STRING
    },
    logo: {
        type: Sequelize.STRING
    }
});

export const Player = sequelize.define('player', {
    pseudo: {
        type: Sequelize.STRING
    },
    logo: {
        type: Sequelize.STRING
    },
    arrivingDate: {
        type: Sequelize.DATE
    }
});

export const Match = sequelize.define('match', {
    equipe1: {
        type: Sequelize.STRING
    },
    equipe2: {
        type: Sequelize.STRING
    },
    score1: {
        type: Sequelize.INTEGER
    },
    score2: {
        type: Sequelize.INTEGER
    },
    vainqueur: {
        type: Sequelize.STRING
    },
    details: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATE
    }
});

export const Partner = sequelize.define('partner', {
    name: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    logo: {
        type: Sequelize.INTEGER
    },
    link: {
        type: Sequelize.INTEGER
    }
});

Admin.hasMany(News, {foreignKey: 'author_id', sourceKey: 'id'});
News.belongsTo(Admin, {foreignKey: 'author_id', targetKey: 'id'});

Team.hasMany(Player, {foreignKey: 'team_id', sourceKey: 'id'});
Player.belongsTo(Team, {foreignKey: 'team_id', targetKey: 'id'});