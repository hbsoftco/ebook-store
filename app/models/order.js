'use strict';
module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        name: DataTypes.STRING,
        user_id: DataTypes.INTEGER,
        status: {
            type: DataTypes.ENUM,
            values: ['unpaid', 'billed', 'canceled', 'paid']
        }
    }, {});
    Order.associate = function(models) {
        // associations can be defined here
    };
    return Order;
};