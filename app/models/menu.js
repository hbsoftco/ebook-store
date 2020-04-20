'use strict';
module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    name: DataTypes.STRING,
    link: DataTypes.TEXT,
    status: DataTypes.BOOLEAN,
    parent: DataTypes.STRING
  }, {});
  Menu.associate = function(models) {
    // associations can be defined here
  };
  return Menu;
};