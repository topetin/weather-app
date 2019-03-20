const request = require('request');

const url = 'https://api.darksky.net/forecast/32e45e6c41a044618f9d3b75a2113b08/37.8267,-122.4233'

request({url: url, json: true}, function(error, response, body) {
    console.log(`${body.daily.data[0].summary} It's currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain)`)
});

const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidG9wZXRpbiIsImEiOiJjanRoYzJheTgxeTRpNDBtdWIxMWZpMnhvIn0.d-eMCaQR8hGq8br93_sYCQ'

request({url: geocodeUrl, json: true}, function(error, response, body) {
    if (error) {
        console.log('Unable to connect to location services.');
    } else if (body.features[0].length === 0) {
        console.log('Location not found');
    } else {
        const lat = body.features[0].center[1];
        const lng = body.features[0].center[0];
    }
});