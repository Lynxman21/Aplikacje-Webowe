const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const booksRouter = require('../routes/orders');

app.use(bodyParser.json());
app.use('/api/orders',booksRouter);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Serwer działa na http://localhost:${PORT}`);
})
