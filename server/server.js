const express = require('express');
const app = express();
const pinRouter = require('./router/PinRouter');
const PORT = 3000;
const path = require('path');

const pool = require('./database/db');

pool.connect().then(client => {
  console.log('connected to SQL database')
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/pin', pinRouter);

// app.get('/', (req, res) => {
//   return res.status(200).send('Great Server Page')
// });

// app.use('/client/assets', express.static(path.join(__dirname, '../client/assets')));

app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });
  

app.listen(PORT, () => {
    console.log(`Server listening on Port: ${PORT}`);
})

module.exports = app;