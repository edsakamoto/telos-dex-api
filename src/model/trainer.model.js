const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema(
    {
        id:{ type:String },
        name: {type: String, required: true},
        age: {type: Number, required: true},
        location: {type: String},
        is_leader: {type: Boolean, required: true},
        badges: {type: Array, required: true},
        speciality: {type: String, required: true},
        pokemons: {type: mongoose.Schema.Types.ObjectId, ref: 'pokemons', required: true}
    },
    {
        versionKey: false
    }
)

module.exports = mongoose.model('trainers', trainerSchema);