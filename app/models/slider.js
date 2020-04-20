'use strict';
module.exports = (sequelize, DataTypes) => {
    const Slider = sequelize.define('Slider', {
        link: DataTypes.TEXT,
        img: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
    }, {});
    Slider.associate = function(models) {
        // associations can be defined here
    };
    return Slider;
};