const Sequelize = require('sequelize');

module.exports = class Post extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
        title : {
            type: Sequelize.STRING(30),
            allowNull: true,
        },    
        content: {
            type: Sequelize.STRING(500),
            allowNull: true,
        },
        img: {
            type: Sequelize.STRING(200),
            allowNull: true,
        }
        },{
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Post',
            tableName: 'posts',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.Post.belongsTo(db.User);
        db.Post.belongsTo(db.Enterprise);
        db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
    }

};
