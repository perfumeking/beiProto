const Sequelize = require('sequelize');

module.exports = class Enterprise extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      email: {
        type: Sequelize.STRING(40),
        allowNull: true,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      enterpriseName: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
      enterprisePhoneNumber:{
        type: Sequelize.STRING,
        allowNull:true,
        // validate: {
        //     notNull: { args: true, msg: "You must enter Phone Number" },
        //     len: { args: [11,11], msg: 'Phone Number is invalid' },
        //     isInt: { args: true, msg: "You must enter Phone Number" },
        //   }
      },
      membership: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
      },
      enterpriseType: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true,
      },
      
    }, {
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