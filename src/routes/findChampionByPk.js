const {Champion} = require('../db/sequelize');
const auth = require('../auth/auth');

module.exports = (app) => {
    app.get('/api/champions/:id', auth, (req, res) => {
        Champion.findByPk(req.params.id)
            .then(champion => {
                if(champion === null) {
                    const message = 'Le champion demandé n\'existe pas. Réessayez avec un autre identifiant';
                    return res.status(404).json({ message });
                }
                const message = 'Un champion a bien été trouvé';
                res.json({message, data: champion});
            })
            .catch(error => {
                const message = 'Le champion n\'a pas pu être récupéré. Veuillez réessayer plus tard.';
                res.status(500).json({message, data: error});
            });
    });
};