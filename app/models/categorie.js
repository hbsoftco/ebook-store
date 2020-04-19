'use strict';
module.exports = (sequelize, DataTypes) => {
  const categorie = sequelize.define('categorie', {
    name_category: DataTypes.STRING,
    slug: DataTypes.STRING
  }, {});
  categorie.associate = function(models) {
    // associations can be defined here
  };
  return categorie;
};