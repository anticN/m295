import express, { json, response } from "express";

const app = express();
const port = 3000;

let buecher = [{
    isbn: "1",
    title: "Der kleine Prinz",
    year: 1943,
    author: "Antoine de Saint-Exupéry"
  },
  {
    isbn: "2",
    title: "Die Verwandlung",
    year: 1915,
    author: "Franz Kafka"
  },
  {
    isbn: "3",
    title: "Der Prozess",
    year: 1925,
    author: "Franz Kafka"
  },
  {
    isbn: "4",
    title: "Der Prozess",
    year: 1925,
    author: "Franz Kafka"
  }];

let lends = [
    {
        id: "1",
        customer_id: "1",
        isbn: "1",
        borrowed_at: new Date().toISOString(),
        returned_at: "2023-05-06T16:10:00.000Z"
    },
    {
        id: "2",
        customer_id: "2",
        isbn: "3",
        borrowed_at: new Date().toISOString(),
        returned_at: "2023-05-06T18:10:00.000Z"
    },
    {
        id: "3",
        customer_id: "3",
        isbn: "2",
        borrowed_at: new Date().toISOString(),
        returned_at: ""
    },
    {
        id: "4",
        customer_id: "6",
        isbn: "4",
        borrowed_at: new Date().toISOString(),
        returned_at: "2023-05-07T16:10:00.000Z"
    }    
]

app.use(express.json());

//book functions
function findByISBN(isbn) {
    return buecher.find((book) => book.isbn === isbn);
}

function findAll(){
    return buecher;
}

function insert(book) {
    buecher = [...buecher, book];
}

function replace(book) {
    buecher = buecher.map((b) => b.isbn === book.isbn ? book : b)
    /*buecher = buecher.map((b) => {
        if(b.isbn === book.isbn){
            return book;
        } else {
            return b;
        } //Das gleiche wie oben
    })*/ 
}

function remove(isbn) {
    buecher = buecher.filter((b) => b.isbn !== isbn);
}

//books ressource
app.get("/book", (req, res) => {
    res.send("Here is the library.");
});

app.get("/books", (req, res) => {
    res.send(findAll());
})

app.get("/books/:isbn", (req, res) => {
    res.send(findByISBN(req.params.isbn));
})

app.post("/books", (req, res) => {
    const newBook = {
        isbn: "5",
        title: "Lambos Adventures",
        year: 2023,
        author: "Lambooo"
    }
    insert(newBook);
    res.send(findAll());
})

app.put("/books/:isbn", (req, res) => {
    const replaceBook = {
        isbn: req.params.isbn,
        title: "Miros Adventures",
        year: 2022,
        author: "Mirooo"
    }
    replace(replaceBook)
    res.send(findByISBN(req.params.isbn));
})

app.delete("/books/:isbn", (req, res) => {
    remove(req.params.isbn)
    res.sendStatus(204);
})


//lend functions
function allLends() {
    return lends;
}

function findByLendID(id) {
    return lends.find((lend) => lend.id === id);
}

function insertLend(lend){
    lends = [...lends, lend];
}

function updateLend(lend) {
    lends = lends.map((l) => l.id === lend.id ? lend : l);
}


//lends ressource
app.get("/lends", (req, res) => {
    res.send(allLends());
})

app.get("/lends/:id", (req, res) => {
    res.send(findByLendID(req.params.id));
})

app.post("/lends", (req, res) => {
    const newLend = {
        id: lends.length + 1,
        customer_id: req.query.customer_id,
        isbn: req.query.isbn,
        borrowed_at: new Date().toISOString(),
        returned_at: "" 
    }
    insertLend(newLend);
    res.send(newLend);
})

//listener
app.listen(port, () => {
    console.log(`Server läuft auf port: ${port}`);
});