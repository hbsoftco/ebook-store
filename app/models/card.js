'use strict';
module.exports = (sequelize, DataTypes) => {
    const Card = sequelize.define('Card', {
        book_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        count: DataTypes.INTEGER
    }, {});
    Card.associate = function(models) {
        // associations can be defined here
    };
    return Card;
};