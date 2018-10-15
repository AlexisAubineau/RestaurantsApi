const express = require('express') 
const router = express.Router() 
const {Restaurant} = require('../models') 

router.get('/restaurants', async (req, res, next) => {
    try {
        const restaurants = await Restaurant.findAll() 
        res.json(restaurants) 
    }
    catch(e) {
        next(e) 
    }
}) 

router.get('/restaurant/:id', async (req, res, next) => {
    if (!isNaN(req.params.id)){
        try {
            const restaurant = await Restaurant.findById(req.params.id) 
            res.json(restaurant) 
        }
        catch(e) {
            next(e) 
        }
    }
    else{
        next(new Error("Mauvais ID : '" + req.params.id + "'"))
    }
}) 

router.post('/restaurant', async (req, res, next) => {
    try {
        const postRestaurant = await Restaurant.create({
            'name': req.body.name,
            'address': req.body.address,
            'capacity': req.body.capacity
        }) 
        res.json(postRestaurant) 
    }
    catch(e) {
        next(e) 
    }
}) 

router.put('/restaurant/:id', async (req, res, next) => {
    if (!isNaN(req.params.id)){
        try {
            const updateRestaurant = await Restaurant.update({
                'name': req.body.name,
                'address': req.body.address,
                'capacity': req.body.capacity
                },
                {where: {id:req.params.id}}) 
                const {lastId} = updateRestaurant 
                const newUpdateRestaurant = {lastId}
            res.json(newUpdateRestaurant)
        }
        catch(e) {
            next(e)
        }
    }
    else{
        next(new Error("Mauvais ID : '" + req.params.id + "'"))
    }
}) 

router.delete('/restaurant/:id', async (req, res, next) => {
    if (!isNaN(req.params.id)){
        try {
            const deleteRestaurant = await Restaurant.destroy({where: {id: req.params.id}}) 
            res.json(deleteRestaurant) 
        }
        catch(e){
            next(e) 
        }
    }
    else{
        next(new Error("Mauvais ID : '" + req.params.id + "'"))
    }
}) 

module.exports = router 