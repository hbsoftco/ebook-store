'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    author_id: DataTypes.INTEGER,
    publisher_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.STRING,
    publish_date: DataTypes.DATE,
    page_count: DataTypes.INTEGER,
    language: DataTypes.STRING
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
  };
  return Book;
};