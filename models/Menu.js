module.exports = (sequelize, DataTypes) => {
    return sequelize.define('menu', {
        name: {
            type: DataTypes.STRING
        },
        restaurantId: {
            type: DataTypes.INTEGER
        }
    }) 
} 