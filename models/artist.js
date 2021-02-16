module.exports = function(sequelize, DataTypes) {
    var Artists = sequelize.define("Artists", {
      // Giving the Artists model a name of type STRING
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      stage_name: DataTypes.STRING,
      genre: DataTypes.STRING,
      city:  DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    Artists.associate = function(models) {
      // Associating Artists with Blog posts
      // When an Artist is deleted, also delete any associated Blogs
      Artists.hasMany(models.Blogs, {
        onDelete: "cascade"
      });
      Artists.hasMany(models.Extras, {
        onDelete: "cascade"
      });
      Artists.hasMany(models.Mixes, {
        onDelete: "cascade"
      });
    };
  
    return Artists;
  };