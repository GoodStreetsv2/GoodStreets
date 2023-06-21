const db = require('../database/db.js');

const pinController = {};

pinController.getPins = async (req, res, next) => {
    console.log('~~~~~~~~~~entering pinController.getPins middelware~~~~~~~~~~');
    try {
        const results = await db.query('SELECT * FROM pins');
        console.log(results.rows);
        res.locals.data = results.rows;
        return next();
    } catch (err) {
        // ADD ERROR HANDLER
        console.log(err);
    }
};

pinController.addPin= async (req, res, next) => {
    console.log('~~~~~~~~~~entering pinController.getPins middelware~~~~~~~~~~');
    console.log(req.body);
    try {
        const { pin_name, latitude, longitude, address, content, created_by, category_id } = req.body;
        const values = [pin_name, latitude, longitude, address, content, created_by, category_id];
        const queryString = 'INSERT INTO pins (pin_name, latitude, longitude, address, content, created_by, category_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
        const result = await db.query(queryString, values);
        console.log(result.rows[0]);
        return next();
    } catch (err) {
        // ADD ERROR HANDLER
        console.log(err);
    }
};

pinController.updatePin = async (req, res, next) => {
    console.log('~~~~~~~~~~entering pinController.updatePin middelware~~~~~~~~~~');
    return next();
}; 

pinController.deletePin= async (req, res, next) => {
    console.log('~~~~~~~~~~entering pinController.getPins middelware~~~~~~~~~~');
    return next();
};

module.exports = pinController;