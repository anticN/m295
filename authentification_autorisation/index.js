import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("This is the root of authentication");
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});