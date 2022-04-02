const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
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
      nickname: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      birthday: {
          type: Sequelize.DATE,
          allowNull:false,
          defaultValue: Sequelize.NOW,
      },
      snsId: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
      PhoneNumber:{
        type: Sequelize.STRING,
        allowNull:false,
        validate: {
            notNull: { args: true, msg: "You must enter Phone Number" },
            len: { args: [11,11], msg: 'Phone Number is invalid' },
            isInt: { args: true, msg: "You must enter Phone Number" },
          }
      },
      kakaoId: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
      instaId: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
      membership: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      provider: {
        type: Sequelize.STRING(10),
        allowNull: false,
        defaultValue: 'local',
      }
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {}
};