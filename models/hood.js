module.exports = function(sequelize, DataTypes) {
  var Hood = sequelize.define("Hood", {
    // Giving the Neighborhood model a name of type STRING
    name:{
      type: DataTypes.STRING
    },
    zipcode: 
    {
      type: DataTypes.INTEGER
    }  
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
