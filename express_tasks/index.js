import express from "express";

const app = express();
const port = 3000;
const names = ["Jamarcus Andrade",
    "Amaya Brady",
    "Jonas Cline",
    "Noe Nicholson",
    "Fabian Gentry",
    "Dillon Snow",
    "Lainey Bray",
    "Elsie Jennings",
    "Cristian Tapia",
    "Johanna Whitaker",
    "Naima Maddox",
    "Precious Chung",
    "Irene Vance",
    "Kristin Ferguson",
    "Kason Mcdaniel",
    "Damon Gill",
    "Theresa Krueger",
    "Abigayle David",
    "Karen Dillon",
    "Olivia Humphrey"]

    function randomFunc(names) {
        for (let i = 0; i < 2; i++) {
            const random = names[Math.floor(Math.random() * names.length)];
            return random
        }
    }

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/now", (req, res) => {
    res.send(new Date().toISOString());
})

app.get("/zli", (req, res) => {
    res.redirect("https://www.zli.ch/");
})

app.get("/name", (req, res) => {
    res.send(randomFunc(names));
})

app.get("/html", (req, res) => {
    res.sendFile("/workspaces/m295/express_tasks/index.html");
})

app.get("/image", (req, res) => {
    res.sendFile("/workspaces/m295/express_tasks/image.webp");
})


app.listen(port, () => {
    console.log(`Server gestartet. Port: ${port}`)
})