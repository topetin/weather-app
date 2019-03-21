const request = require('request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const address = process.argv[2]

if (!address) {
    console.log('Address must be provided');
    
} else {
    geocode(address, (error, {location, longitude, latitude}) => {
        try {
            console.log(location)
            forecast(latitude, longitude, (forecastError, forecastData) => {
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
}

