module.exports = (sequelize, DataTypes) => {
    return sequelize.define('restaurants', {
        address: {
            type: DataTypes.STRING
        },
        name: {
            type: DataTypes.STRING
        },
        capacity: {
            type: DataTypes.STRING
        }
    }) 
} 