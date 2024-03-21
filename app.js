const express = require("express");
const app = express();
const port = 3000;
//const url = "http://localhost:3000";
const books = require("./data/books.json");

app.use(express.json());

// Obtener todos los libros
// http://localhost:3000/all
app.get("/all", (req, res) => {
  res.status(200).json(books);
});

// Obtener el primer libro
// http://localhost:3000/first
app.get("/first", (req, res) => {
  res.status(200).json(books[0]);
});

// Obtener el ultimo libro
// http://localhost:3000/last
app.get("/last", (req, res) => {
  res.status(200).json(books[books.length - 1]);
});

// Obtener libro en el medio
// http://localhost:3000/middle
app.get("/middle", (req, res) => {
  res.status(200).json(books[50]);
  // res.status(200).json(books.length/2);
});

// Obtener el titulo del libro de Dante Alighieri
// http://localhost:3000/author/dante-alighieri
app.get("/author/dante-alighieri", (req, res) => {
  const book = books.find((item) => item.author == "Dante Alighieri");
  res.status(200).json(book.title);
});

// Obtener pais de libro de Charles Dickens
// http://localhost:3000/country/charles-dickens
app.get("/country/charles-dickens", (req, res) => {
  const book = books.find((item) => item.author == "Charles Dickens");
  res.status(200).json(book.country);
});

// Obtener paginas y año de Cervantes
// http://localhost:3000/year&pages/cervantes
app.get("/year&pages/cervantes", (req, res) => {
  const book = books.find((item) => item.author == "Miguel de Cervantes");
  res.status(200).json({ pages: book.pages, year: book.year });
});

// Obtener numero de libros de España
// http://localhost:3000/country/count/spain
app.get("/country/count/spain", (req, res) => {
  const book = books.filter((element) => element.country === "Spain");
  res.status(200).json(book.length);
});

// Obtener true or false si hay libro de Alemania
// http://localhost:3000/country/at-least/germany
app.get("/country/at-least/germany", (req, res) => {
  const book = books.filter((element) => element.country === "Germany");
  if (book.length > 0) {
    res.status(200).json(true);
  } else {
    res.status(200).json(false);
  }
});

/*  Solucion del chef
app.get("/country/at-least/germany", (req, res) => {
    const comparison = books
                          .some(element => element.country === "Germany");
    res.status(200).json(comparison);
  }); */

// Obtener true o false si hay libros con mas de 200pgs
// http://localhost:3000/pages/all-greater/200

app.get("/pages/all-greater/200", (req, res) => {
  const book = books.filter((element) => element.pages > 200);
  if (book.length > 0) {
    res.status(200).json(false);
  } else {
    res.status(200).json(true);
  }
});

/*  Solucion del chef
app.get("/pages/all-greater/200", (req, res) => {
    const comparison = books
                          .every(element => element.pages > 100);
    res.status(200).json(comparison);
  });*/

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
