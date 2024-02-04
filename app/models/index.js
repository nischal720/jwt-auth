const config = require("../config/db.config");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require("../models/roles.model")(sequelize, Sequelize);

db.role = require("../models/roles.model")(sequelize, Sequelize);

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
