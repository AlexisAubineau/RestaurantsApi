const Sequelize = require('sequelize')

const sequelize = new Sequelize('mainDb', null, null, {
  dialect: 'sqlite',
  operatorsAliases: false,
  storage: './api.db'
}) 

const Restaurant = sequelize.import(__dirname + '/Restaurants') 
const Employee = sequelize.import(__dirname + '/Employees') 
const Menu = sequelize.import(__dirname + '/Menu') 

Employee.restaurant = Employee.belongsTo(Restaurant) 
Menu.restaurant = Menu.belongsTo(Restaurant) 
Restaurant.employees = Restaurant.hasMany(Employee) 
Restaurant.menu = Restaurant.hasOne(Menu) 

module.exports = {
  Restaurant,
  Employee,
  Menu,
  sequelize
}