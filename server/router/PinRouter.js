const express = require('express');

const pinController = require('../controller/pinController.js');

const router = express.Router();

router.get('/', pinController.getPins, (req, res) => {
    console.log('get request received');
    return res.status(200).json(res.locals.data)
});

router.post('/', pinController.addPin, (req, res) => {
    res.status(200).json('You made a post request, congratulations')
});

router.patch('/', pinController.updatePin, (req, res) => {
    res.status(200).json('You made a patch request, congratulations')
});

router.delete('/', pinController.deletePin, (req, res) => {
    res.status(200).json('You made a delete request, congratulations')
});

module.exports = router;


