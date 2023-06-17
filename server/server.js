const express = require('express');
const app = express();
const pinRouter = require('./router/PinRouter.js');
const PORT = 8080; // might not be needed


require('dotenv').config();
const connectionString = process.env.CONNECTION_STRING;
const pg = require('pg'); //we need to 'npm install pg'
const db = pg(connectionString);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/router', pinRouter);
// var conString = "postgres://lnbgaogn:c3SKWHGnWIpZcTYbWbkQRQuElzLnJJeq@rajje.db.elephantsql.com/lnbgaogn" //Can be found in the Details page
// var client = new pg.Client(conString);
// client.connect(function(err) {
//   if(err) {
//     return console.error('could not connect to postgres', err);
//   }
//   client.query('SELECT NOW() AS "theTime"', function(err, result) {
//     if(err) {
//       return console.error('error running query', err);
//     }
//     console.log(result.rows[0].theTime);
//     client.end();
//   });
// });

app.listen(PORT, () => {
    console.log(`Server listening on Port: ${PORT}`);
})

module.exports = app;