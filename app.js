const request = require('request');
const geocode = require('./geocode.js');

// const url = 'https://api.darksky.net/forecast/32e45e6c41a044618f9d3b75a2113b08/37.8267,-122.4233'

// request({url: url, json: true}, function(error, response, body) {
//     console.log(`${body.daily.data[0].summary} It's currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain)`)
// });

geocode('Buenos Aires', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
        
})

