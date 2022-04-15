// const { dangerouslyDisableDefaultSrc } = require('helmet/dist/types/middlewares/content-security-policy');
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
      nick: {
        type: Sequelize.STRING(15),
        allowNull: true,
        defaultValue : '--'
      },
      name: {
        type: Sequelize.STRING(15),
        allowNull: true,
        defaultValue : '--'
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
      phoneNumber:{
        type: Sequelize.STRING,
        allowNull: true,
        // validate: {
        //     notNull: { args: true, msg: "You must enter Phone Number" },
        //     len: { args: [11,11], msg: 'Phone Number is invalid' },
        //     isInt: { args: true, msg: "You must enter Phone Number" },
        //   }

        defaultValue : '--'
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

  static associate(db) {
    // db.User.HasMany(db.Info, { foreignKey: 'UserId',sourceKey:'id'});
  }
};