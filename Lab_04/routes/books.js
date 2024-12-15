//definition of operations whitch we do on books
const express = require('express');
const router = express.Router(); //defines routes

const booksService = require('../services/booksService')

router.get('/',booksService.getAllBooks);

router.get('/:id',booksService.getBook);

router.post('/',booksService.addBook);

router.delete('/:id',booksService.deleteBook);

//We exports router to allowed to used in booksApp.js
module.exports = router;