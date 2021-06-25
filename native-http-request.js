const http = require('http');
const url = `http://api.weatherstack.com/current?access_key=86bb3660366c84d1d2a47f853bf040d1&units=f&query=18.1,72.04`
const request = http.request(url, (response) => {
    let data = '';
    // callback can be registered on different events
    // handler is the function
    // data is an event 
    response.on('data', (chunk) => {
        // Prints a buffer
        // console.log(chunk)
        data += chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log('end')
        console.log(body)
    })
})

request.on('error', (err) => {
    console.log(err)
})

request.end()