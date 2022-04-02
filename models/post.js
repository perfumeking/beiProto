const Sequelize = require('sequelize');

module.exports = class Post extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
        title : {
            type: Sequelize.STRING(30),
            allowNull: false,
        },    
        },{
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Enterprise',
            tableName: 'enterprises',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {}
};
