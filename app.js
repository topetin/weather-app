const request = require('request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

geocode('Buenos Aires', (error, data) => {
    try {
        console.log(data.location)
        forecast(data.latitude, data.longitude, (forecastError, forecastData) => {
            if (forecastError) {
                console.log(forecastError)
            } else {
                console.log(forecastData)
            }
        })
    } 
    catch (e) {
        console.log(error)
    }
})
