const {Champion} = require('../db/sequelize');
const {Op} = require('sequelize');
const auth = require('../auth/auth');

module.exports = (app) => {
    app.get('/api/champions', auth, (req, res) => {
        if (req.query.name) {
            const name = req.query.name;
            const limit = parseInt(req.query.limit) || 5;

            if (name.length < 3) {
                const message = `Le terme de la recherche doit contenir au moins 2 caractères.`;
                return res.status(400).json({message});
            }

            return Champion.findAndCountAll({
                where: {
                    name: {
                        [Op.like]: `%${name}%`
                    }
                },
                order: ['name'],
                limit: limit
            })
                .then(({count, rows}) => {
                    const message = `Il y a ${count} champions qui correspondent à votre recherche ${name}.`;
                    res.json({message, data: rows});
                })
        } else {
            Champion.findAll({order: ['name']})
                .then(champions => {
                    const message = 'La liste des champions a bien été récupérée.';
                    res.json({message, data: champions});
                })
                .catch(error => {
                    const message = 'La liste des champions n\'a pas pu être récupérée. Veuillez réessayer plus tard.';
                    res.status(500).json({message, data: error});
                });
        }
    });
};