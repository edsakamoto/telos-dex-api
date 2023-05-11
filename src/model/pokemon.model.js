const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    id:{
        type: String
       }
    ,attack:{
        type: Number,
        required: true
    },
    defence:{
        type: Number,
        required: true
    },
    hp:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true,
        unique: true
    },
    pokedex_number:{
        type: Number,
        required: true,
        unique: true
    },
    speed:{
        type: Number,
        required: true        
    },
    type1:{
        type: String,
        required: true        
    },
    type2:{
        type: String        
    },
    is_legendary:{
        type: String,
        required: true        
    },
});

module.exports = mongoose.model('pokemons', pokemonSchema);