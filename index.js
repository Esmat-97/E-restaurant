const express = require('express');
const guestsRouter = require('./guests');
const productsRouter = require('./products');
const msgsRouter = require('./msgs');

const app = express();
const port = 1999;

app.use('/guests', guestsRouter);
app.use('/products', productsRouter);
app.use('/msgs', msgsRouter);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
