// const axios = require('axios');
const request = require('request');

// Mapbox 
const mapBoxAccessToken = 'pk.eyJ1IjoidmFsZW50aW5hcm9kcmlndWVzIiwiYSI6ImNrZWg0bThwbTBrYjAzMnFidmNkbDNwZGYifQ.T7QjhOPu0oM84seDOI5pJQ'
const search_text = 'New York';
const mapBoxURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${search_text}.json?access_token=${mapBoxAccessToken}&limit=1`
// console.log(mapBoxURL)
let lattitude, longitude
request({ url: mapBoxURL, json: true }, (err, response) => {
    if (err) {
        console.log('Unable to fetch to location API')
    } else if (response.body.features && response.body.features[0]) {
        longitude = response.body.features[0].center[0]
        lattitude = response.body.features[0].center[1]
        console.log(longitude, lattitude)
    } else {
        console.log('Unable to fetch to location')
    }
})

lattitude = -73.9866
longitude = 40.7306
// Weather API 
const url = `http://api.weatherstack.com/current?access_key=86bb3660366c84d1d2a47f853bf040d1&units=f&query=${lattitude},${longitude}`

request({ url, json: true }, (err, response) => {
    if (err) {
        console.log('Unable to connect to weather API')
    } else if (response.body.error) {
        console.log('Unable to get weather data')
    } else {
        const actualTemperature = response.body.current.temperature
        const feelsLikeTemperature = response.body.current.feelslike
        console.log(response.body.current.weather_descriptions[0], `It is currently ${actualTemperature} degrees out. It feels like ${feelsLikeTemperature} degrees out. There is a ${response.body.current.precip} chance of rain `)
    }
})

// axios.get(url, (error, response)=>{
//     console.log(response)
//     console.log(error)
// })

//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })


// Sample Demo Callback 

const add = (a, b, callback) => {
    setTimeout(() => {
        const sum = a + b
        // return sum  // this wont work try uncommenting this and run
        callback(sum)
    }, 5000)
}

add(1, 4, (data) => {
    console.log(data)
}
)
