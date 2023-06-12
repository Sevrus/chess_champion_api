const {Champion} = require('../db/sequelize');
const {ValidationError, UniqueConstraintError} = require("sequelize");
const auth = require('../auth/auth');

module.exports = (app) => {
    app.put('/api/champions/:id', auth, (req, res) =>{
        const id = req.params.id;
        Champion.update(req.body, {
            where: {id: id}
        })
            .then(_ => {
                return Champion.findByPk(id).then(champion => {
                    if(champion === null) {
                        const message = 'Le champion demandé n\'existe pas. Réessayez avec un autre identifiant';
                        return res.status(404).json({ message });
                    }
                    const message = `Le champion ${champion.name} a bien été modifié`;
                    res.json({message, data: champion});
                })
            })
            .catch(error => {
                if (error instanceof ValidationError) {
                    return res.status(400).json({message: error.message, data: error});
                }
                if (error instanceof UniqueConstraintError) {
                    return res.status(400).json({message: error.message, data: error})
                }
                const message = 'Le champion n\'a pas pu être modifié. Réessayez dans quelques instants.';
                res.status(500).json({message, data: error});
            })
    })
}