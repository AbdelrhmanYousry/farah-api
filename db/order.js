
module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define("order", {
      cost: DataTypes.REAL,
      time: DataTypes.TIME,
    }, {
      timestamps: true,
      underscored: true
    })
    Order.associate = db => {
      Order.belongsTo(db.User, {
        as: "User",
        foreignKey: "user_id",
        foreignKeyConstraint: false
      })
      Order.belongsTo(db.Venue, {
        as: "Venue",
        foreignKey: "venue_id",
        foreignKeyConstraint: false
      })
      Order.belongsTo(db.Artist, {
        as: "Artist",
        foreignKey: "artist_id",
        foreignKeyConstraint: false
      })
    }
    return Order;
  }