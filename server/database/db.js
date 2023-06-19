require('dotenv').config();
// const connectionString = process.env.CONNECTION_STRING;
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: "postgres://lnbgaogn:c3SKWHGnWIpZcTYbWbkQRQuElzLnJJeq@rajje.db.elephantsql.com/lnbgaogn",
});

module.exports = {
    async query(text, params) {
      const res = await pool.query(text, params);
      return res;
    }
}; 