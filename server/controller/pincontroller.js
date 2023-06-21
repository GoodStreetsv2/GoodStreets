const db = require('../database/db.js');
const pool = require('../database/db.js')

const pinController = {};

pinController.getPins = async (req, res, next) => {
    console.log('~~~~~~~~~~entering pinController.getPins middelware~~~~~~~~~~');
    try {
        const results = await db.query('SELECT * FROM categories');
        console.log(results);
        res.locals.data = results;
        return next();
    } catch (err) {
        console.log(err);
    }
};

pinController.updatePin = async (req, res, next) => {
    console.log('~~~~~~~~~~entering pinController.updatePin middelware~~~~~~~~~~');
    return next();
}; 

pinController.addPin= async (req, res, next) => {
    console.log('~~~~~~~~~~entering pinController.getPins middelware~~~~~~~~~~');
    return next();
};

pinController.deletePin= async (req, res, next) => {
    console.log('~~~~~~~~~~entering pinController.getPins middelware~~~~~~~~~~');
    return next();
};

module.exports = pinController;