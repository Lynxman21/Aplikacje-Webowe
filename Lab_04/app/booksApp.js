//main file, it defines common settings of server
const express = require('express'); //To web apps and servers (HTTP requests)
const app = express();
const bodyParser = require('body-parser') //middleware (functions which has access to request and response object) it parse JSON, data are
// availabe in req.body

//import books.js file
const booksRouter = require('../routes/books');

app.use(bodyParser.json()) //do it automatically
//path for books
app.use('/api/books',booksRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serwer działa na http://localhost:${PORT}`);
})

//How to run our server? Polecenie node app.js i idziemy do Postmana
