import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    res.send("This is the root.");
})

app.get("/now", (req, res) => {
    let tz = req.query.tz || "Europe/Berlin";
    res.send(`Current time from the timezone ${tz}: ${new Date().toLocaleTimeString("de-CH", {timeZone: tz})}`);
})

//app.get("/", (req, res) => {

//})



app.listen(port, () => {
    console.log(`Server gestartet auf Port: ${port}`);
})