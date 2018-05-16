module.exports = function(sequelize, DataTypes) {
  var Hood = sequelize.define("Hood", {
    // Giving the Neighborhood model a name of type STRING
    name: DataTypes.STRING,
    zipCode: DataType.Number
  });

  Hood.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Hood.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Hood;
};
