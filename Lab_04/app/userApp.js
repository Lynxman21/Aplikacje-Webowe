const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const userRouter = require('../routes/user')

app.use(bodyParser.json());
app.use('/api',userRouter);

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Serwer użytkowników działa na http://localhost:${PORT}`);
});