const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() ); //tells my app that it can parse json
app.use( express.urlencoded({ extended: true }) ); //tells my app that it can gather form information

// app.get("/api", (req, res) => {
//     res.json({ message: "Hello World" });
// });

require("./server/config/jokes.config");

require("./server/routes/joke.routes")(app);


app.listen( port, () => console.log(`Listening on port: ${port}`) );