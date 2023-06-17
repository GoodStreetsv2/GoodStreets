const express = require('express');

const pinController = require('../controller/pinController.js');

const router = express.Router();

router.get('/', pinController.getPin, (req, res) => {
    res.status(200).json({})
});

router.patch('/', pinController.updatePin, (req, res) => {
    res.status(200).json({})
});

router.post('/', pinController.addPin, (req, res) => {
    res.status(200).json({})
});

router.delete('/', pinController.deletePin, (req, res) => {
    res.status(200).json({})
});


