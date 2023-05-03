import express, { urlencoded } from "express";
import cors from "cors";
import multer from "multer";

const app = express();
const port = 3000;
let names = ["Nikola", "Fernando", "Lambou", "Miro"];

app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get("/", (req, res) =>{
    res.send("This is the root.");
})

app.get("/now", (req, res) => {
    let tz = req.query.tz || "Europe/Berlin";
    res.send(`Current time from the timezone ${tz}: ${new Date().toLocaleTimeString("de-CH", {timeZone: tz})}`);
})

app.get("/name", (req, res) => {
    res.sendFile("/workspaces/m295/express_tasks2/index.html");
})

app.post("/names", (req, res) => {
    let name = req.body.name;
    names.push(name);
    res.send(names);
})

app.delete("/delname", multer().none(), (req, res) => {
    names = names.filter((n) => n !== req.body.name);
    console.log(req.body.name);
    console.log(names);
    res.send(req.body.name);
})

app.listen(port, () => {
    console.log(`Server gestartet auf Port: ${port}`);
})