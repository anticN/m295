import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    res.send("This is the root.");
})



app.listen(port, () => {
    console.log(`Server gestartet auf Port: ${port}`);
})