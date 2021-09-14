const JokeController = require("../controllers/joke.controller");


module.exports = app => {
    // app.get("/api", JokeController.helloworld);
    app.get("/api/jokes", JokeController.findAllJokes);
    app.get("/api/jokes/random", JokeController.findRandomJoke);
    app.get("/api/jokes/:id", JokeController.findOneJoke);
    app.post("/api/jokes/new", JokeController.createNewJoke);
    app.put("/api/jokes/:id", JokeController.updateExistingJoke);
    app.delete("/api/jokes/:id", JokeController.deleteJoke);
}