import express, { response } from "express";
import session from "express-session";

const app = express();
const port = 3000;

app.use(express.json());
app.use(session({
    secret: 'verysecret',
      resave: false,
      saveUninitialized: true,
    cookie: {}
  }))

app.get("/", (req, res) => {
    req.session.views = (req.session.views || 0) + 1; 
    console.log(req.session);
    res.end(req.session.views + " views");
});

app.post("/name", (req, res) => {
    req.session.name = req.query.name
    res.send(req.session.name);
})

app.get("/name", (req, res) => {
    res.send(req.session.cookie);
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});