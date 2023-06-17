const { Pool } = require('pg');

const pool = new Pool({
    connectionString: PG_URI
});


module.exports = {
    async query(text, params) {
      const res = await pool.query(text, params);
      return res;
    }
};