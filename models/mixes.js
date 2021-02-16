module.exports = function (sequelize, DataTypes) {
  var Mixes = sequelize.define("Mixes", {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Mixes.associate = function (models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Mixes.belongsTo(models.Artists, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Mixes;
};
