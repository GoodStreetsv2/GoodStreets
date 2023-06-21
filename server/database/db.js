require('dotenv').config();
const connectionString = 'postgres://xavzowox:XN8tG6HIhHXfcLvnGrhbqIoT3jV0qGlN@drona.db.elephantsql.com/xavzowox';
const { Pool } = require('pg');

const pool = new Pool({
  connectionString
});

module.exports = {
    query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
  connect: () => pool.connect(),
}; 