module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Champion', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg: 'Le nom est déjà pris.'
            },
            validate: {
                notNull: {msg: 'Le nom est requis.'},
                notEmpty: {msg: 'Le nom ne peut pas être vide.'}
            }
        }
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false
    })
}