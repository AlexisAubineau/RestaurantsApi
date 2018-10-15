module.exports = (sequelize, DataTypes) => {
    return sequelize.define('employees', {
        name: {
            type: DataTypes.STRING
        },
        restaurantId: {
            type: DataTypes.INTEGER
        },
        position: {
            type: DataTypes.STRING
        },
    }) 
} 