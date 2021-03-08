const mongoose = require('mongoose');


const PositionSchema = mongoose.Schema({
     speed: {
         type:  mongoose.Types.Decimal128
     },

     direction: {
        type:  Number
    },
    attitude: {
        type:  Number
    },
    latitude_character: {
        type:  String
    },
    latitude: {
        type:  mongoose.Types.Decimal128
    },
    longitude_character: {
        type:  String
    },
    longitude: {
        type:  mongoose.Types.Decimal128
    },
    pedometer: {
        type:  Number
    },
    satellite_number: {
        type:  Number
    },
    battery_status: {
        type:  Number
    },
    tumbling_times: {
        type:  Number
    },
    gsm_signal_strength: {
        type:  Number
    },
    
    base_station_number: {
        type:  Number
    },
    date: {
        type:  Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Positions', PositionSchema);
