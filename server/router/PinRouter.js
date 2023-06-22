const express = require('express');

const pinController = require('../controller/pincontroller.js');

const router = express.Router();

router.get('/', pinController.getPins, (req, res) => {
  console.log('get request received');
  return res.status(200).json(res.locals.data);
});

router.post('/geocode', async (req, res) => {
  const addFetch = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${req.body.latlng}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`,
    {
      method: 'POST',
      body: JSON.stringify({}),
      header: { 'Content-Type': 'application/json' },
    }
  );
  console.log('this is addfetch server');
  const parsedData = await addFetch.json();
  const friendly_address = parsedData.results[0].formatted_address;
  res.locals.address = friendly_address;
  res.status(200).json(res.locals.address);
});

router.post('/', pinController.addPin, (req, res) => {
  res.status(200).json(res.locals.newPin);
});

router.patch('/', pinController.updatePin, (req, res) => {
  res.status(200).json('You made a patch request, congratulations');
});

router.delete('/', pinController.deletePin, (req, res) => {
  res.status(200).json('You made a delete request, congratulations');
});

module.exports = router;
