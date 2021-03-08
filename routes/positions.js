const express = require('express');

const router = express.Router();

const Position = require('../models/Position');

//Get all positions
router.get('/', async (req, res) => {
    try{
        const positions = await Position.find();
        res.json(positions);
    }catch(err){
        res.json({message:err});
    }
    
});

//Get specific position
router.get('/:positionId', async (req, res) => {
    try{
        const position = await Position.findById(req.params.positionId);
        res.json(position);
    }catch(err){
        res.json({message:err});
    }
    
});

//Add position
router.post('/', async (req, res) => {
    const position = new Position({
        speed: req.body.speed,
        direction: req.body.direction,
        attitude: req.body.attitude,
        latitude_character: req.body.latitude_character,
        latitude: req.body.latitude,
        longitude_character: req.body.longitude_character,
        longitude: req.body.longitude,
        pedometer: req.body.pedometer,
        satellite_number: req.body.satellite_number,
        battery_status: req.body.battery_status,
        tumbling_times: req.body.tumbling_times,
        gsm_signal_strength: req.body.gsm_signal_strength,
        base_station_number: req.body.base_station_number
    });
    try{
        const savedPosition = await position.save();
        res.json(savedPosition);
    } catch(err){
        res.json({message:err});
    }
});

//Update position
router.patch('/:positionId', async (req, res) => {
    try{
        const updatedPosition = await Position.updateOne({_id: req.params.positionId}, {$set : {speed: req.body.speed}});
        res.json(updatedPosition);
    }catch(err){
        res.json({message:err});
    }
    
});

//Delete position
router.delete('/:positionId', async (req, res) => {
    try{
        const removePosition = await Position.remove({_id: req.params.positionId});
        res.json(removePosition);
    }catch(err){
        res.json({message:err});
    }
    
});

module.exports = router
