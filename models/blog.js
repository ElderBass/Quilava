module.exports = function(sequelize, DataTypes) {
    var Blogs = sequelize.define("Blogs", {
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
        len: [1, 500]
      }
    });
  
    Blogs.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Blogs.belongsTo(models.Artists, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Blogs;
  };
  