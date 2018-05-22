module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    }
  });

  Post.associate = function(models) {
    // We're saying that a Post should belong to an Hood
    // A Post can't be created without an Hood due to the foreign key constraint
    Post.belongsTo(models.Hood, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};
