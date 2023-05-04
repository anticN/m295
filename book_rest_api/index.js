import express, { json, response } from "express";
import fs from "fs";
//import * as books from "./books.json" assert { type: 'json' }

const app = express();
const port = 3000;

let buecher = [{
    "isbn": "1",
    "title": "Der kleine Prinz",
    "year": 1943,
    "author": "Antoine de Saint-Exupéry"
  },
  {
    "isbn": "2",
    "title": "Die Verwandlung",
    "year": 1915,
    "author": "Franz Kafka"
  },
  {
    "isbn": "3",
    "title": "Der Prozess",
    "year": 1925,
    "author": "Franz Kafka"
  },
  {
    "isbn": "4",
    "title": "Der Prozess",
    "year": 1925,
    "author": "Franz Kafka"
  }];

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

app.use(express.json());

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
        isbn: "15",
        title: "Lambos Adventures",
        year: 2023,
        author: "Lambooo"
    }
    insert(newBook);
    res.send(findAll());
})

app.delete("/books/:isbn", (req, res) => {
    remove(req.params.isbn)
    res.sendStatus(204);
})

app.listen(port, () => {
    console.log(`Server läuft auf port: ${port}`);
});