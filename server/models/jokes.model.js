const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    //fields quotes can have
    setup: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [10, "Setup must be at least 10 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required!"],
        minlength: [3, "Punchline must be at least 3 characters long."]
    }

})
//register the above ode at a table need
const Joke = mongoose.model("Joke", JokeSchema)

module.exports= Joke;