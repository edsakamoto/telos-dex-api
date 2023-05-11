const pokemonModel = require('../model/pokemon.model');


const list = async(request,response)=> {
    const {
        attack,
        defence,
        hp,
        name,
        pokedex_number,
        speed,
        type1,
        type2,
        is_legendary} = request.query;

        const qrys = {};

        if(name){qrys.name = name};
        if(attack){qrys.attack = attack};
        if(defence){qrys.defence = defence};
        if(hp){qrys.hp = hp};
        if(pokedex_number){qrys.pokedex_number = pokedex_number};
        if(speed){qrys.speed = speed};
        if(type1){qrys.type1 = type1};
        if(type2){qrys.type2 = type2};
        if(is_legendary){qrys.is_legendary = is_legendary}        

        try{
            const pokemons = await pokemonModel.find(qrys);

            return response.json(pokemons);

        } catch(err){

            return response.status(400).json({
                error: '@pokemons/list',
                message: err.message || 'Failed to find list of pokemons'
            });
        }
};

const getById = async(request,response)=>{
    const {id} = request.params;

    try{
        const pokemon = await pokemonModel.findById(id);

        if(!pokemon){
            throw new Error();
        }

        return response.json(pokemon);
    }catch(err){
        return response.status(400).json({
            error:'@pokemons/getById',
            message: err.message || `Pokemon not found with id: ${id}`
        });
    }
};

const create = async(request,response)=>{
    const {
        attack,
        defence,
        hp,
        name,  
        pokedex_number,     
        speed,
        type1,
        type2,
        is_legendary} = request.body;

    try {
      

        const pokemon = await pokemonModel.create({
            attack,
            defence,
            hp,
            name,
            pokedex_number,
            speed,
            type1,
            type2,
            is_legendary
        });

        return response.status(201).json(pokemon);
        
    } catch (err) {
        return response.status(400).json({
            error:'@pokemons/create',
            message: err.message || 'Failed to create pokemon'
        });
    }
}

const update = async(request,response)=>{
    const {id} = request.params;

    const {
        attack,
        defence,
        hp,
        name,  
        pokedex_number,     
        speed,
        type1,
        type2,
        is_legendary} = request.body;
    
    try {

        const pokemonUpdated = await pokemonModel.findByIdAndUpdate(
            id,
            {
                attack,
                defence,
                hp,
                name,  
                pokedex_number,     
                speed,
                type1,
                type2,
                is_legendary
            },
            {
                new: true
            }
        );

        return response.json(pokemonUpdated);
        
    } catch (err) {

        return response.status(400).json({
            error:'@pokemons/update',
            message:err.message || `Pokemon not found ${id}`
        });        
    }
};

const remove = async(request,response)=>{
    const {id} = request.params;

    try {

        const pokemonRemoved = await pokemonModel.findByIdAndDelete(id);

        if(!pokemonRemoved){
            throw new Error();
        }

        return response.status(204).send('Deletado com sucesso');
        
    } catch (err) {

        return response.status(400).json({
            error:'@pokemons/remove',
            message:err.message || 'Failed to delete pokemon'
        })
        
    }
}

module.exports = {
    list,
    getById,
    create,
    update,
    remove
};