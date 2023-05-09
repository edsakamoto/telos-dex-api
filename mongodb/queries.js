//lista o nome de todos os pokemons
db.pokemons.find({},{_id:0,name:1})

//Listagem de todos pokemons exibindo apenas os campos de "name" e "attack" e ordenando pelos que tem o "attack" mais forte

db.pokemons.find({},{name: 1,attack:1,_id: 0}).sort({attack: -1,_id: 1})

//Listagem dos pokemons do tipo "water" exibindo os campos de "name" e "speed" ordenando pelos que tem o "speed" mais rápido.

db.pokemons.find({}, {name:1, speed:1, _id:0}, {type1:{$in:["water"]}}).sort({speed: -1, _id: 1})


//Listagem de todos os pokemons lendário "is_legendary" exibindo apenas "name", "pokedex_number" e "type1"
db.pokemons.find({is_legendary: "1"}, {name: 1, pokedex_number: 1, type1: 1, _id: 0})

//Listagem de pokemons que possuem "attack" maior que "70" e "speed" maior que "60" exibindo os seguintes campos: "_id", "name", "attack", "speed", "hp"

db.pokemons.find({attack:{$gt:70}, speed:{$gt:60}}, {name:1, attack:1, speed:1, hp:1})

//Listar todos pokemons que possuam a "hp" menor que "60" ou a "defense" é menor que "60" exibindo os seguintes campos: "_id", "name", "hp" e "defense"

db.pokemons.find({$or:[{hp:60},{defence:{$lt:60}}]},{_id:1, name:1, hp:1, defence:1})

//Listar todos pokemons onde o "type1" esteja incluido em "psychic", "fighting", "fire", exibindo os seguintes campos: "name", "is_legendary" "type1"

db.pokemons.find({type1: {$in:["psychic", "fighting", "fire"]}},{name:1, is_legendary:1, type:1, _id:0})

//Listar todos os pokemons do "type1" sendo "fire" e "type2" "flying", exibindo os seguintes campos: "name", "type1", "type2" e ordenando pelo nome de forma ASCENDENTE

db.pokemons.find({type1:"fire",type2: "flying"},{name:1, type1:1, type2:1, _id:0}).sort({name:1})

//Listar todos os pokemons exceto os lendários "is_legendary", exibindo os seguintes campos: "name" e "pokedex_number"

db.pokemons.find({is_legendary:"0"},{name:1, pokedex_number:1, _id: 0})