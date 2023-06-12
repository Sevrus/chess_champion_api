const {Sequelize, DataTypes} = require('sequelize');
const ChampionModel = require('../models/champion');
const champions = require('./mock-champion');
const UserModel = require('../models/user');
const {logger} = require("sequelize/lib/utils/logger");
const {hash} = require("bcrypt");

const sequelize = new Sequelize('champion', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    dialectOptions: {
        timezone: 'Etc/GMT+1',
    },
    logging: false
});

const Champion = ChampionModel(sequelize, DataTypes);
const User = UserModel(sequelize, DataTypes);

const initDb = () => {
    return sequelize.sync({force: true}).then(_ => {
        champions.map(champion => {
            Champion.create({
                name: champion.name
                }).then(champion => console.log(champion.toJSON()));
        });
        hash('caca', 10)
            .then(hash => User.create({username: 'caca', password: hash}))
            .then(user => console.log(user.toJSON()));
    });
};

module.exports = {
    initDb, Champion, User
};
