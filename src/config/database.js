const mongoose = require('mongoose');

const {MONGO_DB_URI} = require('./env');

mongoose.connect(MONGO_DB_URI,
    {
        autoIndex: true
    }
);

mongoose.connection.on('connected', () =>{
    console.log('Database connected successfully');
});

mongoose.connection.on('error', (err) =>{
    console.log('Failed to connect database', err);
})