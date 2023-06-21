require('dotenv').config();
const connectionString = process.env.CONNECTION_STRING;
const { Pool } = require('pg');

const pool = new Pool({
  connectionString
});

module.exports = {
    query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
    }
}; 