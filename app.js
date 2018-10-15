const express = require('express') 
const bodyParser = require('body-parser') 
const app = express() 
const restaurants = require('./controller/restaurants') 
const employees = require('./controller/employees') 
const menu = require('./controller/menu') 
const {sequelize} = require('./models/index') 

sequelize.sync().then(res => console.log(res)) 

app.use(bodyParser.json()) 
app.use('/', restaurants) 
app.use('/', employees) 
app.use('/', menu) 

const port = 3000
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})