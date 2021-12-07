'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: DataTypes.STRING,
    songUrl: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {});
  Song.associate = function(models) {
    // associations can be defined here
    Song.belongsTo(models.User, {
      foreignKey: "userId",
    });
    Song.hasMany(models.Comment, {
      foreignKey: "songId",
      onDelete: "CASCADE",
      hooks: true,
    });
  };
  return Song;
};