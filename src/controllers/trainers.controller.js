const trainerModel = require('../model/trainer.model');


const list = async(request,response)=> {
    const {
        name,
        age,
        location,
        is_leader,
        badges,
        speciality,
        pokemons} = request.query;

        const qrys = {};

        if(name){qrys.name = name};
        if(age){qrys.age = age};
        if(location){qrys.location = location};
        if(is_leader){qrys.is_leader = is_leader};
        if(badges){qrys.badges = badges};
        if(speciality){qrys.speciality = speciality};
        if(pokemons){qrys.pokemons = {$in: pokemons}};
              

        try{
            const trainers = await trainerModel.find(qrys)
            .populate('pokemons')
            .exec()
            ;

            return response.json(trainers);

        } catch(err){

            return response.status(400).json({
                error: '@trainers/list',
                message: err.message || 'Failed to find list of trainers'
            });
        }
};

const getById = async(request,response)=>{
    const {id} = request.params;

    try{
        const trainer = await trainerModel.findById(id)
        .populate('pokemons')
        .exec();

        if(!trainer){
            throw new Error();
        }

        return response.json(trainer);
    }catch(err){
        return response.status(400).json({
            error:'@trainers/getById',
            message: err.message || `trainer not found with id: ${id}`
        });
    }
};

const create = async(request,response)=>{
    const {
        name,
        age,
        location,
        is_leader,
        badges,
        speciality,
        pokemons} = request.body;

    try {
      

        const trainer = await trainerModel.create({
            name,
            age,
            location,
            is_leader,
            badges,
            speciality,
            pokemons
        });

        return response.status(201).json(trainer);
        
    } catch (err) {
        return response.status(400).json({
            error:'@trainers/create',
            message: err.message || 'Failed to create trainer'
        });
    }
}

const update = async(request,response)=>{
    const {id} = request.params;

    const {
        name,
        age,
        location,
        is_leader,
        badges,
        speciality,
        pokemons} = request.body;
    
    try {

        const trainerUpdated = await trainerModel.findByIdAndUpdate(
            id,
            {
                name,
                age,
                location,
                is_leader,
                badges,
                speciality,
                pokemons
            },
            {
                new: true
            }
        );

        return response.json(trainerUpdated);
        
    } catch (err) {

        return response.status(400).json({
            error:'@trainers/update',
            message:err.message || `trainer not found ${id}`
        });        
    }
};

const remove = async(request,response)=>{
    const {id} = request.params;

    try {

        const trainerRemoved = await trainerModel.findByIdAndDelete(id);

        if(!trainerRemoved){
            throw new Error();
        }

        return response.status(204).send('Deletado com sucesso');
        
    } catch (err) {

        return response.status(400).json({
            error:'@trainers/remove',
            message:err.message || 'Failed to delete trainer'
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