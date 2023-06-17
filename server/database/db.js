require('dotenv').config();
const connectionString = process.env.CONNECTION_STRING;
const { Pool } = require('pg');

const pool = new Pool({connectionString});


module.exports = {
    async query(text, params) {
      const res = await pool.query(text, params);
      return res;
    }
};