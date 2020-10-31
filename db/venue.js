
module.exports = (sequelize, DataTypes) => {
    const Venue = sequelize.define("venue", {
      name: DataTypes.STRING,
      name_ar: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING,
      about: DataTypes.TEXT,
      about_ar: DataTypes.TEXT,
      address: DataTypes.TETXT,
      address_ar: DataTypes.TETXT,
      images: DataTypes.ARRAY(DataTypes.STRING),
      phones: DataTypes.ARRAY(DataTypes.STRING),
      availability: DataTypes.ARRAY(DataTypes.RANGE(DataTypes.TIME)),
      price: DataTypes.STRING,
    }, {
      timestamps: false,
      underscored: true
    })
    Venue.associate = db => {
      Venue.hasMany(db.Order, {
        as: "Orders",
        foreignKey: "venue_id",
        foreignKeyConstraint: false
      })
    }
    return Venue;
  }