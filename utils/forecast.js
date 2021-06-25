const request = require('request');

// Weather API 

const forecast = (lattitude, longitude, callback)=>{
    const url = `http://api.weatherstack.com/current?access_key=86bb3660366c84d1d2a47f853bf040d1&units=f&query=${lattitude},${longitude}`

    request({ url, json: true }, (err, response) => {
        if (err) {
            callback('Unable to connect to weather API', null)
        } else if (response.body.error) {
            callback('Unable to get weather data', null)
        } else {
            const actualTemperature = response.body.current.temperature
            const feelsLikeTemperature = response.body.current.feelslike
            const weatherDescription = response.body.current.weather_descriptions[0]
            const precip = response.body.current.precip
            callback(null, {actualTemperature, feelsLikeTemperature, weatherDescription, precip})
        }
    })
}

module.exports = forecast