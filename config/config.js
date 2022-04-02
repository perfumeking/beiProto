require('dotenv').config();

module.exports = 
{
  "development": {
    "username": "root",
    "password": process.env.SEQUELIZE_PASSWORD,
    "database": "BEI",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": process.env.SEQUELIZE_PASSWORD,
    "database": "BEI_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": process.env.SEQUELIZE_PASSWORD,
    "database": "BEI_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
};
