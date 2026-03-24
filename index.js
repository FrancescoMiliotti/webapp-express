const express = require("express");
const app = express();

const filmRouter = require("./routers/filmRouter");


app.use(express.static("public"));

app.use(express.json());

app.get("/", (req, res) =>{
    res.send("Benvenuto sul server");
});


app.use("/movies", filmRouter);


app.listen(process.env.APP_PORT, () => {
    console.log(`Express avviato correttamente su http://localhost:${process.env.APP_PORT}/`);
});