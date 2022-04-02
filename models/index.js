const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const User = require('./user');
const Enterprise = require('./enterprise');
const Post = require('./post');
const db = {};


const sequelize = new Sequelize(config.database, config.username, config.password, config,);


db.sequelize = sequelize;

db.User = User;
db.Enterprise = Enterprise;
db.Post = Post;

User.init(sequelize);
Enterprise.init(sequelize);
Post.init(sequelize);

User.associate(db);
Enterprise.associate(db);
Post.init(sequelize);

module.exports = db;
