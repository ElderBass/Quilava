module.exports = function(sequelize, DataTypes) {
    var Extras = sequelize.define("Extras", {
    
      bandcamp: DataTypes.TEXT,
      discogs: DataTypes.TEXT,
      twitch: DataTypes.TEXT,
      bio: {
        type: DataTypes.TEXT,
        len: [1, 500]
      }
    });
  
    Extras.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Extras.belongsTo(models.Artists, {
        foreignKey: {
          allowNull: false
        }
      });
      
    };
  
    return Extras;
  };