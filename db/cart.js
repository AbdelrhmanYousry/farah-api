
module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define("cart", {
      budget: DataTypes.REAL
    }, {
      timestamps: true,
      underscored: true
    })
    Cart.associate = db => {
      Cart.belongsTo(db.User, {
        as: "User",
        foreignKey: "user_id",
        foreignKeyConstraint: false
      })
      Cart.belongsTo(db.Venue, {
        as: "Venue",
        foreignKey: "venue_id",
        foreignKeyConstraint: false
      })
      Cart.belongsTo(db.Artist, {
        as: "Artist",
        foreignKey: "artist_id",
        foreignKeyConstraint: false
      })
    }
    return Cart;
  }