var bcrypt = require("bcryptjs")

module.exports = function(sequelize, DataTypes) {
    var Artists = sequelize.define("Artists", {
      // Giving the Artists model a name of type STRING
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      stage_name: DataTypes.STRING,
      genre: DataTypes.STRING,
      city:  DataTypes.STRING,
      image: {
        type: DataTypes.STRING,
        defaultValue: "../assets/record.png"
      },
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

    Artists.prototype.validPassword = function(password) {
      return bcrypt.compareSync(password, this.password);
    };
  
    Artists.addHook("beforeCreate", function(user) {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
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