const {Champion} = require('../db/sequelize');
const {ValidationError, UniqueConstraintError} = require('sequelize');
const auth = require('../auth/auth');

module.exports = (app) => {
    app.post('/api/champions', auth, (req, res) => {
        Champion.create(req.body)
            .then(champion => {
                const message = `Le champion ${req.body.name} a bien été crée.`
                res.json({message, data: champion})
            })
            .catch(error => {
                if (error instanceof ValidationError) {
                    return res.status(400).json({message: error.message, data: error});
                }
                if (error instanceof UniqueConstraintError) {
                    return res.status(400).json({message: error.message, data: error});
                }
                const message = 'Le champion n\'a pas pu être ajouté. Réessayez dans quelques instants.';
                res.status(500).json({message, data: error});
            });
    });
};
