module.exports = function (sequelize, DataTypes) {
  var Mixes = sequelize.define("Mixes", {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Mixes.associate = function (models) {

    Mixes.belongsTo(models.Artists, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Mixes;
};
