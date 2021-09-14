const mongoose = require('mongoose');

// monoose connection/config
mongoose.connect('mongodb://localhost/jokesapidb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
