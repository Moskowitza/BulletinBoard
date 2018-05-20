module.exports = function(sequelize, DataTypes) {
  var Hood = sequelize.define("Hood", {
    // Giving the Neighborhood model a name of type STRING
    name:{
      type: DataTypes.STRING
    },
    lat: 
    {
      type: DataTypes.DECIMAL(10, 6)
    },
    lng: {
      type: DataTypes.DECIMAL(10, 6)
    } 
  });

  Hood.associate = function(models) {
    // Associating Hood with Posts
    // When an Hood is deleted, also delete any associated Posts
    Hood.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Hood;
};
