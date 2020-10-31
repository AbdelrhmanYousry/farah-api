const Sequelize = require("sequelize");
const {
  DATABASE,
  DB_USER,DB_PASSWORD,
  NODE_ENV,
} = process.env;
const sequelize = NODE_ENV === "development" ? new Sequelize(DATABASE, DB_USER, DB_PASSWORD, {
  dialect: "postgres",
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci',
  }
}) : new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@ec2-54-221-214-3.compute-1.amazonaws.com:5432/${DATABASE}`, {
  dialect: "postgres",
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci',
  }
}) ;


const db = {
  User: sequelize.import("./user"),
  Venue: sequelize.import("./venue"),
  Category: sequelize.import("./category"),
  Location: sequelize.import("./location"),
  Cart: sequelize.import("./cart"),
  Order: sequelize.import("./package"),
  Artist: sequelize.import("./artist"),
  Admin: sequelize.import("./admin")
}


Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(models);
  }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;