const http = require('http');
const url = `http://api.weatherstack.com/current?access_key=86bb3660366c84d1d2a47f853bf040d1&units=f&query=${lattitude},${longitude}`
http.request(url, (response) => {
    // callback can be registered on different events
    response.on('data', (sample) => {
        console.log(sample)
    })
})