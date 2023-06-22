const db = require('../database/db.js');

const pinController = {};

pinController.getPins = async (req, res, next) => {
    console.log('~~~~~~~~~~entering pinController.getPins middleware~~~~~~~~~~');
    try {
        const queryString = 'SELECT pins.*, categories.name FROM pins LEFT OUTER JOIN categories ON pins.category_id = categories.category_id;'
        const results = await db.query(queryString);
        // console.log(results.rows);
        res.locals.data = results.rows;
        return next();
    } catch (err) {
        // ADD ERROR HANDLER
        console.log(err);
    }
};

pinController.addPin= async (req, res, next) => {
    console.log('~~~~~~~~~~entering pinController.addPins middleware~~~~~~~~~~');
    // console.log(req.body);
    try {
        const { pin_name, latitude, longitude, address, content, created_by, category_id } = req.body;
        const values = [pin_name, latitude, longitude, address, content, created_by, category_id];
        console.log('pin_name:',pin_name, latitude, longitude, 'address:', address, 'content:', content, 'created_by', created_by, 'category_id', category_id)
        const queryString = 'INSERT INTO pins (pin_name, latitude, longitude, address, content, created_by, category_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
        const result = await db.query(queryString, values);
        // console.log(result.rows[0]);
        return next();
    } catch (err) {
        // ADD ERROR HANDLER
        console.log(err);
    }
};

pinController.updatePin = async (req, res, next) => {
    console.log('~~~~~~~~~~entering pinController.updatePin middleware~~~~~~~~~~');
    return next();
}; 

pinController.deletePin= async (req, res, next) => {
    console.log('~~~~~~~~~~entering pinController.getPins middleware~~~~~~~~~~');
    return next();
};

module.exports = pinController;