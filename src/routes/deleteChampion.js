const {Champion} = require('../db/sequelize');
const auth = require('../auth/auth');

module.exports = (app) => {
    app.delete('/api/champions/:id', auth, (req, res) => {
        Champion.findByPk(req.params.id).then(champion => {
            if(champion === null) {
                const message = 'Le champion demandé n\'existe pas.Réessayez avec un autre identifiant.';
                return res.status(404).json({message});
            }
            const championDeleted = champion;
            return Champion.destroy({
                where: {id: champion.id}
            })
                .then(_ => {
                    const message = `Le champion avec l'identifiant ${championDeleted.id} a bien été supprimé.`;
                    res.json({message, data: championDeleted});
                });
        })
            .catch(error => {
                const message = `Le champion n'a pas pu être supprimé. Réessayer dans quelques instants.`;
                res.status(500).json({message, data: error});
            });
    });
};