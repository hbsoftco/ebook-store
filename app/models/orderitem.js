'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('OrderItem', {
    price: DataTypes.STRING,
    amount: DataTypes.STRING,
    order_id: DataTypes.INTEGER,
    book_id: DataTypes.INTEGER
  }, {});
  OrderItem.associate = function(models) {
    // associations can be defined here
  };
  return OrderItem;
};