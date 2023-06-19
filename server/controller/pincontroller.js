const db = require('../database/db.js');

const pinController = {};

pinController.getPins = async (req, res, next) => {
    try {
        const results = await db.query('SELECT * FROM categories');
        res.json(results);
        return next()
    } catch (err) {
        console.log(err);
    }
};

pinController.updatePin= async (req, res, next) => {

}; 

pinController.addPin= async (req, res, next) => {
    
};

pinController.deletePin= async (req, res, next) => {

};

module.exports = pinController;