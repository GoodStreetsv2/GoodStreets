const express = require('express');
const app = express();
const pinRouter = require('./router/pinRouter.js');
// const PORT = 8080;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/router', pinRouter);

app.listen(PORT, () => {
    console.log(`Server listening on Port: ${PORT}`);
})

module.exports = app;