'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        family: DataTypes.STRING,
        email: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        type: {
            type: DataTypes.ENUM,
            values: ['admin', 'buyer', 'seller']
        }
    }, {});
    User.associate = function(models) {
        // associations can be defined here
    };
    return User;
};